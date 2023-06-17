<template>
  <main>
    <ErrorMessage code="404" text="Oups! La page que vous demandez n'existe pas"
      goBack="Retourner sur la page d'accueil" />
  </main>
</template>

<script>
import ErrorMessage from '../components/notFound/ErrorMessage.vue'

export default {
  components: {
    ErrorMessage
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss'
</style>