<template>
  <div id="myaccount">
    <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
      <li class="tab">
        <a href="#profile" class="active">Perfil</a>
      </li>
      <li class="tab">
        <a href="#address">Endereços</a>
      </li>
    </ul>

    <div id="profile" class="col s12">
      <div class>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Dados do Usuário</span>
            <div class="card-content">
              <form class="row">
                <div class="col s12">
                  <div class="col s6">
                    <h5>Dados Pessoais</h5>
                    <div class="row">
                      <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input
                          id="complete_name"
                          disabled
                          type="text"
                          required
                          class
                          v-model="user_completeName"
                        />
                        <label for="complete_name">Nome</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s6">
                        <i class="material-icons prefix"></i>
                        <input
                          id="username"
                          disabled
                          type="text"
                          required
                          class
                          v-model="user_username"
                        />
                        <label for="username">Apelido</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s6">
                        <i class="material-icons prefix">perm_identity</i>
                        <input
                          id="identity"
                          disabled
                          type="text"
                          required
                          class
                          v-model="user_identityDocument"
                        />
                        <label for="identity">RG</label>
                      </div>
                      <div class="input-field col s6">
                        <i class="material-icons prefix">assignment</i>
                        <input id="cpf" disabled type="text" class="validate" v-model="user_cpf" />
                        <label for="cpf">CPF</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s6">
                        <i class="material-icons prefix">date_range</i>
                        <input
                          id="date_birth"
                          disabled
                          type="text"
                          class="validate"
                          v-model="user_birthday"
                        />
                        <label for="date_birth">Data de Nascimento</label>
                      </div>
                      <div class="input-field col s6">
                        <i class="material-icons prefix gender">accessibility</i>
                        <!-- <select v-model="selected">
                    <option disabled value>Gênero</option>
                    <option
                      v-for="gender in user_gender"
                      v-bind:value="gender.value"
                      :key="gender.value"
                    >{{ gender.text }}</option>
                        </select>-->
                        <input
                          id="gender"
                          disabled
                          type="text"
                          class="validate"
                          v-model="user_gender"
                        />
                        <label for="gender">Gênero</label>
                      </div>
                    </div>
                  </div>
                  <div class="col s6">
                    <h5>Dados de Contato</h5>

                    <div class="row">
                      <div class="input-field col s6">
                        <i class="material-icons prefix">phone</i>
                        <input
                          id="phone"
                          disabled
                          type="text"
                          class="validate"
                          v-model="user_phone"
                        />
                        <label for="phone">Phone</label>
                        <p class="helper-text" data-bind="validationMessage: phone"></p>
                      </div>
                      <div class="input-field col s6">
                        <i class="material-icons prefix">mail</i>
                        <input
                          id="email"
                          disabled
                          type="text"
                          class="validate"
                          v-model="user_email"
                        />
                        <label for="email">E-mail</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="address" class="col s12">
      <div class>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Endereços</span>
            <form class="col s12">
              <div class="row">
                <ul class="address-content--list">
                  <li
                    class="address-list address-list--item"
                    v-for="address in addresses"
                    :key="address._id"
                  >
                    <div>
                      <div class="group">
                        <div class="checkbox">
                          <input type="radio" class name="selectedAddress" />
                          <label class for="radio">
                            <span class>{{address.description}}</span>
                          </label>
                        </div>
                      </div>
                      <div class="addressDetail">
                        <div>
                          <span class="postalCode">
                            <span class>Codigo Postal: {{address.zipCode}}</span>
                          </span>
                          <br />
                          <span class="street">
                            <span class>{{address.street}}</span>
                          </span>
                          -
                          <span class="address2">
                            <span class>{{address.complement}}</span>
                          </span>
                          <span>
                            -
                            <span class>{{address.number}}</span>
                          </span>
                          <br />
                          <span>
                            <span class>{{address.neighborhood}}</span>
                          </span>
                          -
                          <span class="city">
                            <span>
                              <span class>{{address.city}}</span>
                            </span>
                          </span>
                          -
                          <span>
                            <span class>{{address.state}}</span>
                          </span>
                          <!-- <br/> -->
                          -
                          <span>
                            <span class>{{address.country}}</span>
                          </span>
                        </div>
                        <hr />
                        <div class="address">
                          <!-- Modal Trigger -->
                          <span
                            class="address-slot address--edit modal-trigger"
                            href="#editAddress"
                          >
                            <i class="material-icons">edit</i>
                            <a class="text-color--black">Editar</a>
                          </span>
                          <!-- Modal Trigger -->
                          <span
                            class="address-slot address--delete modal-trigger"
                            href="#deleteAddress"
                            v-on:click="selectedAddressId = address._id"
                          >
                            <i class="material-icons">delete</i>
                            <a class="text-color--black">Excluir</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="editAddress" class="modal">
      <div class="modal-content">
        <h4>Editar Endereço</h4>
        <p></p>
      </div>
      <div class="modal-footer">
        <a class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="deleteAddress" class="modal">
      <div class="modal-content">
        <h4>Excluir Endereço</h4>
        <i class="icon-person material-icons">cancel</i>
        <p>Tem certeza que deseja deletar o endereço?</p>
      </div>
      <div class="modal-footer">
        <a class="modal-close waves-effect waves-green btn-flat" @click="removeAddress">Sim</a>
        <a class="modal-close waves-effect waves-red btn-flat">Não</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import M from 'materialize-css'

