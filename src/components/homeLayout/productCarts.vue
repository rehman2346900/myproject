<template>
  <!-- <div class="container"> -->

  <div class="bannerImg">
    <div class="centerText"><img src="../../assets/text.png" alt="" /></div>
    <div class="textOnBnner">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <button class="btnBanner">SHOP NOW</button>
  </div>

  <!-- -----------------------------------=----------carts----------------------------------------- -->

  <div class="carts">
    <div class="box">
      <div class="cartImg"><img src="../../assets/banner-01.jpg" alt="" /></div>
      <div class="text">
        <h1>30%</h1>
        <h3>Flash Sale</h3>
      </div>
    </div>
    <div class="box">
      <div class="cartImg"><img src="../../assets/banner-02.jpg" alt="" /></div>
      <div class="text">
        <h1>New</h1>
        <h3>Arrival Product</h3>
      </div>
    </div>
    <div class="box">
      <div class="cartImg"><img src="../../assets/banner-03.jpg" alt="" /></div>
      <div class="text">
        <h1>Hot</h1>
        <h3>Exclusive Sale</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productCarts",
};
</script>

<style scoped>
.bannerImg {
  background-image: url("../../assets/bg-image-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}

.btnBanner {
  position: absolute;
  top: 67%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 14rem;
  background: none;
  border: 1px solid;
  border-color: gray;
  padding: 0px 0px;
  border-radius: 500px;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 46px;
  height: 46px;
  text-transform: uppercase;
  transition: 0.4s;
  vertical-align: baseline;
}

.btnBanner:hover {
  background: #ff5151;
  color: white;
}

.textOnBnner {
  position: absolute;
  top: 57%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 25rem;
  transition: 0.4s;
}

.textOnBnner p {
  font-size: 19px;
  word-spacing: 3px;
}

.centerText {
  position: absolute;
  top: 40%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 10rem;
}

.centerText img {
  width: 100%;
  height: 100%;
}

@media (max-width: 750px) {
  .btnBanner {
    top: 55%;
    left: 22%;
    transform: translate(-50%, -50%);
    width: 7rem;
  }

  .bannerImg {
    max-width: 100%;
  }

  .textOnBnner {
    top: 43%;
    left: 30%;
    width: 18rem;
  }

  .textOnBnner p {
    font-size: 18px;
    word-spacing: 3px;
  }

  .centerText {
    top: 27%;
    left: 25%;
    width: 12rem;
    height: 7rem;
  }
}

@media (max-width: 550px) {
  .btnBanner {
    top: 55%;
    left: 26%;
    transform: translate(-50%, -50%);
  }

  .textOnBnner {
    top: 43%;
    left: 34%;
    width: 18rem;
  }

  .textOnBnner p {
    font-size: 15px;
    word-spacing: 2px;
  }

  .centerText {
    top: 27%;
    left: 29%;
    width: 12rem;
    height: 7rem;
  }
}

@media (max-width: 470px) {
  .btnBanner {
    top: 55%;
    left: 30%;
    transform: translate(-50%, -50%);
  }

  .textOnBnner {
    top: 43%;
    left: 39%;
    width: 15rem;
  }

  .textOnBnner p {
    font-size: 15px;
    word-spacing: 2px;
  }

  .centerText {
    top: 27%;
    left: 32%;
    width: 10rem;
    height: 5rem;
  }
}

/* --------------------------------------------------CARTS---------------------------------------- */
.box {
  background-color: Chartreuse;
  width: 33.3%;
  position: relative;
}

.text {
  position: absolute;
  top: 48%;
  left: 17%;
  transform: translateY(-50%);
}

.text h1 {
  color: #ff5151;
  font-weight: 700;
  font-size: 64px;
  font-family: "Roboto", sans-serif;
  line-height: 1.4074;
}

.text h3 {
  color: #000000;
  line-height: 30px;
  font-size: 24px;
  margin: 0;
}

.carts {
  display: flex;
  max-width: 100%;
  align-items: center;
}

.cartImg {
  width: 100%;
  bottom: 0;
}

.cartImg img {
  width: 100%;
}

@media (max-width: 800px) {
  .carts {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .box {
    width: 100%;
  }
}
</style>