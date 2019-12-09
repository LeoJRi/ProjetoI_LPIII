<template>
   <div id="footer">
      <div class="footer_top">
         <div class="info">
            <a href="#!" class="sobre">Sobre nós</a>
            <a href="#!" class="fale">Fale conosco</a>
         </div>
         <div class="social_midia">
            <a href="#!"><img src="../assets/facebooklogo.png"  width="50px" height="50px" class="facebook"></a>
            <a href="#!"><img src="../assets/instagramlogo.png" width="50px" height="50px" clas="instagram"></a>
            <a href="#!"><img src="../assets/twitterlogo.png"  width="50px" height="50px" class="twitter"></a>
         </div>
         <div class="newsletter">
            <p class="newsletter_text">Newsletter</p>
            <input class="newsletter_input">
         </div>
      </div>
      <div class="footer_bot">
         <div class="footer-copyright">
            <p class="direitos">RGGI CARDS© TODOS OS DIREITOS RESERVADOS</p>
         </div>
      </div>
   </div>
</template>
<script>
// import axios from "axios";

export default {
  name: 'Footer',
  data () {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 #footer {
   bottom: 0;
   background-color: lightblue;
   width: 100%;
   border-color: black;
   border-width: 1px;
   position: relative;
   top:30px;
 }
 .footer_top{
   display: flex;
   position: relative;
 }
 .social_midia{
   display: flex;
   position:relative;
   flex-direction: row;
   flex-grow: 1;
   justify-content: center;
   top: 50px;
   margin-left: 30px;
   width: 300px;
 }
 .twitter{
   position: relative;
   margin-left: 20px;
 }
 .facebook{
   position: relative;
   margin-right: 20px;
 }
 .info{
   display: flex;
   flex-direction: column;
   position: relative;
   top: 50px;
   left: 100px;
  }
 .sobre{
   color: white;
   font-size: 23px;
 }
  .fale{
   color: white;
   font-size: 23px;
 }
  .newsletter{
   display: flex;
   flex-direction: column;
   position: relative;
   right: 100px;
 }
  .newsletter_input{
    position: relative;
    color: white;
    top: 30px;
    right: 10px;
  }
  .newsletter_text{
    position: relative;
    color: white;
    top:50px;
    font-size: 23px;
    right: 5px;
  }
 .footer_bot{
   display: flex;
   justify-content: center;
 }
 .direitos{
   position: relative;
   color: white;
 }
  a:link, a:visited, a:active {
  text-decoration:none;}
  a:hover {
  color: white;
 }
</style>
