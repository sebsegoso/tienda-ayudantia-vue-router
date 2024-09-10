<template>
  <div class="container">
    <p v-if="isLoading">Cargando producto...</p>
    <main v-else>
      <product-item :product="product" />
    </main>
  </div>
</template>

<script>
import { ProductsService } from '@/services/ProductsService'
import ProductItem from '@/components/ProductItem.vue'
export default {
  components: { ProductItem },
  name: 'ProductDetailView',
  data() {
    return {
      isLoading: true,
      product: null
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const id = this.$route.params.productId
      const service = new ProductsService()
      const productData = await service.fetchProductById(id)
      // si producto no existe, redirecciona a not found
      if (!productData) {
        this.$router.push({ name: 'notFound' })
      } else {
        this.product = productData
        this.isLoading = false
      }
    }
  }
}
</script>

<style>
</style>