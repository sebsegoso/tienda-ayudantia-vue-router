<template>
  <div class="card mb-3 h-100" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="product.image"
          class="img-fluid rounded-start h-100 object-fit-contain my-auto"
          :alt="product.title"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text" v-show="!hideDescription">
            {{ product.description }}
          </p>
          <div class="card-text">
            <h3>${{ product.price }}</h3>

            <small class="text-body-secondary">
              {{ product.rating.rate }} ({{ product.rating.count }})
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    hideDescription: {
      type: Boolean,
      default: false
    }
  }
}
</script>

