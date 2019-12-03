<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header />
    <router-view />
    <Footer />
    <div>

    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import $ from 'jquery'
// import M from 'materialize-css/dist/js/materialize.js'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import axios from 'axios'
export default {
  name: 'App',
  components: { Header, Footer },
  data () {
    return {}
  },
  mounted () {
    // if (localStorage.session_token) {

    // } else {
    //   axios.get('https://floating-sands-83864.herokuapp.com/token/generate')
    //     // JSON responses are automatically parsed.
    //     .then(response => {
    //       localStorage.setItem('session_token', response.data.token)
    //     }).catch(e => {
    //       console.log(e)
    //     })
    // }
  }

}

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('session_token')

    if (token) {
      config.headers['x-access-token'] = token
    }

    // config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'
    // config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With'

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit()
})
</script>

<style lang="less">
.modal-content-per {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .modal-overlay {
    background-color: #0000004f;
  }
}
.global--spinner {
  position: relative;
      z-index: 1000;
}
.tabs {
  position: relative;
  margin: 0 auto;

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: black;
    }

    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
