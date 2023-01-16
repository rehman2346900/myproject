<template>
  <Header />
  <div class="products">
    <div class="postDiv" v-for="postitems in searchres" v-bind:key="postitems">
      <div class="imagediv">
        <router-link
          :to="{ name: 'Productdetail', params: { id: postitems.id } }"
        >
          <img :src="postitems.thumbnail" alt="" />
        </router-link>
      </div>

      <h3>{{ postitems.title }}</h3>

      <p>{{ postitems.description.substring(0, 65) }}....</p>
      <h4>${{ postitems.price }}</h4>
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
      <router-link :to="{ name: 'Editproduct' }"
        ><button>Edit</button></router-link
      >
    </div>
  </div>
  <div class="products">
    <div class="postDiv" v-for="postitems in items" v-bind:key="postitems">
      <div class="imagediv">
        <router-link
          :to="{ name: 'Productdetail', params: { id: postitems.id } }"
        >
          <img :src="postitems.thumbnail" alt="" />
        </router-link>
      </div>

      <h3>{{ postitems.title }}</h3>

      <p>{{ postitems.description.substring(0, 65) }}....</p>
      <h4>${{ postitems.price }}</h4>
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

      ><button>Edit</button>
    </div>
  </div>
  <Footer />
</template>
<script>
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "Categorydetail",
  components: {
    Footer,
    Header,
  },

  data() {
    return {
      items: [],
      cate: this.$route.params.cat,
    };
  },

  async created() {
    let resp = await axios.get(
      "https://dummyjson.com/products/category/" + this.cate
    );
    console.log(resp.data.products);
    this.items = resp.data.products;
    console.log(this.cate);
  },
};
</script>
<style scoped>
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
  height: 30vh;
}
</style>