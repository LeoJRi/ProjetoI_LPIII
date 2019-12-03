<template>
  <div id="login">
    <div class="row">
      <div class>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Login</span>
            <div class="input-field">
              <input v-model="username" id="user_name" type="text" class="validate" />
              <label for="user_name" class>E-mail / Usuario</label>
            </div>
            <div class="input-field input-field--password">
              <input v-model="password" id="user_password" type="text" class="validate" />
              <label for="user_password" class>Senha</label>
            </div>
            <div class="btn--login">
              <button
                v-on:click="gerateToken"
                class="btn waves-effect waves-light red lighten-2"
                type="submit"
                name="action"
              >
                Logar-se
                <i class="material-icons right">send</i>
              </button>
            </div>
            <div class="link">
              <router-link class="link--register" to="/register">Cadastrar</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    gerateToken: function () {
      axios.get('https://floating-sands-83864.herokuapp.com/token/generate')
        // JSON responses are automatically parsed.
        .then(response => {
          localStorage.setItem('session_token', response.data.token)
          this.callLogin()
        }).catch(e => {
          console.log(e)
        })
    },
    callLogin: function () {
      axios.post('https://floating-sands-83864.herokuapp.com/login',
        {
          username: this.username,
          password: this.password
        })
        // JSON responses are automatically parsed.
        .then(response => {
          console.log(response)
          localStorage.setItem('user_firstName', response.data.firstName)
          localStorage.setItem('user_logged', true)
          this.$router.push({ path: '/home' })
        }).catch(e => {
          console.log(e)
          localStorage.removeItem('user_firstName')
          localStorage.setItem('user_logged', false)
        })
    }
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
#login {
  .card {
    width: 400px;
    height: 400px;
    .card-title {
      margin-bottom: 60px;
    }
    .btn--login {
      margin-top: 40px;
    }
    .link {
      margin-top: 10px;
      &--register {
        color: #000;
        &:hover {
          color: #43a047;
        }
      }
    }
    .input-field {
      width: 60%;
      margin: auto;
      &--password {
        margin-top: 30px;
      }
      .validate {
        border-bottom: 1px solid #000000;
        &:focus {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
}
</style>
