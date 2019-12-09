<template>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <p><a href="!#" class="grey-text text-lighten-4">Sobre nós</a></p>
                <a href="!#" class="grey-text text-lighten-4">Fale conosco</a>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Redes Sociais</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3 facebook" href="#!"><img class="ficon" src="../assets/facebooklogo.png" ></a></li>
                  <li><a class="grey-text text-lighten-3 twitter" href="#!"><img class="ficon" src="../assets/twitterlogo.png" ></a></li>
                  <li><a class="grey-text text-lighten-3 insta" href="#!"><img class="ficon" src="../assets/instagramlogo.png" ></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 RGGI Cards
            </div>
          </div>
        </footer>
</template>
<script>
// import axios from "axios";

export default {
  name: 'Footer',
  data () {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
  footer{
    width: 100%;
    background-color: green;
  }

  .ficon{
    max-width: 50px;
  }

  footer li{
    display: inline-block;
  }

  body{
    height: 100%;
  }

</style>
