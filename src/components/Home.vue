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
<div id="home">
    <div class="container">
        <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="../assets/banner_1.png"></a>
            <a class="carousel-item" href="#two!"><img src="../assets/carrossel_1.png"></a>
            <a class="carousel-item" href="#three!"><img src="../assets/carrossel_2.png"></a>
        </div>

        <!-- bestsellers -->
        <div class="section">
            <div class="row">
                <div class="col s12"><span class="flow-text">Mais vendidos</span>
                    <div class="row6" v-for="item in bestsellers" :key="item._id">
                        <div class="col s4 m3 center">
                            <div class="card small">
                                <div style="text-align: center"> {{item.description}} </div>
                                <div class="card-image">
                                    <img v-bind:src="item.images[0].url">
                                </div>
                                <div class="card-content">
                                </div>
                                <div class="card-action center-align">
                                  <strong>R$ </strong> {{item.salePrice}}
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

                <!-- news -->
                <div class="section">
                    <div class="row">
                        <div class="col s12"><span class="flow-text">Novos Produtos</span>
                            <div class="row6" v-for="item in news" :key="item._id">
                                <div class="col s4 m3 center">
                                    <div class="card small">
                                        <div style="text-align: center"> {{item.description}} </div>
                                        <div class="card-image">
                                            <img v-bind:src="item.images[0].url">
                                        </div>
                                        <div class="card-content">
                                        </div>
                                        <div class="card-action center-align">
                                          <strong>R$ </strong> {{item.salePrice}}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

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
      selecteItemId: '',
      bestsellers: {},
      news: {}
    }
  },
  mounted () {
    $(document).ready(function () {
      $('.carousel').carousel()
    })
    // bestsellers
    axios.get('https://floating-sands-83864.herokuapp.com/products/bestsellers')
      // JSON responses are automatically parsed.
      .then(response => {
        this.bestsellers = response.data
        console.log(this.bestsellers)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })

    // news
    axios.get('https://floating-sands-83864.herokuapp.com/products/news')
      // JSON responses are automatically parsed.
      .then(response => {
        this.news = response.data
        console.log(this.news)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
  }
}
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('session_token')
    if (token) {
      config.headers['x-access-token'] = token
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)
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
.carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    width: 400px;
    height: 400px;
  }
.carousel{
  width: 900px;
  height: 600px;
  margin-bottom: 100px;
  margin-left: initial;
}
.carousel .carousel-item > img {
  width: 400px;
  height: 400px;
}

#home{
  width: 100%;
  height: 100%;
  margin-bottom: 150%;
}
.product-img{
  max-width: 150px;
}

.card-content{
  margin-top: 50px;
}

</style>