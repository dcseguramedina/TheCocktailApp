<template>
    <h1 class="slogan">{{title}}</h1>   
</template>

<script setup>
const props = defineProps({
  title: String, 
})
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>