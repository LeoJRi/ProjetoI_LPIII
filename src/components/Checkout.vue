<template>
<div id="checkout">
  <div class="divTabs">
    <i class="fas fa-cash-register"></i><h2 class="checkoutTitle">Checkout</h2>
    <div class="row container">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s2"><a href="#test2">Endereços</a></li>
          <li class="tab col s2"><a href="#test1">Pagamento</a></li>
        </ul>
      </div>
      <div id="test2" class="col s12 insideTab"></div>
      <div id="test1" class="col s12 insideTab"></div>
    </div>
  </div>
  <div class="resumoCheckout">
    <div>Resumo do pedido</div>
    <div>Itens:</div><div>qtd</div>
    <div>Subtotal:</div><div>valor</div>
    <div>Desconto</div><div>valor</div>
    <div>Total</div><div>valor</div>
</div>
    <a class="waves-effect waves-light btn btnFinal">Finalizar</a>
</div>
</template>

<script>
// import axios from "axios";

export default {
  name: 'Checkout',
  data () {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#checkout{
  width: 100%;
  height: 100%;
}
.divTabs{
    float: left;
    width: 60%;
    margin-left: 10em;;
}

.cartTitle{
    padding-left: 4em;
}

.row .insideTab{
    padding-top: 1.5em;
}

.resumoCheckout{
    float: left;
    width: 25%;
    padding-top: 7em;
    text-align: left;
    border: red 5px;
}

.resumoCheckout div{
    width: 50%;
    display: inline-block;
    padding-top: 1.5em;
}

body{
    margin-top: 5em;
}

.btnFinal{
    margin-top: 3em;
    float: right;
    margin-right: 10%;
}

.checkoutTitle{
    margin-left: 3.3em;
}
.tabs .tab{
  width: 50%;
}
</style>
