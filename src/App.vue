<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: { RouterLink, RouterView }
}
</script>

<template>
  <header>
    <nav id="Navbar" class="container py-3 d-flex gap-3">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'products' }">Productos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
