<template>
<div id="home" >
  <div class="banner">
    <img class="banner__image" src="https://picjumbo.com/wp-content/uploads/lago-di-braies-italy-2210x1473.jpg">
    <h4 class="banner__text">Conheça nosso site e <br>se impressione com as ofertas!</h4>
  </div>
  <div class="container">
    <div class="product__title"><b>Novos Produtos</b></div>
    <div class="carousel" >
      <a class="carousel-item" v-for="item in news" :key="item._id" href="#"><img v-bind:src="item.images[0].url"></a>
    </div>
    <div class="product__title"><b>Veja Nossos Produtos Mais Vendidos</b></div>
    <div class="bestsellers">
      <div v-for="item in bestsellers" :key="item._id">
        <div class="card bestsellers__card__area">
          <div class="card-image bestsellers__card__area--image">
            <img style="text-align: center" class="card__image--bestseller" v-bind:src="item.images[0].url">
          </div>
          <div class="bestsellers__card__area--text">
            <div style="text-align: center"> {{item.description}} </div>
            <div style="text-align: center"> {{item.salePrice}} <strong> R$</strong> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
$(document).ready(function(){
  $('.carousel').carousel();
})

export default {
  name: 'Home',
  data () {
    return {
      news:{},
      bestsellers:{}
    } 
  },
  mounted: function () {
      axios.get('https://floating-sands-83864.herokuapp.com/products/bestsellers')
      // JSON responses are automatically parsed.
      .then(response => {
        this.bestsellers = response.data;
      }).catch(e => {
        console.log(e)
      })
      
      axios.get('https://floating-sands-83864.herokuapp.com/products/news')
      // JSON responses are automatically parsed.
      .then(response => {
        this.news = response.data;
        console.log(this.news);
      }).catch(e => {
        console.log(e)
      })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#home {
  width: 100%;
  height: 100% !important;
}
.banner{
  margin-bottom: 20px;
  &__image{
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: center;
  }
  &__text{
    position: absolute;
    color: #fff;
    top: 170px;
    left: 30px;
  }
}
.container{
  .product__title{
    font-size: 20px;
    margin-bottom: 30px;
  }
  .bestsellers{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;
    &__card__area{
      margin: 5px;
      height: 300px;
      &--image{
        margin: 0 auto;
        max-width: 200px;
        .card__image--bestseller{
          margin-top: 5px;
          max-height: 200px;
        }
      }
      &--text{
        margin: 5px 0;
        width: 250px;
      }
    }
  }
}
</style>