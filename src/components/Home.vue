<template>
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
