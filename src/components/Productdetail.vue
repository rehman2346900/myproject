<template>
  <Header />
  <div class="card-wrapper">
    <div class="card">
      <!-- card left -->
      <div class="product-imgs">
        <div class="img-display">
          <div class="img-showcase">
            <img :src="productDetail.thumbnail" alt="shoe image" />
          </div>
        </div>
        <div class="img-select">
          <!-- <div
            class="img-item"
            v-for="image in productimage"
            v-bind:key="image"
          >
            <a href="#" data-id="1">
              <img :src="image" alt="shoe image" />
            </a>
          </div> -->
        </div>
      </div>
      <!-- card right -->
      <div class="product-content">
        <h2 class="product-title">{{ productDetail.title }}</h2>
        <a href="#" class="product-link">{{ productDetail.brand }}</a>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>{{ productDetail.rating }}(21)</span>
        </div>

        <div class="product-price">
          <p class="new-price">
            New Price: <span>${{ productDetail.price }} (5%)</span>
          </p>
          <p class="last-price">
            Discount: <span>{{ productDetail.discountPercentage }}%</span>
          </p>
        </div>

        <div class="product-detail">
          <h2>about this item:</h2>
          <p>
            {{ productDetail.description }}
          </p>
          <p>
            {{ productDetail.description }}
          </p>
          <ul>
            <li>Color: <span>White</span></li>
            <li>
              Available: <span> in stock {{ productDetail.stock }} items</span>
            </li>
            <li>
              Category: <span>{{ productDetail.category }}</span>
            </li>
            <li>Shipping Area: <span>All over the world</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
        </div>

        <div class="purchase-info">
          <input type="number" min="0" value="1" />
          <button type="button" class="btn" @click="addToCart">
            Add to Cart <i class="fas fa-shopping-cart"></i>
          </button>
          <button type="button" class="btn">Compare</button>
        </div>

        <div class="social-links">
          <p>Share At:</p>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="other-product"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center mt-lg-5 mb-40">
          <h2 class="title">Other Similar Products</h2>
        </div>
      </div>
    </div>
    <top-rated />
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import topRated from "./homeLayout/topRated.vue";
export default {
  name: "Productdetail",
  props: ["id"],
  components: {
    Header,
    topRated,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    productDetail() {
      return this.$store.state.singleProduct;
      const data = this.$store.state.singleProduct;
    },
  },

  mounted() {
    //  console.log(data)
    this.$store.dispatch("productDetail", this.$route.params.id);
  },

  methods: {
    addToCart() {
      this.$store.dispatch(" addToCart", this.$store.state.singleProduct);
      this.$router.push({ name: "Cart" });
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  max-width: 1100px;
  margin: auto;
}
.card {
  border: 1px solid;
  margin-top: 3rem;
  padding-left: 1rem;
  background: #f2f2f2;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
}
img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
  border: 1px solid;
  justify-content: center;
}

.img-showcase img {
  width: 80%;
}

.img-select {
  display: flex;
  justify-content: center;
}

.img-item {
  margin: 0.3rem;
  width: 100%;
  border: 1px solid;
  padding: 0.3rem;
}
.img-item img {
  height: 100%;
}

.img-item:hover {
  opacity: 0.5;
  zoom: 0.1;
}
.img-showcase img:hover {
  opacity: 0.7;
  zoom: 0.1;
}

.product-content {
  padding: 2rem 1rem;
}

.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}

.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}

.product-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #1963f6;
  color: #fff;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}

.product-link:hover {
  opacity: 0.9;
}

.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.product-price span {
  font-weight: 400;
}

.last-price span {
  color: #f43a3d;
}

.new-price span {
  color: #0540b7;
}

.product-detail h2 {
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}

.product-detail p {
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
}

.product-detail ul {
  margin: 1rem 0;
  font-size: 0.9rem;
}

.product-detail ul li {
  margin: 0;
  list-style: none;
  background-size: 18px;
  padding-left: 1.7rem;
  margin: 0.4rem 0;
  font-weight: 600;
  opacity: 0.9;
}

.product-detail ul li span {
  font-weight: 400;
}

.purchase-info {
  margin: 1.5rem 0;
}

.purchase-info input,
.purchase-info .btn {
  border: 1.5px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}

.purchase-info input {
  width: 60px;
}

.purchase-info .btn {
  cursor: pointer;
  color: #fff;
}

.purchase-info .btn:first-of-type {
  background: #256eff;
}

.purchase-info .btn:last-of-type {
  background: #f64749;
}

.purchase-info .btn:hover {
  opacity: 0.9;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}

.social-links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}

@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .card-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-imgs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .product-content {
    padding-top: 0;
  }
}

.item-box1 {
  width: 80%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
}

.box1 {
  width: 20%;
  height: 300px;
  box-sizing: border-box;
}

@media screen and (max-width: 600px) {
  .box1 {
    width: 90%;
    margin-bottom: 15rem;
  }
}

.btn {
  background: #256eff;
}

.btn:hover {
  opacity: 0.9;
}

.btn {
  cursor: pointer;
  color: #fff;
}

.btn {
  border: 1.5px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}
</style>