<template>
  <!--------------------------------------------------- timer------------------------------------ -->

  <div class="middle-carts">
    <img src="../../assets/branding.png" alt="" />
  </div>
  <!------------------------------------------- CART2----------------------------------------------- -->

  <div class="row-titles">
    <div class="col-lg-12">
      <!-- Start Product Tab -->
      <ul class="nav nav-tabs headingTitles" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Featured</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >On Sale</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Top Rated</a
          >
        </li>
      </ul>
      <!-- End Product Tab -->
    </div>
  </div>

  <!-- 0--------------------------------------ONSALE CARDS--------------------------------------- -->

  <!----------------------------------- BEST PRODUCTS------------------------------------------------------->
</template>
<script>
export default {
  name: "topRated",
};
</script>

<style scoped>
/*---------------------------------------- MIDDLEART 22222---------------------------------- */
.middle-carts {
  background-image: url("../../assets/brand-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.middle-carts img {
  height: auto;
  margin-left: 28rem;
}
@media (max-width: 950px){
  .middle-carts img {
  height: auto;
  margin-left: 15rem;
}
}
@media (max-width: 750px){
  .middle-carts img {
  height: auto;
  margin-left: 8rem;
}
}
@media (max-width: 680px){
  .middle-carts img {
  height: auto;
  margin-left: 3rem;
}
}
/*--------------------------------------- CART------------------------------------------------------- */

.row-titles {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  font-size: 14px;
  line-height: 1.71429;
  font-family: "Roboto", sans-serif;
  color: #000000;
  font-weight: 400;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.headingTitles {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-color: #ff5151 !important;
}

.headingTitles li a.active {
  color: #ff5151 !important;
  border-bottom: #ff5151;
}

.headingTitles li a {
  color: #c4c4c4;
  font-size: 24px;
  font-weight: 500;
  border-color: transparent !important;
  position: relative;
  padding-bottom: 13px;
  transition: all 0.4s ease-in-out 0s;
  text-decoration: none;
}

.headingTitles li a.active::before {
  opacity: 1;
}
.row-titles ul{
  width: 100%;
}
.headingTitles li a::before {
  position: absolute;
  content: "";
  bottom: 0;
  border-bottom: 10px solid #ff5151;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  left: 50%;
  transition: 0.5s;
  opacity: 0;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.col-lg-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
}

@media (min-width: 992px) {
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>




