<?php

namespace App\Listeners;

use App\Events\TwoFAccountOwnershipTransferred;
use App\Listeners\Traits\HasLocalizedNotification;
use App\Notifications\TwoFAccountOwnershipTransferredNotification;

class SendTwoFAccountOwnershipTransferredNotification
{
    use HasLocalizedNotification;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(TwoFAccountOwnershipTransferred $event) : void
    {
        if ($event->twofaccount->user->preferences['notifyOnOwnershipTransfer'] == true) {
            try {
                $event->twofaccount->user->notify(
                    (new TwoFAccountOwnershipTransferredNotification($event->twofaccount, $event->previousOwner))
                        ->locale($this->userLocale($event->twofaccount->user))
                );
            } catch (\Throwable) {
                // Nothing to do here, LogNotificationListener will log error details
            }
        }
    }
}
