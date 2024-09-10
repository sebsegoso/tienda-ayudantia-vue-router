<template>
  <div class="container">
    <h1>Esta es la vista de productos</h1>
    <p v-if="isLoading">Cargando...</p>
    <main v-else class="row">
      <!-- <div v-for="product in products" :key="product.id">
        <RouterLink :to="{ name: 'productDetail', params: { productId: product.id } }">
          {{ product.title }}</RouterLink
        >
      </div> -->
      <RouterLink
        class="col-12 col-lg-6"
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'productDetail', params: { productId: product.id } }"
      >
        <ProductItem class="mx-auto" :product="product" hideDescription />
      </RouterLink>
    </main>
  </div>
</template>

<script>
import { ProductsService } from '@/services/ProductsService'
import { RouterLink } from 'vue-router'
import ProductItem from '@/components/ProductItem.vue'
export default {
  name: 'ProductsView',
  components: { RouterLink, ProductItem },
  data() {
    return {
      ocultarDescripcion: true,
      isLoading: true,
      products: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const service = new ProductsService()
      const allProducts = await service.fetchAllProducts()
      if (allProducts) {
        this.products = allProducts
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>