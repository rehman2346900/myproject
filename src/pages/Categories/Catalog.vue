<template>
  <Header />
  <div class="cont">
    <div class="cot">
      <img src="../assets/breadcumb2.jpg" alt="" />
    </div>
    <div class="box">
      <div class="list-box1">
        <h1>CATEGORIES</h1>
        <div class="categories">
          <div
            class="categories-list"
            v-for="category in categories"
            v-bind:key="category"
          >
            <router-link
              :to="{ name: 'Categorydetail', params: { cat: category } }"
            >
              <p>{{ category }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="postDiv" v-for="postitems in products" v-bind:key="postitems">
        <div class="imagediv">
          <router-link
            :to="{ name: 'Productdetail', params: { id: postitems.id } }"
          >
            <img :src="postitems.thumbnail" alt="" />
          </router-link>
        </div>

        <h3>{{ postitems.title }}</h3>

        <p>{{ postitems.brand }}</p>
        <h4>${{ postitems.price }} Only</h4>
        <h3>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          {{ postitems.rating }}(21)
        </h3>
        <router-link
          :to="{ name: 'editProduct', params: { id: postitems.id } }"
        >
          <button>Edit</button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>

  <!-- -----------------------------------------SCRIPT------------------------------------------------- -->
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
  name: "Catalog",

  components: {
    Header,
    Footer,
  },
  data() {
    return {
      items: [],
      categories: [],
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    console.log(this.$store.state.products);
    this.$store.dispatch("getallproducts");
  },

  async created() {
    let response = await axios.get("https://dummyjson.com/products/categories");
    console.log(response.data);
    this.categories = response.data;
  },

  //  computed:{
  //    searchres (){
  //      return this.items.filter(postitems => postitems.title.includes(this.searchinput))

  //    }
  //  }
};
</script>




<style scoped>
/* ---------------------------------------------STYLE------------------------------------------------- */

.product-rating {
  color: #ffc107;
}

.cont {
  background-color: #e8e8e8ed;
}
.cot img {
  width: 100%;
  object-fit: cover;
  height: auto;
}
.categories {
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: center;
  margin-left: -1.2rem;
}

.categories-list {
  width: 15%;
  margin-left: 2rem;
  margin-top: 2rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  box-shadow: 0 8px 8px 4px lightblue;
}

.categories-list p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 19px;
}
.categories-list a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 19px;
  color: black;
  text-decoration: none;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 0.7rem;
}
.categories-list a:hover {
  color: gold;
}
.categories-list:hover {
  transition-duration: 0.8s;
  transform: scale(1.2);
  background-color: #000000;
  color: white;
  box-shadow: 0 8px 8px -4px lightblue;
}
@media (max-width: 850px) {
  .categories-list {
    width: 40%;
  }
}
@media (max-width: 600px) {
  .categories-list {
    width: 70%;
    font-size: 13px;
  }
}
.box {
  width: 100%;
  justify-content: center;
  text-align: center;
}

.box div img {
  height: 17rem;
  width: 15rem;
}
.item-box1 {
  display: flex;
}

.list-box1 {
  padding: 1rem;
  text-decoration: dotted;
  color: #3a3535;
  font-family: "Sofia", sans-serif;
  justify-content: center;
}
.header1 {
  height: 50px;
  background: #333333;
  display: flex;
}
header {
  position: sticky;
}
.login-area {
  display: flex;
  color: aliceblue;
  text-decoration: none;
  margin-left: 10rem;
  align-items: center;
}

.login-area p,
h2 {
  padding-left: 12px;
  color: white;
  /* margin-bottom: 1rem; */
}

.login-area p {
  font-size: 15px;
}

.cart-icon {
  display: flex;
  align-items: center;
  margin-left: 25rem;
  color: white;
}

.cart-icon p {
  margin-left: 1rem;
  margin-top: 1rem;
  color: white;
}

.social-icons {
  margin-left: 20rem;
  color: white;
  display: flex;
  align-items: center;
}

.social-icons i {
  margin-left: 3rem;
  display: flex;
  cursor: pointer;
}

.header2 {
  background-color: white;
  display: flex;
  align-items: center;
  padding: 1.3rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
}

.img-div {
  width: 7rem;
}

.img-div img {
  width: 100%;
  margin-left: 9rem;
}

.search-div {
  background: white;
  align-items: center;
  padding-left: 0.7rem;
  border: 1px solid;
  border-color: gray;
  margin-left: 15rem;
  padding-right: 0.7rem;
}

.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.search-div input {
  color: white;
  background: white;
  border: none;
  height: 3rem;
  border-top-style: none;
  width: 9rem;
  color: black;
  font-size: 15px;
}
.search-div input:focus {
  outline-style: none;
  box-shadow: none;
}

.search-div i {
  color: gray;
  cursor: pointer;
}

.tags-div a {
  background: white;
  color: #575353;
  margin-left: 1rem;
  text-decoration: none;
}

.tags-div {
  margin-left: 17rem;
}

.products {
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  justify-content: center;
  margin-bottom: 2rem;
  margin-left: 1rem;
}

.postDiv {
  width: 25%;
  margin-left: 3.5rem;
  margin-top: 3.5rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
@media (max-width: 800px) {
  .postDiv {
    width: 70%;
    margin: 01rem;
  }
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
  font-size: 17px;
  color: rgb(170, 127, 0);
}
.postDiv h3 {
  display: block;
  margin-block-start: 5px;
  margin-block-end: 5px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  display: flex;
  font-size: 17px;
}
.postDiv img {
  width: 100%;
  height: 30vh;
}
.postDiv button {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  touch-action: manipulation;
  transform: scale(0.95);
}
.postDiv a {
  text-decoration: none;
}
</style>