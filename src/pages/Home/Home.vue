<template>
  <Header />

  <product-carts />
  <middle-cart />
  <timer-cart />
  <top-rated />
  <top-rated />
  <best-products />
  <Footer />
</template>


<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import middleCart from "../../components/homeLayout/middleCart.vue";
import bestProducts from "../../components/homeLayout/bestProducts.vue";
import productCarts from "../../components/homeLayout/productCarts.vue";
import timerCart from "../../components/homeLayout/timerCart.vue";
import topRated from "../../components/homeLayout/topRated.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    middleCart,
    productCarts,
    timerCart,
    topRated,
    bestProducts,
  },
};
</script>

<style scoped>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.card {
  padding-top: 1rem;
  width: 13rem;
  align-items: center;
  position: relative;
  margin: 3rem;
  background-color: #dcd8d8;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
}

.card:hover {
  transform: scale(1.1);
  opacity: 0.7;
  transition: 0.2s;
}

.carts {
  display: flex;
  width: 100%;
}

#Heading-1 {
  margin-top: 5rem;
  margin-left: 45rem;
}

#cart1 {
  margin-left: 13.4rem;
}

.card img {
  width: 3.5rem;
}
.card-body p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
}

.cot img {
  width: 100%;
  height: 85vh;
}

@media (max-width: 450px) {
  .cot {
    max-width: 100%;
    height: 30vh;
  }
  .cot img {
    height: 100%;
  }
}
.btnBanner {
  position: absolute;
  top: 67%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 14rem;
  background: none;
  border: 1px solid;
  border-color: gray;
  padding: 0.7rem;
  border-radius: 3.5rem;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
}

.btnBanner:hover {
  background: black;
  color: white;
}
.textOnBnner {
  position: absolute;
  top: 57%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 25rem;
}
.textOnBnner p {
  font-size: 19px;
  word-spacing: 3px;
}
.centered {
  position: absolute;
  top: 40%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 10rem;
}
.centered img {
  width: 100%;
  height: 100%;
}
.middle-carts {
  background-image: url("../assets/brand-bg.jpg");
  width: 100%;
  height: 70vh;
}

.middle-carts img {
  height: 70vh;
  margin-left: 33rem;
}

.first-cart-row {
  display: flex;
  margin-left: 10rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
}

.cart-sec-row {
  display: flex;
  margin-left: 10rem;
  margin-right: 5rem;
}

.card2 {
  margin-left: 1.6rem;
  cursor: pointer;
}

.card2-1 {
  background-color: rgb(220, 226, 231);
  display: flex;
  margin-left: 2rem;
  width: 37rem;
  height: 60vh;
}

.card2-1-body {
  margin-left: 3rem;
  margin-top: 2.5rem;
}

.categoryid,
.nameid,
.rateId,
.ulId {
  color: rgb(79, 76, 76);
}

.end-cart-first {
  display: flex;
  margin-left: 4rem;
}

.end-cart-sec {
  display: flex;
  margin: 4rem;
}

.card3 {
  margin-left: 1rem;
  display: flex;
  height: 20vh;
  width: 28rem;
}

.card3 img {
  height: 20vh;
  width: 25vh;
}
#card31 {
  margin-right: 4rem;
}
.end-cart {
  margin: 5rem;
  margin-left: 7rem;
}

.card3-body {
  margin-left: 4.4rem;
}

.cart-icon1 {
  color: grey;
  margin-top: 1rem;
  margin-left: 1rem;
}

.heading2 {
  display: flex;
}

.heading2 h5 {
  color: grey;
  margin-left: 5rem;
}

#text2 {
  margin-left: 19.5rem;
}

#text3 {
  margin-left: 22rem;
}

#text1,
#text2,
#text3 {
  color: #000000;
  margin-bottom: 1rem;
}

.foot-one {
  display: flex;
  background-color: #333333;
  height: 50vh;
  color: white;
  padding-bottom: 13rem;
}

.foot1 {
  display: flex;
}

.foot1 p {
  color: white;
  margin-left: 10px;
  font-weight: lighter;
}

.foot-one {
  padding: 3rem;
}

.footer-text-one {
  margin-left: 7rem;
  margin-top: 2rem;
}

.footer-text-one h6 {
  font-weight: lighter;
}

#sociallinks {
  display: flex;
}

.footer-text-one input {
  background-color: #000000;
  color: white;
  margin-bottom: 5rem;
}

#sociallinks i {
  margin-top: 0.5rem;
  margin-left: 1rem;
}

.pics2 {
  margin-top: 4px;
}

.pics1 img {
  margin-top: 1rem;
}

.foot-two {
  display: flex;
  background-color: #000000;
  height: 10vh;
  width: 100%;
}

.type-footer {
  margin-top: 1.5rem;
}

.type-footer h6 {
  color: white;
  margin-left: 15rem;
}

.tag-footer {
  margin-left: 45rem;
}

.tag-footer img {
  margin-top: 1.5rem;
}
</style>