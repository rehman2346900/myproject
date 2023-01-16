<template>
  <div class="container pt--100">
    <div class="bestProducts">
      <!-- Start Single Banner -->
      <div class="col-lg-3 mb--20">
        <div class="banner">
          <div class="thumbnail mt--30">
            <img
              class="w-100"
              src="../../assets/banner-04 (1).jpg"
              alt="Banner Images"
            />
          </div>
          <div class="content text-left">
            <h3>Best Product for Man</h3>
          </div>
        </div>
      </div>
      <!-- End Single Banner -->
      <div class="col-md-4 mt--30">
        <!-- Start Best Rating Product -->
        <div class="best-rating-product">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-01 (1).jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Variable product</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->

        <!-- Start Best Rating Product -->
        <div class="best-rating-product mt--30">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-02 (1).jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Variable product</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->

        <!-- Start Best Rating Product -->
        <div class="best-rating-product mt--30">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-03 (1).jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Demo Product Name</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->
      </div>
      <div class="col-md-4 mt--30">
        <!-- Start Best Rating Product -->
        <div class="best-rating-product">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-04.jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Fit Wool Suit</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->

        <!-- Start Best Rating Product -->
        <div class="best-rating-product mt--30">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-05.jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Fit Wool Suit</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->

        <!-- Start Best Rating Product -->
        <div class="best-rating-product mt--30">
          <div class="thumb">
            <a href="#">
              <img src="../../assets/sm-product-03 (1).jpg" alt="Product" />
            </a>
          </div>
          <div class="content">
            <h6><a href="#">Matchbox’ Fit Jeans</a></h6>
            <div class="price">
              <span class="theme-color">$25.22</span>
              <span class="old-price">$30.00</span>
            </div>
          </div>
        </div>
        <!-- End Best Rating Product -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bestProducts",
};
</script>

<style scoped>
.bestProducts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
}
.best-rating-product {
  display: flex;
  align-items: center;

  border: 1px solid #f1f1f1;
}

.bestProduct {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.best-rating-product .content {
  padding: 25px;
}

.best-rating-product .content h6 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
  color: #292323;
  display: block;
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.best-rating-product .content h6 a {
  color: #434343;
  transition: 0.3s;
}

.best-rating-product .content .price span {
  font-size: 18px;
}

.theme-color {
  color: #ff5151;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
}

.banner {
  position: relative;
}

.banner.thumbnail img {
  height: fit-content;
}

.banner .content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 57%;
  text-align: center;
  padding: 0 20px;
}

.text-left {
  text-align: left !important;
}

.banner .content h3 {
  color: #bd7a4c;
  line-height: 50px;
  font-size: 40px;
  font-weight: 400;
}

img {
  -ms-interpolation-mode: bicubic;
  border: 0;
  vertical-align: middle;
}

@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 576px) {
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}
</style>