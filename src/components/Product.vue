<template>
  <div id="product" class="content product__container card">
    <div class="product__container--image card-content">
     <img v-bind:src="product_image" class="product__image">
    </div>
    <div class="product__container--text card-content">
      <p class="card-title">{{product_title}}</p>
      <div class="row">
        <div class="col s6">
          <span>Quantidade:</span>
          <input v-model="quantity" type="number" class="product__quantity" value="1">
        </div>
      </div>
      <div class="row">
        <div class="col s5">
          <span>Preço:</span>
          <span>{{product_price}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <span>Estoque:</span>
          <span>{{product_stock}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col s4 add-to-cart__button">
          <a v-on:click="postproduct" class="btn waves-effect waves-light red lighten-2">
            <i class="material-icons left">add_shopping_cart</i>
            Comprar
          </a>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col s12">
          <span>{{product_detail}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import M from 'materialize'
export default {
  name: 'Product',
  data () {
    return {
      productId: this.$route.params.productId,
      json: {},
      product_title: '',
      product_price: '',
      product_image: '',
      product_stock: '',
      product_detail: '',
      product_promotion: ''
    }
  },
  mounted: function () {
    this.getproduct()
      .then(response => {
        console.log(response.data)
        var data = response.data
        this.product_title = data.description
        this.product_price = data.listPrice
        this.product_image = data.images[0].url
        this.product_stock = data.stock
        this.product_detail = data.longDescription
        this.product_promotion = data.salePrice
        setTimeout(function () {
          M.updateTextFields()
        }, 200)
      }).catch(e => {
        console.log(e)
      })
  },
  watch: {
    '$route.params.productId': function (id) {
      this.productId = this.$route.params.productId
      this.getproduct()
      // this.$forceUpdate()
    }
  },
  methods: {
    getproduct: function () {
      axios.get('https://floating-sands-83864.herokuapp.com/product/' + this.productId)
      // JSON responses are automatically parsed.
      .then(response => {
        this.json = response
        console.log(response.data)
        var data = response.data
        this.product_title = data.description
        this.product_price = data.listPrice
        this.product_image = data.images[0].url
        this.product_stock = data.stock
        this.product_detail = data.longDescription
        this.product_promotion = data.salePrice
        setTimeout(function () {
          M.updateTextFields()
        }, 200)
      }).catch(e => {
        console.log(e)
      })
    },
    postproduct: function() {
      axios.post('https://floating-sands-83864.herokuapp.com/cart/additem',
        {
          productId: this.productId,
          quantity: this.quantity
        }
      )}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#product {
  width:100%;
  height:100%;
  justify-content: center;
}
.product{
  &__container{
    display: flex;
    &--image{
      .product__image{
        max-width: 200px;
      }
    }
    &--text{
      text-align: left;
      .product__quantity {
        width: 35px;
      }
      .add-to-cart__button{
        margin-right: 24px;
        float: right;
      }
    }
  }
}
</style>