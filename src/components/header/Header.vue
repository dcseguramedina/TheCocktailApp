<template>
    <header class="header">
        <div class="header_logo">
            <Logo />
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
    components: {
        Logo,
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>