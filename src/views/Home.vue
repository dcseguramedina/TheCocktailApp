<template>
    <main>
        <Tutorial text="Let's try something new. You just need to bring your good energy and we will find some cocktails for you. 
                If you don't like our choices, you can always go for another round and enjoy the party."
            question="Are you ready?" />
        <Gallery title="Your cocktails for today" />
    </main>
</template>
  
<script>
import Tutorial from '../components/home/Tutorial.vue';
import Gallery from '../components/home/Gallery.vue';

export default {
    components: {
        Tutorial,
        Gallery
    }
}
</script>
  
<style lang="scss">
@import '../assets/sass/main.scss'
</style>