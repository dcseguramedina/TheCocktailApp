<template>
    <main class="not_found">
      <div class="error_code">
        <ErrorCode 
        :msg="errorCode"
        />
      </div>
      <div class="error_message">
        <ErrorMessage
        :msg="errorMessage"
        />
      </div>
      <div class="go_back">
        <GoBack
        :msg="goBack"
        />
      </div>      
    </main>
  </template>

<script setup>
import { ref } from 'vue'
import ErrorCode from '../components/notFound/ErrorCode.vue'
import ErrorMessage from '../components/notFound/ErrorMessage.vue'
import GoBack from '../components/notFound/GoBack.vue'

const errorCode = ref(404)
const errorMessage = ref(`Oups! La page que vous demandez n'existe pas`)
const goBack = ref (`Retourner sur la page d'accueil`)
</script>

<style lang="scss">
@import '../assets/sass/main.scss'
</style>