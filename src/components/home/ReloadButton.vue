<template>
    <button class="btn" @click="reloadPage">{{ reloadMessage }}</button>    
</template>
  
<script setup>
import {defineProps} from 'vue'

const props = defineProps({
   reloadMessage: String, 
})

const reloadPage = () => {
    window.location.reload()
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>