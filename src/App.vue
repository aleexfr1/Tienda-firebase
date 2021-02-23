<template>
  <div id="app">
    <div v-if="camisetas" class="contenedor">
      <Header/>
      <router-view></router-view>
      <Footer/>
    </div>
    <div v-if="!camisetas" class="loading">
      <Loading/>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Loading from './components/loading.vue'

import {db} from "../db.js"

export default {
  name: 'App',
  components: {
    Header, 
    Footer,
    Loading
  },
  data() {
    return {
      camisetas: null
    }
  },
  firestore: {
      camisetas: db.collection('camisetas'),
  },
}
</script>

<style scoped lang="scss">
@import "./scss/base/main.scss";
* {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
}

html {

    font-size: 62.5%;
    @include response(md){
        font-size: 56.25%;
    }

    @include response (sm){
        font-size: 50%;
    }
}

#app{
   display: grid;
   grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 16rem)) minmax(6rem, 1fr);
   grid-template-rows: repeat(4, min-content);
   grid-row-gap: 1.5rem;
   background-color: color(tertiary);

   .contenedor{
     grid-column: 1 / -1;
     grid-row: 1 / 5;
   }
   .loading{
     grid-column: 1 / -1;
     grid-row: 1 / 5;
   }
}
</style>
