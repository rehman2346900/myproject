<template>
  <div class="feature-product-area">
    <div class="container">
      <div class="row mt--20">
        <!-- Start Single Product -->
        <div class="col-sm-3">
          <div class="product">
            <div class="inner">
              <div class="thumbnail">
                <a href="#">
                  <img src="../../assets/product-08.jpg" alt="Product Images" />
                </a>
              </div>
              <div class="product-icons">
                <div class="icons-inner">
                  <a href="#"><i class="fa fa-search"></i></a>
                  <a href="#"><i class="fa fa-cart-plus"></i></a>
                  <a href="#"><i class="fa fa-heart-o"></i></a>
                  <a href="#"><i class="fa fa-repeat"></i></a>
                </div>
              </div>
            </div>
            <div class="content">
              <h2><a href="#">Matchbox’ Fit Jeans</a></h2>
              <span class="prize">$250.00</span>
            </div>
          </div>
        </div>
        <!-- End Single Product -->

        <!-- Start Single Product -->
        <div class="col-sm-3 mb-4">
          <div class="product">
            <div class="inner">
              <div class="thumbnail">
                <a href="#">
                  <img src="../../assets/product-11.jpg" alt="Product Images" />
                </a>
              </div>
              <div class="product-icons">
                <div class="icons-inner">
                  <a href="#"><i class="fa fa-search"></i></a>
                  <a href="#"><i class="fa fa-cart-plus"></i></a>
                  <a href="#"><i class="fa fa-heart-o"></i></a>
                  <a href="#"><i class="fa fa-repeat"></i></a>
                </div>
              </div>
            </div>
            <div class="content">
              <h2><a href="#">Fit Wool Suit</a></h2>
              <span class="prize">$190.00</span>
            </div>
          </div>
        </div>
        <!-- End Single Product -->

        <!-- Start Single Product -->
        <div class="col-sm-3">
          <div class="product">
            <div class="inner">
              <div class="thumbnail">
                <a href="#">
                  <img src="../../assets/product-12.jpg" alt="Product Images" />
                </a>
              </div>
              <div class="product-icons">
                <div class="icons-inner">
                  <a href="#"><i class="fa fa-search"></i></a>
                  <a href="#"><i class="fa fa-cart-plus"></i></a>
                  <a href="#"><i class="fa fa-heart-o"></i></a>
                  <a href="#"><i class="fa fa-repeat"></i></a>
                </div>
              </div>
            </div>
            <div class="content">
              <h2><a href="../../assets/">Three-Piece Checke</a></h2>
              <span class="prize">$180.00</span>
            </div>
          </div>
        </div>
        <!-- End Single Product -->

        <!-- Start Single Product -->
        <div class="col-sm-3">
          <div class="product">
            <div class="inner">
              <div class="thumbnail">
                <a href="#">
                  <img src="../../assets/product-13.jpg" alt="Product Images" />
                </a>
              </div>
              <div class="product-icons">
                <div class="icons-inner">
                  <a href="#"><i class="fa fa-search"></i></a>
                  <a href="#"><i class="fa fa-cart-plus"></i></a>
                  <a href="#"><i class="fa fa-heart-o"></i></a>
                  <a href="#"><i class="fa fa-repeat"></i></a>
                </div>
              </div>
            </div>
            <div class="content">
              <h2><a href="#">Open Front Cardigan</a></h2>
              <span class="prize">$170.00</span>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topRated",
};
</script>

<style scoped>
.section-title .title {
  font-size: 33px;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: -10px;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
  color: #292323;
}

.product {
  border: 1px solid #f2f2f2;
}

.product .inner {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.product .thumbnail a img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}
.product .thumbnail {
  /* width: 5rem; */
}

.product .inner .product-icons {
  background: #f8e7e8;
  position: absolute;
  padding: 10px 35px;
  bottom: 0;
  left: 0;
  opacity: 80%;
  transition: all 0.5s;
  width: 100%;
}

.product .inner .product-icons .icons-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product .content {
  padding: 25px 20px;
}

.product .inner .product-icons .icons-inner a i {
  color: #ff5151;
  font-size: 22px;
}

.product .content h2 {
  font-size: 16px;
  margin-bottom: 5px;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
  color: #292323;
}

.product .content h2 a {
  color: #373737;
  transition: 0.3s;
  text-decoration: none;
  font-size: 18px;
}

.product .content h2 a:hover {
  color: white;
  background-color: #ff5151;
  border-radius: 1px;
  padding: 8px;
}

.product .content span.prize {
  color: #ff5151;
  font-size: 16px;
}

.mt--30 {
  margin-top: 30px !important;
}

@media (min-width: 992px) {
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>