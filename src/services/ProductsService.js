import axios from 'axios'

export class ProductsService {
  // método para traer todos los productos
  async fetchAllProducts() {
    try {
      const url = 'https://fakestoreapi.com/products'
      const { data } = await axios(url)

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  // método para traer 1 solo producto segun su id
  async fetchProductById(productId) {
    try {
      const url = `https://fakestoreapi.com/products/${productId}`
      const { data } = await axios.get(url)

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
