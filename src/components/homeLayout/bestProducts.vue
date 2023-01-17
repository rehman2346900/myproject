<template>
  <div class="container pt--100">
    <div class="bestProducts">
      <!-- Start Single Banner -->
      <div class="col-lg-4 " id="best-product-bannerimg">
                        <div class="banner">
                            <div class="thumbnail">
                                <img class="w-100" src="../../assets/bannerimg.jpg" alt="Banner Images">
                            </div>
                            <div class="content text-left">
                                <h3>Best Product for Man</h3>
                            </div>
                        </div>
                    </div>
      <!-- End Single Banner -->
      <div class="col-lg-4  mt_sm--40">
                        <!-- Start Best Rating Product -->
                        <div class="best-rating-product">
                            <div class="thumb">
                                <a href="#">
                                    <img src="../../assets/sm-productl.jpg" alt="Product">
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
                                    <img src="../../assets/sm-productm.jpg" alt="Product">
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
                                    <img src="../../assets/sm-productn.jpg" alt="Product">
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
       <div class="col-lg-4  mt_sm--40">
                        <!-- Start Best Rating Product -->
                        <div class="best-rating-product">
                            <div class="thumb mt-20">
                                <a href="#">
                                    <img src="../../assets/sm-productl.jpg" alt="Product">
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
                                    <img src="../../assets/sm-productm.jpg" alt="Product">
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
                                    <img src="../../assets/sm-productn.jpg" alt="Product">
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
 
    </div>
  </div>
</template>
<script>
// 
export default {
  name: "bestProducts",
};
</script>

<style scoped>
.bestProducts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
}
.best-rating-product {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
 justify-content: space-between;
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
  font-weight: 500;
  margin: 0;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
  color: #292323;
  display: block;
  font-size: 0.67em;

}

.best-rating-product .content h6 a {
  color: #434343;
 text-decoration: none;
 font-weight: 500;
  margin: 0;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
  color: #292323;
  font-size: 1.5em;

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
  border: 0;
}
@media  (max-width:850){
  .banner{
    display: none;
  }
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
    /* width: 50%; */
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