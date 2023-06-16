<template>
    <header class="header">
        <div class="header_logo">
            <Logo :msg="image"/>
        </div>
        <div class="header_slogan">
            <Slogan :msg="title"/>
        </div>          
        <button class="btn"><i class="fa-solid fa-shuffle"></i></button>     
    </header>
</template>

<script setup>
import {ref} from 'vue'
import Logo from './Logo.vue'
import Slogan from './Slogan.vue'

const image = ref('../../assetes/logo.png')
const title = ref("The Cocktail App")
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>