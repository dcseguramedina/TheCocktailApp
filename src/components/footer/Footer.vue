<template>
    <footer class="footer">
        <div class="footer_text">
            <Copyright :msg="text"/>
        </div>                
    </footer>
</template>

<script setup>
import {ref} from 'vue'
import Copyright from './Copyright.vue'

const text = ref("© 2023 The Cocktail App. All rights reserved")
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>