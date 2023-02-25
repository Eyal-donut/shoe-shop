import axios from 'axios'

const API = {
    data: axios.create({
        baseURL: 'https://63f8f6b21dc21d5465cbbfc1.mockapi.io/data'
    }),

    async addProduct(product) {
        const response = await this.data.post('/', product)
        return response.data
    },

    async deleteProduct(productID) {
        this.data.delete(`/${productID}`)

    },

    async editProduct(productID) {
        this.data.patch(`/${productID}`)

    },

    async deleteAllProducts() {
        const allProducts = await this.getProducts()
        allProducts.forEach(prod => {
            this.data.delete(`/${prod.id}`)

        })
    },

    async getProducts() {
        try {
            const response = await this.data.get('/')
            return response.data
            
        } catch (error) {
        }
    },

}

export default API

// const addProduct = async (newProduct) => {
//     const response = await API.addProduct(newProduct)
//     const fetched = await API.getProducts()
//     localStorage.setItem("localStorageProducts",JSON.stringify(fetched))
// }