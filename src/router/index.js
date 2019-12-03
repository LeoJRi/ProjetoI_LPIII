import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Product from '@/components/Product'
import ProductListing from '@/components/ProductListing'
import MyAccount from '@/components/MyAccount'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:productId',
      name: 'Product',
      component: Product
    },
    {
      path: '/productListing/:description',
      name: 'ProductListing',
      component: ProductListing
    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
