<template>
    <Header />
    <router-link :to="{ name: home }"></router-link>
    <router-view />
    <Footer />
</template>
  
<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
</script>