export default {
  name: 'MyAccount',
  data () {
    return {
      user_firstName: '',
      user_lastName: '',
      user_completeName: '',
      user_gender: '',
      // user_gender: [
      //   { text: 'Masculino', value: 'M' },
      //   { text: 'Feminino', value: 'F' }],
      user_cpf: '',
      user_phone: '',
      user_birth: '',
      user_username: '',
      user_identityDocument: '',
      user_email: '',
      user_birthday: '',
      addresses: [],
      selectedAddressId: ''

    }
  },
  methods: {
    removeAddress: function () {
      var id = this.selectedAddressId

      axios.delete('https://floating-sands-83864.herokuapp.com/address/' + id)
      // JSON responses are automatically parsed.
        .then(response => {
          var removeAddress = this.addresses.findIndex(function (address) {
            return address._id === id
          })
          if (removeAddress > -1) {
            this.addresses.splice(removeAddress, 1)
          }
          M.toast({html: 'Endereço excluido com Sucesso.!'})
        }).catch(e => {
          M.toast({html: 'Não foi possivel excluir o endereço.!'})
        })
    }
  },
  mounted () {
    window.myaccount = this
    axios.get('https://floating-sands-83864.herokuapp.com/user')
      // JSON responses are automatically parsed.
      .then(response => {
        console.log(response.data)
        var data = response.data
        this.user_firstName = data.firstName
        this.user_lastName = data.lastName
        this.user_cpf = data.legalDocument
        this.user_phone = data.cellPhone
        this.user_birthday = data.birthday
        this.user_email = data.email
        this.user_username = data.username
        this.user_identityDocument = data.identityDocument
        this.user_completeName = this.user_firstName + ' ' + this.user_lastName
        var gender = {
          M: 'Masculino',
          F: 'Feminino'
        }

        this.user_gender = gender[data.genre.toUpperCase()]

        // console.log(data.gender)
        setTimeout(function () {
          M.updateTextFields()
        }, 200)
      }).catch(e => {
        console.log(e)
      })

    axios.get('https://floating-sands-83864.herokuapp.com/address')
      // JSON responses are automatically parsed.
      .then(response => {
        this.addresses = response.data
      }).catch(e => {
        console.log(e)
      })

    M.AutoInit()
    var elems = document.querySelectorAll('select')
    M.FormSelect.init(elems)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#myaccount {
  width: 100%;
  height: 100%;

  .modal-footer {
    display: flex;
    justify-content: center;
  }

  .icon-person {
    font-size: 60px;
    color: #ff0000;
  }

  .text {
    &-color {
      &--black {
        color: #000;
      }
    }
  }
  .address-content--list {
    display: flex;
    flex-wrap: wrap;

    .address-list {
      opacity: 1;
      width: 33%;
      position: relative;
      padding: 10px;
      transition: all 0.5s;
      &--item {
        position: relative;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ee6e73;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: space-between;
        -ms-flex-pack: space-between;
        -moz-flex-pack: space-between;
        justify-content: space-between;
        -webkit-box-direction: column;
        -ms-flex-direction: column;
        -moz-flex-direction: column;
        flex-direction: column;
        width: 30%;
        height: 100%;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 15px 1.5%;
        .address {
          display: flex;
          align-items: center;
          justify-content: center;
          &-slot {
            display: flex;
            margin: 0 5px;
            align-items: center;
          }
          &--edit {
          }
          &--delete {
            color: red;
          }
        }
      }
    }
  }
}
</style>
