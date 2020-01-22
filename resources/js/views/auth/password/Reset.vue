<template>
    <div class="section">
        <div class="columns is-mobile  is-centered">
            <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <h1 class="title">{{ $t('auth.forms.new_password') }}</h1>
                <form @submit.prevent="handleSubmit" @keydown="form.onKeydown($event)">
                    <div class="field">
                        <label class="label">{{ $t('auth.forms.email') }}</label>
                        <div class="control">
                            <input id="email" type="email" class="input" v-model="form.email" disabled readonly />
                        </div>
                        <field-error :form="form" field="email" />
                    </div>
                    <div class="field">
                        <label class="label">{{ $t('auth.forms.new_password') }}</label>
                        <div class="control">
                            <input id="password" type="password" class="input" v-model="form.password" />
                        </div>
                        <field-error :form="form" field="password" />
                    </div>
                    <div class="field">
                        <label class="label">{{ $t('auth.forms.confirm_password') }}</label>
                        <div class="control">
                            <input id="password_confirmation" type="password" class="input" v-model="form.password_confirmation" />
                        </div>
                        <field-error :form="form" field="password_confirmation" />
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <v-button :isLoading="form.isBusy" >{{ $t('auth.forms.change_password') }}</v-button>
                        </div>
                        <div class="control">
                            <router-link :to="{ name: 'login' }" class="button is-text">{{ $t('commons.cancel') }}</router-link>
                        </div>
                    </div>
                    <div class="field" v-if="errorMessage">
                        <span class="tag is-danger">
                            {{ errorMessage }}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from './../../../components/Form'

    export default {
        data(){
            return {
                errorMessage: '',
                form: new Form({
                    email : '',
                    password : '',
                    password_confirmation : '',
                    token: ''
                })
            }
        },

        created () {
            this.form.email = this.$route.query.email
            this.form.token = this.$route.params.token
        },

        methods : {
            handleSubmit(e) {
                e.preventDefault()

                this.form.post('/api/password/reset')
                .then(response => {

                    this.$router.go('/');
                })
                .catch(error => {
                    if( error.response.data.resetFailed ) {
                        this.errorMessage = error.response.data.resetFailed
                    }
                    else if( error.response.status !== 422 ) {
                        this.$router.push({ name: 'genericError', params: { err: error.response } });
                    }
                });
            }
        },
    }
</script>