<template>
    <button class="btn" @click="reloadPage">{{ text }}</button>    
</template>
  
<script>
export default {
  props: {
    text: String
  },

  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>