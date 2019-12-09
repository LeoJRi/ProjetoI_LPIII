<template>
  <div id="header">
    <nav class="header-content header-content--top">
      <div>
        <router-link to="/home" class="brand-logo">
          <i class="material-icons">cloud</i>Logo
        </router-link>
      </div>
      <div class="nav-wrapper header">
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
      <div>
        <ul class="right hide-on-med-and-down">
          <li>
            <!-- Dropdown Trigger -->
            <a class="dropdown-trigger user" data-target="dropdown1">
              <span v-if="userLoggedIn">{{userName}}</span>
              <span v-if="!userLoggedIn">Usuario</span>
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>

          <li>
            <router-link to="/cart">Carrninho</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="header-content header-content--bottom">
      <ul v-if="categorys && categorys.length > 0" class="right hide-on-med-and-down">
        <li v-for="category in categorys" :key="category.id">
          <router-link
            :to="{ name: 'ProductListing', params: { description: category.description }} "
          >{{category.description}}</router-link>
        </li>
      </ul>
    </nav>

    <ul id="dropdown1" class="dropdown-content">
      <li>
        <router-link v-if="userLoggedIn" to="/myaccount">Minha Conta</router-link>
        <router-link v-if="!userLoggedIn" to="/login">Logar</router-link>
      </li>
      <li>
        <router-link v-if="!userLoggedIn" to="/register">Cadastrar</router-link>
        <a @click="callLogout" v-if="userLoggedIn">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data () {
    return {
      categorys: [],
      userName: this.getUserName(),
      userLoggedIn: this.getUserLoggedIn()

    }
  },
  mounted () {
    axios.get('https://floating-sands-83864.herokuapp.com/category?search=')
      // JSON responses are automatically parsed.
      .then(response => {
        this.categorys = response.data
      }).catch(e => {
        console.log(e)
      })
  },
  methods: {
    getUserName: function () {
      var logged = localStorage.getItem('user_logged')
      if (logged === 'true') {
      }
      return localStorage.getItem('user_firstName')
    },

    getUserLoggedIn: function () {
      var logged = localStorage.getItem('user_logged')
      return logged === 'true'
    },

    callLogout: function () {
      var data = {
        'success': true
      }

      axios.post('https://floating-sands-83864.herokuapp.com/logout', data)
        // JSON responses are automatically parsed.
        .then(response => {
          this.userLoggedIn = false
        }).catch(e => {
          console.log(e)
        })
    }
  },
  watch: {
    '$route.path': function (path) {
      this.userName = this.getUserName()
      this.userLoggedIn = this.getUserLoggedIn()
    },
    userLoggedIn: function (value) {
      localStorage.setItem('user_logged', value)
      console.log('okay', value)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#header {
  width: 100%;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  .header-content {
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: none;
    background-color: lightblue;

    &--top {
      justify-content: space-between;

      .nav-wrapper.header {
        width: 50%;
        min-width: 400px;
      }

      .brand-logo {
        position: relative;
        display: flex;
        align-items: center;
      }
      .dropdown-trigger {
        &.user {
          display: flex;
          align-items: center;
        }
      }
    }

    &--bottom {
      justify-content: center;
    }
  }
}
</style>
