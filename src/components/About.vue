<template>
  <div id="about">
  <div class="row">
  <h2>Sobre nós</h2>
    <div class="col s6 m5" id="cardTexto">
      <div class="card-panel teal" id="cardzao">
        <span class="white-text"><p>Tem um lugar onde é possível você ser o seu herói preferido e ainda se ver num universo cheio de vilões implacáveis. Este lugar é a RGGI Cards. Há mais de 10 anos no mercado, com atendimento especializado.</p>

                                 <p> Na RGGI Cards você vai encontrar:</p>
                                 <ul class="lista">
                                    <li>- Mangás</li>
                                    <li>- Livros de RPG (Role Playing Game)</li>
                                    <li>- Trading Card Games como: Yugioh, Magic The Gathering, Pokémon e outros.</li>
                                    <li>- Jogos estratégicos e muito mais!</li>
                                 </ul>
        </span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#about{
  width: 100%;
  height: 100%;
}

#cardTexto{
 margin-left: 30%;
 text-align: left;
}

#cardzao{
  background-color: #800000 !important;
}
</style>
