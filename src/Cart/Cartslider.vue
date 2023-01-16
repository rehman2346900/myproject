<template>
 <div class="cartBox" v-if="!isHidden">
    <div class="productitem">
      <div class="cartTop" style="">
      <button class="exit" v-on:click="isHidden = true"><i class="fa-solid fa-xmark fa-2xl"></i></button>
      <h3>CART ITEMS</h3>
  </div>
      <div class="cartitems">
        <div class="products">
          <div class="postDiv">
            <div class="rimage">
              <img src="../assets/boy5.jpg" alt="" />
            </div>
            <div class="texttag">
              <div class="product-cart__title mb-3">
                <h3 class="h6 m-0">Loose-fit round neck sweater</h3>
              </div>
              <div class="product-cart__variant">Category / 30</div>
              <div class="product-cart__price mt-10 mb-10">
                <span class="product-cart__quantity">1</span> <span>x</span>
                <span class="product-cart__price-value"
                  ><!-- snippets/product-get-price.liquid --><span
                    class="price"
                    data-js-product-price=""
                    ><span><span class="money">$135.00</span></span></span
                  ></span
                >
              </div>
            </div>
          </div>
          <div class="quantity">
            <button class="removeQuantity">-</button>
            <input type="number" min="0" value="1" />
            <button class="addQuantity">+</button>
          </div>
          <div class="removeBtn">
           <span>Remove</span> <span style="color: gray;"><i class="fa-solid fa-trash fa-xl"></i></span>
          </div>
        </div>
        <hr style="margin-left: 2rem; margin-right: 2rem; margin-top: 5px;">
      </div>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'Cart',

   data() {
    return{
    isHidden: false
    }
  },
}
</script>

<style scoped>
.quantity {
  display: flex;
  padding: 1rem;
}
.quantity button {
  border: none;
  border: 1.5px solid rgb(98, 95, 95);
  background-color: rgb(255, 255, 255);
  height: 3.5rem;
  width: 3.5rem;
  font-size: 29px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.quantity input[type="number"] {
  border: 1.5px solid rgb(84, 81, 81);
  background-color: rgb(214, 223, 223);
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  width: 15rem;
  height: 3.5rem;
 -moz-appearance: textfield;
}
.removeBtn {
  padding-top: 1rem;
  margin-left: 60%;
  justify-content: space-between;
  display: flex;
}
.productitem hr{
 margin-top: 0;
}

.cartBox {
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(220, 215, 215);
  background-color: rgba(181, 172, 172, 0.8);
  height: 100vh;
  width: 100%;
  z-index: 1;
  /* display: none; */
}
.productitem {
  position: sticky;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  top: 0;
  left: 85%;
  bottom: 0;
  right: 0;
  width: 30%;
}
.cartTop h3 {
  text-align: center;
  
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.productitem i {
  position: sticky;
  top: 5%;
  left: 97%;
  bottom: 0;
  right: 0;
  height: 3rem;
  width: 50px;
}

.products {
  height: 45vh;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  margin-top: 1.5rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.postDiv {
  display: flex;
}
.postDiv img:hover {
  opacity: 0.4;
}
.postDiv p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.postDiv h4 {
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.postDiv h3 {
  display: block;
  margin-block-start: 5px;
  margin-block-end: 5px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  display: flex;
}

.postDiv img {
  width: 100%;
  height: 22vh;
}

.cartitem h1 {
  top: 30%;
}
</style>