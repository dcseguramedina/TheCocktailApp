<template>
    <main>
        <Gallery :msg="galleryTitle" />
    </main>    
</template>
  
<script setup>
import { ref } from 'vue'
import Gallery from '../components/home/Gallery.vue';

const galleryTitle = ref("Cocktails")
</script>
  
<style lang="scss">
@import '../assets/sass/main.scss'
</style>