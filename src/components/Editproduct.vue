<template>
  <div class="conta">
    <div class="heade"><h1>Edit Product</h1></div>

    <form>
      <div class="itemm">
        <h3 for="">Title</h3>
        <input type="text" v-model="title" />
      </div>

      <div class="itemm">
        <h3 for="">description</h3>
        <input type="text" v-model="description" />
      </div>

      <div class="itemm">
        <h3 for="">price</h3>
        <input type="text" v-model="price" />
      </div>

      <div class="itemm">
        <h3 for="">rating</h3>
        <input type="text" v-model="rating" />
      </div>
    </form>
  </div>

  <div v-for="item in listItems">
    {{ item.title }}
  </div>
  <router-link to="/Catalog"
    ><button @click="getData">SUBMIT</button></router-link
  >
</template>
<script>
import axios from "axios";
export default {
  name: "editProduct",
  props: "idd",
  data() {
    return {
      listItems: {},
      title: "",
      description: "",
      price: "",
      rating: "",
    };
  },

  methods: {
    async getData() {
      const res = await fetch(
        "https://dummyjson.com/products/" + this.$route.params.id,
        {
          method: "PUT" /* or PATCH */,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.title,
            description: this.description,
            price: this.price,
            rating: this.rating,
          }),
        }
      );
      const finalRes = await res.json();
      this.listItems = finalRes;
      console.log(finalRes);
    },
  },

  // mounted() {
  //   this.getData()
  // }
};
</script>