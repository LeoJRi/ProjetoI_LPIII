<template>
  <div class="register">
     <div class="text">
     <p>Informações para o Cadastro</p>
     </div>
   <div class="information">
     <div class="spaces">
     <input class="first_name inp_style" placeholder="Nome">
     <input class="last_name inp_style space" placeholder="Sobrenome">
     </div>
     <br>
     <div class="spaces">
     <input class="phone inp_style" placeholder=" Numero de Telefone">
     <input class="email inp_style space" placeholder="E-mail">
     </div>
     <br>
     <div class="spaces">
     <input class="user inp_style" placeholder="Usuario">
     <input class="password inp_style space" placeholder="Senha">
     </div>
     <br>
     <div class="spaces">
     <input class="cpf inp_style" placeholder="CPF">
     <input class="rg inp_style space" placeholder="RG">
     </div>
     <br>
     <div class="spaces">
     <input class="born_day inp_style" placeholder="Data de nascimento">
     <input class="genere inp_style space" placeholder="Genero">
     </div>
    </div>
     <br>
     <div class="text">
     <p>Informações para o endereço de envio</p>
     </div>
     <div class="adress">
       <div class="spaces">
      <input class="postal_code inp_style" placeholder="CEP">
      <input class="street inp_style space" placeholder="Rua">
       </div>
      <br>
      <div class="spaces">
      <input class="number inp_style" placeholder="Numero">
      <input class="city inp_style space" placeholder="Cidade">
      </div>
      <br>
      <div class="spaces">
      <input class="state inp_style" placeholder="Estado">
      <input class="country inp_style space" placeholder="Pais">
      </div>
      <br>
      <div class="spaces">
      <input class="reference inp_style" placeholder="Referecia">
      <input class="description inp_style space" placeholder="Descrição">
    </div>
   <a class="waves-effect waves-light btn-small btn_register">Cadastrar-se</a>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: 'Register',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.register{
 display:flex;
 flex-direction: column;
 position: relative;
}
.information{
 display: flex;
 flex-direction: column;
 position: relative;
 width: 400px;
}
.adress{
 display: flex;
 flex-direction: column;
 position: relative;
 width: 400px;
}
.button{
  position: relative;
}
.inp_style{
 border: none;
 border-bottom: 1px solid black;
 margin-bottom: 10px;
 padding-bottom: 0px;
 outline: 0;
 }
 .name{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 }
 .space{
  position: relative;
  left: 25px;
 }
 .spaces{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
  .text{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    font-size: 1rem;
  }
  .btn_register{
    position: relative;
    color: white;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 40px;
 }
</style>
