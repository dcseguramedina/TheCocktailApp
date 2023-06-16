<template>
    <main>
        <Tutorial />
        <Gallery />
        <ReloadButton /> 
    </main>    
</template>
  
<script setup>
//import { ref } from 'vue'
import Tutorial from '../components/home/Tutorial.vue';
import Gallery from '../components/home/Gallery.vue';
import ReloadButton from '../components/home/ReloadButton.vue';

//const buttonText = ref("Let's go for another round")
</script>
  
<style lang="scss">
@import '../assets/sass/main.scss'
</style>