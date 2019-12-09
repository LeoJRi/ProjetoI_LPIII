<template>
<body>
  <div class="container">
   <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="../assets/banner_1.png"></a>
    <a class="carousel-item" href="#two!"><img src="../assets/carrossel_1.png"></a>
    <a class="carousel-item" href="#three!"><img src="../assets/carrossel_2.png"></a>
  </div>
</div>

</body>
</template>

<script>
// import axios from "axios";
import $ from 'jquery'
$(document).ready(function () {
  $('.carousel').carousel()
})
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    width: 400px;
    height: 400px;
  }
.carousel{
  width: 900px;
  margin-left: -218px;
  height: 600px;
  margin-bottom: 100px;
  margin-left: -305px;
}
.carousel .carousel-item > img {
  width: 400px;
  height: 400px;
}

</style>
