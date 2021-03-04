<template lang="html">
  <section class="header-top">

    <nav class="nav">
      <div class="navbar">
        <div class="logo">
          <a href="index.html"><img src="https://firebasestorage.googleapis.com/v0/b/vue-cli-tienda.appspot.com/o/logo.png?alt=media&token=1c3a6e1c-9b5a-42e6-934c-8d0a9b0c7330"></a>
        </div>
        <div class="botones">
          <router-link to="/login"><i class="fas fa-user"></i><p>{{ nombre }}</p></router-link>
           <router-link to="/carrito"><i class="fas fa-shopping-cart"></i><p class="cantidadCarrito">Cantidad: {{this.listaCarro.length}} Total: {{precioTotal}}€</p></router-link>
          <!--<a><i class="fas fa-envelope"></i></a>-->
          <a v-on:click="logout" ><i class="fas fa-sign-out-alt"></i></a>
          
        </div>
      </div>
    </nav>

    <div class="menu">
      <div class="menu-desplegable">
        <ul class="ul">
          <li><a href="productos.html">Futbol</a></li>
        </ul>
      </div>
      <div class="buscador">
        <form action="" class="search-area">
          <input type="text" placeholder="Busca tu articulo">
          <a href=""><i class="fas fa-search"></i></a>
        </form>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import {db} from "../../db.js"
import firebase from "../../db.js"

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {
      firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          this.$bind('listaCarro', db.collection('carrito').where("user","==",firebase.auth.currentUser.email))
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
          this.$bind('listaCarro', db.collection('carrito').where("user","==",""))
        }
      })
    },
    data () {
      return {
        products:[],
        listaCarro: [],
        user: {
          loggedIn: false,
          data: {}
        }
      }
    },
    methods: {
      logout(){
        firebase.logout();
      },
    },
    firestore: {
      listaCarro: db.collection('carrito').where("user","==", firebase.auth.currentUser ? firebase.auth.currentUser.email: ""),
      products: db.collection('camisetas')
    },
    computed: {
      authenticated(){
          return this.user.loggedIn
      },
      nombre(){
          if (this.user.data.displayName) {
            return this.user.data.displayName
          }
        return null
      },
      precioTotal: function(){
        let suma = 0;
        this.listaCarro.forEach(doc => {
          suma += parseFloat((doc.precioTotal).toFixed(2));
        });
        return suma;
      },
    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";

  .header-top{
    /*posicionar header detro de container*/ 
    grid-column: 1 / -1 /* 1 / 11*/;
    grid-row: 1 / 2;
   
    /* mi header también es un grid*/ 
    display: grid;
    /*grid-template-columns: minmax(10rem, 1fr) repeat(7, minmax(min-content, 16rem)) minmax(10rem, 1fr);*/
    grid-template-columns: minmax(1fr, min-content) repeat(10, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-gap: 2rem;

    .nav{
      display: grid;
      grid-column: 1 / 10;
      grid-row: 1 / 2;
      
      .navbar{
        /*display: grid;*/
        grid-column: 1 / 10;
        grid-row: 1 / 2;
        display: grid;
        /*grid-template-columns: minmax(10rem, 1fr) repeat(7, minmax(min-content, 16rem)) minmax(10rem, 1fr);*/
        grid-template-columns:  repeat(7, 1fr);
        grid-template-rows: repeat(1, min-content);
        grid-gap: 2rem;
        align-items: center;

        .links{
          /*posicionar links en grid navbar*/ 
          /* links , logo, botones*/ 
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          justify-content: center;
          display: none;
          @include response(lg){
            display: block;
          }
          a{
            text-decoration: none;
            color: color(primary);
            font-size: size(xs);
            padding: 10px;

            &:hover{
              color: color(primary);
              background-color: rgba(color(primary), 0.4);
            }
          }
        }

        .logo{
          /*posicionar logo en grid navbar*/ 
          /* links , logo, botones*/ 
          grid-column: 1 / 3;
          grid-row: 1 / 2;
          padding: 1rem;
          text-align: center;
          @include response(lg){
            grid-column: 3 / 6;
          }
          img {
              width:12rem;
              height: 100%;
              @include response(lg){
                width: 20rem;
              }
          }
        }

        .botones{
          grid-column: 5 / -1;
          grid-row: 1 / 2;
          /*display: none;*/
          display: flex;
          justify-content: space-evenly;
          text-align: center;
          font-size: size(sm);
          @include response(lg){
            grid-column: 6 / -1;
          }
          a{
            display: flex;
            color: color(primary);
            cursor: pointer;
            text-decoration: none;
            button{
              padding: 0.6rem 1rem;
              border: 1px solid color(quaternary);
              border-radius: 4px;
              background-color: color(quaternary);
              color: color(tertiary);

              font-size: 1.5rem;
              text-shadow: 0 -1px 0 rgba(color(primary), 0.5);
              box-shadow: 0 1px 0 rgba(color(primary), 0.5) inset,
                0 1px 3px rgba(color(primary), 0.5);
              background-color: color(quaternary);
              cursor: pointer;
            }
            p{
              font-size: small;
              margin: 5px;
            }
            .cantidadCarrito{
                background: white;
                border-radius: 5%;
                font-size: small;
                padding: 5px 10px;
            }
          }
        }
      }
    } 

    .menu{
      grid-column: 1 / 10;
      grid-row: 2 / 2;
      display: grid;
      /*grid-template-columns: minmax(10rem, 1fr) repeat(7, minmax(min-content, 16rem)) minmax(10rem, 1fr);*/
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(1, min-content);
      grid-gap: 2rem;
      align-items: center;
      min-height: 50px;
      
      .menu-desplegable{
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        display: flex;
        justify-content: start;
        align-items: center;

        @include response(lg){
          justify-content: start;
          align-content: center;
        }

        ul{
          list-style: none;
          padding: 0;
          width: 90vw;
          @include response(lg){
            list-style: none;
            padding: 0;
          }
          li{
            float: left;
            width: 100%;
            text-align: center;

            @include response(lg){
              float: left;
              width: min-content;
              text-align: left;
            }

            a{
              color: color(primary);
              text-decoration: none;
              padding: 10px 15px;
              display: block;

              &:hover{
                border-bottom: 1px solid color(primary);
              }
            }
          }
        }
      }
      .buscador{
        display: grid;
        grid-column: 1 / -1;
        grid-row: 2 / 3;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        @include response(lg){
          grid-column: 8 / -1;
          grid-row: 1 / 2;
          margin-top: 20px;
        }

        a{
          cursor: pointer;
          font-size: size(xs);
          color: color(primary);
        }

        input[type=text]{
          border: 1px solid color(primary);
          font-family: 'Courier New', Courier, monospace;
          margin-right: 5px;
          font-size: size(xs);
        }
      }
    }
  }

</style>
