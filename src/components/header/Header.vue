<template>
    <header class="header">
        <div class="header_logo">
            <Logo />
        </div>
        <div class="header_slogan">
            <Slogan title="The Cocktail App" />
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import Slogan from './Slogan.vue'

export default {
    components: {
        Logo,
        Slogan
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>