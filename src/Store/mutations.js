

//----------------------== For Fetching All Products------------------------------------------
export const setproducts = (state, products) => {
    state.products = products
    console.log(products)
}



// ///-----------For Showing Search Products----------------------------------------------------
export const setsrchProducts = (state, searchProducts) => {
    state.searchProducts = searchProducts
    console.log(searchProducts)
}



// /// ------------------For Getting Single Produc Details------------------------------------
export const productDetail = (state, product) => {
    state.singleProduct = product
    // console.log(searchProducts)
}





// ///------------------------For Fetching User's Carts---------------------------------------
export const setCarts = (state, userCarts) => {
    state.userCarts = userCarts
    // console.log(userCarts)
}




///// -------------------------For Adding Product To Cart---------------------------------------
export const addToCart = (state, id) => {
    state.cart = id
    // console.warn(id)
}