<template>


  <div class="footer">
    <div class="foot-one">
      <div class="footer-text-one">
        <h4>Contact Us</h4>
        <div class="foot1">
          <i class="fa-solid fa-location-dot"></i>
          <p>Address: Your address goes here
          </p>
        </div>

        <div class="foot1">
          <i class="fa-solid fa-envelope"></i>
          <p>info@example.com
          </p>
        </div>

        <div class="foot1">
          <i class="fa-solid fa-phone"></i>
          <p>01234567890
          </p>
        </div>
      </div>
      <div class="footer-text-one">
        <h4>Information</h4>

        <h6>My Account</h6>
        <h6>My Account</h6>
        <h6>My Account</h6>
        <h6>My Account</h6>
        <h6>My Account</h6>
        <h6>My Account</h6>
      </div>
      <div class="footer-text-one">
        <h4>Pictures</h4>
        <div class="pics1">
          <img src="./images/boy6.jpg" alt="">
          <img src="./images/boyshoe.jpg" alt="">
          <img src="./images/girlback.jpg" alt="">
        </div>
        <div class="pics2">
          <img src="./images/capgirl.jpg" alt="">
          <img src="./images/skygirl.jpg" alt="">
          <img src="./images/selfiegirl.jpg" alt="">
        </div>
      </div>
      <div class="footer-text-one">
        <h4>GET NEWSLETTERS</h4>
        <input type="text" placeholder="Type Your Email Here">

        <h4>Social Networks</h4>
        <div id="sociallinks">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-pinterest"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>


    <div class="foot-two">
      <div class="type-footer">
        <h6>© 2022 Clothing. Made with by CodeCarnival</h6>
      </div>
      <div class="tag-footer">
        <img src="./images/pay1.png" alt="">
        <img src="./images/pay2.png" alt="">
        <img src="./images/pay3.png" alt="">
        <img src="./images/pay4.png" alt="">
        <img src="./images/pay5.png" alt="">
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.foot-one {
  display: flex;
  background-color: #333333;
  height: 50vh;
  color: white;
  padding-bottom: 13rem;
}

.foot1 {
  display: flex;

}

.foot1 p {
  color: white;
  margin-left: 10px;
  font-weight: lighter;
}

.foot-one {
  padding: 3rem;
}

.footer-text-one {
  margin-left: 7rem;
  margin-top: 2rem;

}

.footer-text-one h6 {
  font-weight: lighter;
}

#sociallinks {
  display: flex;

}

.footer-text-one input {
  background-color: #000000;
  color: white;
  margin-bottom: 5rem;
}

#sociallinks i {
  margin-top: .5rem;
  margin-left: 1rem;
}

.pics2 {
  margin-top: 4px;
}

.pics1 img {
  margin-top: 1rem;
}

.foot-two {
  display: flex;
  background-color: #000000;
  height: 10vh;
  width: 100%;
}

.type-footer {
  margin-top: 1.5rem;
}

.type-footer h6 {
  color: white;
  margin-left: 15rem;
}

.tag-footer {
  margin-left: 45rem;
}

.tag-footer img {

  margin-top: 1.5rem;
}
</style>