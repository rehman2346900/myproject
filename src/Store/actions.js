import axios from "axios";
//----------------------== For Fetching All Products------------------------------------------
export const getallproducts = ({ commit }) => {
   axios.get('https://dummyjson.com/products')
      .then(response => {
         commit('setproducts', response.data.products)
         console.log(response.data.products)
      })
}




// ///-----------For Showing Search Products----------------------------------------------------
export const getsearchProducts = ({ commit }, searchId) => {
   axios.get(`https://dummyjson.com/products/search?q=${searchId}`)
      .then(response => {
         commit('setsrchProducts', response.data.products)
         console.log(response.data.products)
      })
}





// /// ------------------For Getting Single Produc Details------------------------------------
export const productDetail = ({ commit }, Id) => {
   axios.get(`https://dummyjson.com/products/${Id}`)
      .then(response => {
         commit('productDetail', response.data)
      })
}




// ///------------------------For Fetching User's Carts---------------------------------------
export const getUserCarts = ({ commit }) => {
   axios.get("https://dummyjson.com/carts/user/15")
      .then(response => {
         commit('setCarts', response.data.carts)
         // console.log(response.data.carts)
      });
}




///// -------------------------For Adding Product To Cart---------------------------------------
export const addToCart = ({ commit }, id) => {
   const addCart = this.state.cart
   addCart.push(id)
   commit('addToCart', addCart)
   console.log(id, "trtrtrt")

}