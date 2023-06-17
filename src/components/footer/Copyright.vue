<template>
    <p class="copyright">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: String
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>