<template>
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
      <router-link :to="{ name: 'Pract', params: { id: postitems.id } }">
        <button>UPDATE</button>
      </router-link>
    </div>
  </div>

  <div class="texttt"></div>
</template>
<script>
export default {
  name: "searchProduct",

  computed: {
    products() {
      return this.$store.state.searchProducts;
    },
  },
  mounted() {
    this.$store.dispatch("getsearchProducts", this.$route.params.id);
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
}

.postDiv button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.postDiv button {
  transform: scale(0.95);
}

.button-33:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
.postDiv a {
  text-decoration: none;
}
.product-rating {
  color: #ffc107;
}
</style>