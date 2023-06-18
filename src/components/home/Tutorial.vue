<template>
  <div class="tutorial">
    <h2 class="tutorial_text">{{ text }}</h2>
    <h2 class="tutorial_text">{{ question }}</h2>
  </div>
</template>
  
<script>
export default {
  props: {
    text: String,
    question: String
  }
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>