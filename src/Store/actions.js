import axios from "axios";

export const getallproducts = ({ commit }) => {
   axios.get('https://dummyjson.com/products')
      .then(response => {
         commit('setproducts', response.data.products)
         console.log(response.data.products)
      })
}
export const getsearchProducts = ({ commit }, searchId) => {
   axios.get(`https://dummyjson.com/products/search?q=${searchId}`)
      .then(response => {
         commit('setsrchProducts', response.data.products)
         console.log(response.data.products)
      })
}

export const productDetail = ({ commit }, Id) => {
   axios.get(`https://dummyjson.com/products/${Id}`)
      .then(response => {
         commit('productDetail', response.data)
      })
}

export const getUserCarts = ({ commit }) => {
   axios.get("https://dummyjson.com/carts/user/5")
      .then(response => {
         commit('setCarts', response.data.carts)
         // console.log(response.data.carts)
      });
}
export const addToCart = ({ commit }, id) => {
   // const cartItem = this.state.cart
   // cartItem.push(id)
   console.log(id)
   commit('addToCart', id)


}