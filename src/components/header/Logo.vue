<template>
    <img class="logo" src={{image}} alt="">   
</template>

<script setup>
const props = defineProps({
  image: String, 
})
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>