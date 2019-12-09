<template>
  <div class="all-cart">
    <div class="cart-itens container">
      <ul>
      <i class="cart-icon small material-icons">shopping_cart</i>
      <h5 class="cart-title">Carrinho</h5>
        <li class="cart-prod card" v-for="item in cart.commerceItems" :key="item._id">
          <div>
            <img class="product-img" v-bind:src="item.product.images[0].url">
          </div>
          <div class="cart-text">
            <p>Produto: {{item.product.description}}</p>
            <span class="cart-prod-qtd">Quantidade: {{item.amount}}</span>
            <span class="cart-prod-val">Valor: {{formatPrice(item.total)}}</span>
          </div>
            <a class="waves-effect waves-light btn btnRemove" v-on:click="removeFromCart(item._id)">Remover</a>
        </li>
      </ul>
    </div>
    <div class="resumoCart card">
    <div>Resumo do pedido</div>
    <div>Itens: {{cart.totalNumberOfItems}}</div>
    <div>Subtotal: R$ {{formatPrice(cart.subtotal)}}</div>
    <div>Desconto: R$ {{formatPrice(cart.discount)}}</div>
    <div>Total: R$ {{formatPrice(cart.total)}}</div>
    <a class="waves-effect waves-light btn btnFinal" >Finalizar</a>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cart',
  data () {
    return {
      selecteItemId: '',
      cart: {}
    }
  },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    removeFromCart: function (id) {
      console.log(id)
      axios.delete('https://floating-sands-83864.herokuapp.com/deleteItem/' + id)
        // JSON responses are automatically parsed.
        .then(response => {
          console.log('alou')
        }).catch(e => {
          e.toast({html: 'Não foi possivel excluir o endereço.!'})
        })
    }
  },
  mounted () {
    axios.get('https://floating-sands-83864.herokuapp.com/cart')
      // JSON responses are automatically parsed.
      .then(response => {
        this.cart = response.data
        console.log(this.cart)
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
.resumoCart{
    float: left;
    width: 25%;
    text-align: left;
    padding: 3px;
    margin-top: 50px;
    margin-left: 40px;
}

.resumoCart div{
    width: 50%;
    display: inline-block;
    padding-top: 1.5em;
    padding-left: 15px;
}

.cart-itens{
    float: left;
    width: 60%;
    margin-left: 10em;;
}

.btnFinal{
    margin-top: 4em;
    float: right;
    margin-right: 15px;
    margin-bottom: 15px;
}

.product-img{
  max-width: 80px;
  margin-left: 45px;
  margin-right: 45px;
}

.all-cart{
  padding-top: 100px;
}

.cart-prod{
  display: flex;
  padding-top: 45px;
  padding-bottom: 45px;
}

.cart-text{
  float: right;
  margin-right: -150px
}

.cart-prod-val{
  float: right;
}

.cart-title{
  text-align: left;
}

.cart-icon{
  float: left;
}

.cart-prod-qtd{
  float: left;
}

.btnRemove{
  margin-left: 193px;
  margin-right: -330px;
  margin-top: 40px;
}
</style>
