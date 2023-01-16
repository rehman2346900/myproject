<template>
  <header>
    <div class="cont">
      <div class="header1">
        <div class="img-div">
          <img src="../assets/logo-black.png" alt="" />
        </div>
        <div class="social-icons">
          <i class="fa-solid fa-user"></i>

          <router-link to="/Cart"
            ><i class="fa-solid fa-cart-shopping"></i
          ></router-link>

          <router-link to="/"
            ><i class="fa-sharp fa-solid fa-right-from-bracket"></i
          ></router-link>
        </div>
      </div>
      <hr />
      <div class="header2">
        <div class="tags-div">
          <router-link to="/">HOME</router-link>
          <router-link to="/Catalog">CATALOG</router-link>
          <router-link to="">PRODUCT</router-link>
          <router-link to="/Catalog">SHOP</router-link>
          <router-link to="">ACCOUNT</router-link>
          <router-link to="/Footer">ABOUT US</router-link>
        </div>
        <div class="search-div">
          <input
            type="text"
            placeholder="Search Anything"
            v-model="searchitem"
          />

          <button @click="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>

    <Cart />
  </header>
</template>

<script>
// import Cart from "../Cart/Cart.vue";
export default {
  name: "Header",
  // components:{
  //   Cart,
  // },

  data() {
    return {
      searchitem: "",
    };
  },

  methods: {
    search() {
      this.$router.push({
        name: "searchProduct",
        params: { id: this.searchitem },
      });
    },
  },
};
</script>

<style scoped>
/* .cont{
  display: none;
} */
.container-fluid {
  display: none;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  width: 100%;
}
.header1 {
  margin-bottom: 0rem;
  background: #ffffff;
  display: flex;
  padding: 1rem;
  width: 100%;
}
.img-div {
  width: 8rem;
  margin-left: 9rem;
}

.img-div img {
  width: 100%;
}

.user {
  display: flex;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
}
header hr {
  margin-top: 0;
  margin-bottom: 0;
}
.social-icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 60rem;
}
.social-icons i {
  margin: 10px;
  display: flex;
  cursor: pointer;
  color: black;
  text-decoration: none;
}
.header2 {
  background-color: white;
  display: flex;
  align-items: center;
}

.search-div {
  background: white;
  align-items: center;
  padding: 10px;
  margin-left: 22rem;
  padding: 0.7rem;
  padding-left: 1rem;
}
.search-div button {
  background: white;
  border: none;
  padding-left: 0px;
}
.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.search-div input {
  color: black;
  background: white;
  border: none;
}
.search-div input:focus {
  outline: none;
}

.search-div i {
  color: gray;
}

.tags-div a {
  background-color: white;
  color: #575353;
  margin-left: 2.5rem;
  text-decoration: none;
  font-family: "Basic Commercial", sans-serif;
}

.tags-div {
  margin-left: 8rem;
}
@media (max-width: 1400px) {
  .social-icons {
    margin-left: 50rem;
  }
  .search-div {
    margin-left: 15rem;
  }
  .tags-div a {
    margin-left: 2rem;
    font-size: 15px;
  }
}
@media (max-width: 1200px) {
  .img-div {
    min-width: 8rem;
    margin-left: 2rem;
  }
  .social-icons {
    margin-left: 50rem;
  }
  .search-div {
    margin: 2rem;
    border: 1px solid;
    width: 15rem;
  }
  .tags-div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  .tags-div a {
    margin-bottom: 1rem;
  }
  .tags-div a:hover {
    text-decoration: dotted;
    background-color: #252525;
    color: #ffffff;
    width: 5rem;
  }
  .header2 {
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
  }
}
@media (max-width: 1100px) {
  .social-icons {
    margin-left: 35rem;
  }
  .img-div {
    min-width: 7rem;
    margin-left: 2rem;
  }
}
@media (max-width: 930px) {
  .social-icons {
    margin-left: 25rem;
  }
  .img-div {
    min-width: 6rem;
    margin-left: 2rem;
  }
}
@media (max-width: 740px) {
  .social-icons {
    margin-left: 20rem;
  }
  .img-div {
    min-width: 5rem;
    margin-left: 2rem;
  }
}
@media (max-width: 650px) {
  .social-icons {
    margin-left: 10rem;
  }
  .img-div {
    min-width: 5rem;
    margin-left: 2rem;
  }
}
@media (max-width: 450px) {
  .header2 {
    display: none;
  }

  .social-icons {
    margin-left: 3rem;
  }

  .social-icons i {
    height: 1rem;
  }
  .img-div {
    min-width: 5rem;
    margin-left: 0;
  }
}
</style>