<template>
    <button class="btn" @click="reloadPage">Let's go for another round</button>    
</template>
  
<script setup>
// const props = defineProps({
//   buttonText: String, 
// })

const reloadPage = () => {
    window.location.reload()
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>