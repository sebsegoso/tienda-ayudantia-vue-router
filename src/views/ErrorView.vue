<template>
  <div class="container">
    <h1>Hubo un error, la página que buscas no existe</h1>
    <RouterLink to="/"><button>ir al home</button></RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink }
}
</script>

<style>
</style>