<template>
    <footer class="footer">
        <div class="footer_text">
            <Copyright text="© 2023 The Cocktail App. All rights reserved"/>
        </div>                
    </footer>
</template>

<script>
import Copyright from './Copyright.vue'

export default {
  components: { Copyright }
}
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>