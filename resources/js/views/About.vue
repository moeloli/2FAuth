<script setup>
    import { UseColorMode } from '@vueuse/components'
    import { useUserStore } from '@/stores/user'

    const $2fauth = inject('2fauth')
    const user = useUserStore()
    const router = useRouter()
    const returnTo = router.options.history.state.back
</script>

<template>
    <ResponsiveWidthWrapper>
    <UseColorMode v-slot="{ mode }">
        <h1 class="title has-text-grey-dark">{{ $t('commons.about') }}</h1>
        <p class="block">
            <span :class="mode == 'dark' ? 'has-text-white':'has-text-black'">
                <span class="is-size-5">2FAuth</span>
                <span v-if="user.isAuthenticated"> v{{ $2fauth.version }}</span>
            </span>
            <br />
            {{ $t('commons.2fauth_teaser')}}
        </p>
        <img class="about-logo" src="logo.svg" alt="2FAuth logo" />
        <p class="block">
            ©Bubka <a class="is-size-7" href="https://github.com/Bubka/2FAuth/blob/master/LICENSE">AGPL-3.0 license</a>
        </p>
        <h2 class="title is-5 has-text-grey-light">
            {{ $t('commons.resources') }}
        </h2>
        <div class="buttons">
            <a class="button" :class="{'is-dark' : mode == 'dark'}" href="https://github.com/Bubka/2FAuth" target="_blank">
                <span class="icon is-small">
                    <FontAwesomeIcon :icon="['fab', 'github-alt']" />
                </span>
                <span>Github</span>
            </a>
            <a class="button" :class="{'is-dark' : mode == 'dark'}" href="https://docs.2fauth.app/" target="_blank">
                <span class="icon is-small">
                    <FontAwesomeIcon :icon="['fas', 'book']" />
                </span>
                <span>Docs</span>
            </a>
            <a class="button" :class="{'is-dark' : mode == 'dark'}" href="https://demo.2fauth.app/" target="_blank">
                <span class="icon is-small">
                    <FontAwesomeIcon :icon="['fas', 'flask']" />
                </span>
                <span>Demo</span>
            </a>
            <a class="button" :class="{'is-dark' : mode == 'dark'}" href="https://docs.2fauth.app/resources/rapidoc.html" target="_blank">
                <span class="icon is-small">
                    <FontAwesomeIcon :icon="['fas', 'code']" />
                </span>
                <span>API</span>
            </a>
        </div>
        <h2 class="title is-5 has-text-grey-light">
            {{ $t('commons.credits') }}
        </h2>
        <ul>
            <li>{{ $t('commons.made_with') }}&nbsp;<a href="https://docs.2fauth.app/credits/">Laravel, Bulma CSS, Vue.js and more</a></li>
            <li>{{ $t('commons.ui_icons_by') }}&nbsp;<a href="https://fontawesome.com/">Font Awesome</a>&nbsp;<a class="is-size-7" href="https://fontawesome.com/license/free">(CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)</a></li>
            <li>{{ $t('commons.logos_by') }}&nbsp;<a href="https://2fa.directory/">2FA Directory</a>&nbsp;<a class="is-size-7" href="https://github.com/2factorauth/twofactorauth/blob/master/LICENSE.md">(MIT License)</a></li>
        </ul>
        <!-- footer -->
        <VueFooter :showButtons="true">
            <ButtonBackCloseCancel :returnTo="{ path: returnTo }" action="back" />
        </VueFooter>
    </UseColorMode>
    </ResponsiveWidthWrapper>
</template>