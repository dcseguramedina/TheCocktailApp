<template>
  <main class="not_found">
    <div class="error_code">
      <ErrorCode code="404" />
    </div>
    <div class="error_message">
      <ErrorMessage text="Oups! La page que vous demandez n'existe pas" />
    </div>
    <div class="go_back">
      <GoBack text="Retourner sur la page d'accueil" />
    </div>
  </main>
</template>

<script>
import ErrorCode from '../components/notFound/ErrorCode.vue'
import ErrorMessage from '../components/notFound/ErrorMessage.vue'
import GoBack from '../components/notFound/GoBack.vue'

export default {
  components: {
    ErrorCode,
    ErrorMessage,
    GoBack
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss'
</style>