<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Laravel\Passport\Passport;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->nullableMorphs('owner', after: 'user_id');

            $table->after('provider', function (Blueprint $table) {
                $table->text('redirect_uris')->nullable();
                $table->text('grant_types')->nullable();
            });
        });

        foreach (Passport::client()->cursor() as $client) {
            Model::withoutTimestamps(fn () => $client->forceFill([
                'owner_id' => $client->user_id,
                'owner_type' => $client->user_id
                    ? config('auth.providers.'.($client->provider ?: config('auth.guards.api-guard.provider')).'.model')
                    : null,
                'redirect_uris' => $client->redirect_uris,
                'grant_types' => $client->grant_types,
            ])->save());
        }

        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->dropColumn(['user_id', 'redirect', 'personal_access_client', 'password_client']);

            $table->text('redirect_uris')->nullable(false)->change();
            $table->text('grant_types')->nullable(false)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->index()->after('id');
            $table->text('redirect')->after('provider');
            $table->boolean('personal_access_client')->after('redirect');
            $table->boolean('password_client')->after('personal_access_client');
        });

        foreach (Passport::client()->cursor() as $client) {
            Model::withoutTimestamps(fn () => $client->forceFill([
                'user_id' => $client->owner_id,
                'redirect' => implode(',', $client->redirect_uris ?? []),
                'personal_access_client' => in_array('personal_access', $client->grant_types ?? []),
                'password_client' => in_array('password', $client->grant_types ?? []),
            ])->save());
        }

        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->text('redirect')->nullable(false)->change();
            $table->boolean('personal_access_client')->nullable(false)->change();
            $table->boolean('password_client')->nullable(false)->change();

            $table->dropMorphs('owner');
            $table->dropColumn(['redirect_uris', 'grant_types']);
        });
    }
};
