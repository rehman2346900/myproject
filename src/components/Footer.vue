<template>
<div class="footer">
  <div class="upper-footer">
    <div class="foot-one">
      <div class="footer-text-partone">
        <h4>Contact Us</h4>
        <div class="details">
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
      </div>
      <div class="footer-text-partTwo">
        <h4>Information</h4>
         <div class="details">
        <h6>My Account</h6>
        <h6>About Us</h6>
        <h6>Careers</h6>
        <h6>Contact</h6>
        <h6>Introduction</h6>
        <h6>Feedback</h6>
        </div>
      </div>
    </div>
    <div class="icons">
      <div class="footer-text-two">
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
  </div>
  <hr>
  <div class="foot-two">
    <div class="type-footer">
      <h6>© 2022 Clothing. Made with by CodeCarnival</h6>
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
footer {
  width: 100%;
}

.upper-footer {
  display: flex;
  background-color: #F4F8FA;
}
.details{
  margin-top: 2rem;
}
.foot-one {
  display: flex;
  background-color: #F4F8FA;
  height: auto;
  color: black;
  font-family: "Roboto", sans-serif;
 
  padding-left: 7rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.icons {
  display: flex;
  color: black;
  font-family: "Roboto", sans-serif;
  margin-left: 27rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.foot1 {
  display: flex;

}

.foot1 p {
  margin-left: 10px;
  font-weight: lighter;
}

.footer-text-partone {
  margin-top: 2rem;
  margin-left: 3rem;
}

.footer-text-partTwo {
  margin-top: 2rem;
  margin-left: 3rem;
}

.footer-text-two {
  margin-top: 3rem;
}

.footer-text-one h6 {
  font-weight: lighter;
}

#sociallinks {
  display: flex;
}

.icons input {
  background-color: #000000;
  color: white;
  margin-bottom: 3rem;
  margin-top: 1.4rem;
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

hr {
  margin: 0;
  padding-left: 3rem;
  padding-right: 3rem;
}

.foot-two {
  display: flex;
  background-color: #F4F8FA;
  height: 10vh;
  width: 100%;
  color: black;
}

.type-footer {
  margin-top: 1.5rem;
}

.type-footer h6 {
  margin-left: 15rem;
}

.tag-footer {
  margin-left: 45rem;
}

.tag-footer img {

  margin-top: 1.5rem;
}

@media (max-width:1290px){
 .icons{
  margin-left: 18rem;
 }
}
@media (max-width:1150px){
 .icons{
  margin-left: 12rem;
 }
}
@media (max-width:1030px){
 .icons{
  margin-left: 8rem;
 }
}

@media (max-width:960px) {
  .foot-one{
   padding-bottom: 0;
   padding-left: 7rem;
  }
  .upper-footer{
    display: flex;
    flex-direction:column;
  }
  .footer {
    padding: 0;
  }
  .footer-text-partone {
    margin-left: 1rem;
    margin-top: 2rem;

  }

  .tag-footer {
    margin-left: 5rem;
  }
}
@media (max-width:650px){
  .foot-one{
   padding-bottom: 0;
   padding-left: 2rem;
  }
  .foot-two h6{
    margin-left: 5rem;
  }
}
@media (max-width:480px){
 .foot-one{
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
 }
  .footer-text-partone{
    margin-left: 2rem;
  }
  .icons{
   margin-left: 5rem;
   padding-top: 0;
  }
}
</style>
