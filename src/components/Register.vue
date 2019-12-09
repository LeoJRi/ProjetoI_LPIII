<template>
  <div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate">
            <label for="first_name">Nome</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Sobrenome</label>
          </div>
        </div>
        <div class="input-field col s6">
            <input id="username" type="text" class="validate">
            <label for="username">Nome de usuário</label>
        </div>
        <div class="input-field col s6">
            <input id="cellPhone" type="text" class="validate">
            <label for="cellPhone">Telefone</label>
        </div>
        <div class="input-field col s6">
            <input id="identityDocument" type="text" class="validate">
            <label for="identityDocument">Identidade</label>
        </div>
        <div class="input-field col s6">
            <input id="legalDocument" type="text" class="validate">
            <label for="legalDocument">Documento legal</label>
        </div>
        <div class="input-field col s6">
            <input type="text" class="datepicker" id="birthday">
            <label for="birthday">Data de Nascimento</label>
        </div>
        <div class="input-field col s6">
          <select>
            <option value="" disabled selected>Selecione seu sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <label>Selecione seu sexo:</label>
        </div>
        <div class="input-field col s6">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate">
          <label for="password">Senha</label>
        </div>
        <a class="waves-effect waves-light btn btnCadastro" >Cadastrar</a>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import $ from 'jquery'

$(document).ready(function () {
  $('.datepicker').datepicker()
})
$(document).ready(function () {
  $('select').formSelect()
})
export default {
  name: 'Register',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.btnCadastro{
  float: right;
}
</style>
