<template lang="html">

  <section class="iniciarSesion">
    <div class="login">
      <h3>INICIO DE SESION  </h3>
      <form class="formularioLogin">
        <label>Correo Electrónico</label><br>
        <input type="email"><br>
        <label>Contraseña</label><br>
        <input type="password">
        <button class="iniciarSesion">Iniciar Sesión</button><br>
        <a href="">¿Has olvidado la contraseña?</a><br>
        <input class="iniciarGoogle" type="button" value="Inicar Sesion Con Google" v-on:click="loginGoogle"><br>
        <input class="iniciarGoogle" type="button" value="Inicar Sesion Con Facebook" v-on:click="loginFacebook"><br>
      </form>
    </div>
    <div class="registrarse">
      <p>¿Nuevo?</p>
      <a href="#"><button class="iniciarSesion">Registrate Ahora</button></a>
    </div>
  </section>

</template>

<script lang="js">
import firebase from "../../db.js"
  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      loginGoogle(){
        firebase.loginGoogle();

      },
      logoutGoogle(){
        firebase.logoutGoogle();
      },
      loginFacebook(){
        firebase.loginFacebook();

      },
      logoutFacebook(){
        firebase.logoutFacebook();

    },
    computed: {

    },
}}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  .iniciarSesion {
    grid-column: 1 / -1;
    grid-row: 2 / 4;
    text-align: center;

    .login{
      border: 1px solid #ff9900;
      width: 500px;
      height: min-content;
      margin: 0 auto;
      padding: 15px 30px;

      .formularioLogin {
        input{
          margin: 10px 0px;
          font-size: size(sm);
        }
        .iniciarSesion{
          background-color: color(quaternary);
          color: rgba(color(primary),0.9);
          margin: 20px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        .iniciarGoogle{
          background-color: #ff9900;
          color: rgba(color(tertiary),0.9);
          margin: 10px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        .iniciarFacebook{
          background-color: #ff9900;
          color: rgba(color(tertiary),0.9);
          margin: 10px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        a{
          text-decoration: none;
          color: color(primary);
        }
      }
    }

    .registrarse{
      border: 1px solid black;
      width:  500px;
      height: min-content;
      margin: 0 auto;
      padding: 15px 30px;
      text-align: center;

      button{
        font-size: size(xs);
      }
    }
  }
</style>
