<template>
  <div class="error">
    <h2 class="error_code">{{ code }}</h2>
    <h2 class="error_message">{{ text }}</h2>
    <a class="error_go_back" :href="'/'">{{ goBack }}</a>
  </div>
</template>

<script>
export default {
  props: {
    code: Number,
    text: String,
    goBack: String,
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/main.scss'
</style>