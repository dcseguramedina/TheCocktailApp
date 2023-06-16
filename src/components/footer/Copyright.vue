<template>
    <p class="copyright">{{text}}</p>
</template>

<script setup>
const props = defineProps({
  text: String, 
})
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>