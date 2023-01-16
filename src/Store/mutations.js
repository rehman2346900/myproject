export const setproducts = (state, products) => {
    state.products = products
    console.log(products)
}

export const setsrchProducts = (state, searchProducts) => {
    state.searchProducts = searchProducts
    console.log(searchProducts)
}
export const productDetail = (state, product) => {
    state.singleProduct = product
    // console.log(searchProducts)
}
export const setCarts = (state, userCarts) => {
    state.userCarts = userCarts
    // console.log(userCarts)
}
export const addToCart = (state, id) => {
    state.cart = id
    console.warn(id)
}