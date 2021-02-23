<template lang="html">
  <section class="producto">
    <p>{{obtenerProducto(this.$route.params.id)}}</p>
    <div class="containerProducto">
      <div class="fotoProducto">
        <div class="foto">
          <img v-bind:src="producto.Imagen_1" width="100%" height="100%">
        </div>
      </div>
    </div>
    <div class="datosProducto">
      <h3><b>Camiseta Nombre</b></h3>
      <p>Precio Camiseta</p>
      <p>Descripcion Camiseta</p>
      <div class="tallas">
        <select class="talla" name="talla">
          <option value="none">Elige tu talla</option>
          <option value="XXS">XXS</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <button v-on:click="agregarProducto">Añadir a la cesta</button>
      <notifications group="CompraCamiseta"/>
    </div>
    <p><b>Entrega en 24-48 horas</b></p>
  </section>

</template>

<script lang="js">
import {db} from "../../db.js"
import firebase from "../../db.js"

  export default  {
    name: 'camisetainfo',
    props: [],
    mounted () {
      firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    data () {
      return {
        producto: [],
        idProducto: this.$route.params.id,
        user: {
          loggedIn: false,
          data: {},
        }
      }
    },
    methods: {
      obtenerProducto: function(id){
        db.collection('camisetas').doc(id).get().then( response => {
          if (response.exists) {
            //console.log("Document data:", response.data());
            this.producto = response.data();
          } else {
            console.log("No such document!");
          }
        });
      },
      agregarProducto: function(){
        /*db.collection('carrito').add({
          Nombre: this.producto.Nombre,
          Precio: this.producto.Precio,
        })*/
        if(!this.user.loggedIn){
          this.$notify({
            group: 'CompraCamiseta',
            title: 'Error Compra Producto',
            text: 'Debe loguearse para poder comprar',
            type: 'error',
          });
        } else{
          db.collection("carrito").where("idProducto", "==", this.idProducto)
          .get()
          .then((querySnapshot) => {
            this.$notify({
              group: 'CompraCamiseta',
              title: 'Producto Añadido',
              text: 'Producto añadido al carrito',
              type: 'success',
            });
            
            if(querySnapshot.empty){
              db.collection('carrito').add({
                idProducto: this.idProducto,
                nombre:this.producto.Nombre,
                stock:this.producto.Stock,
                unidades:1,
                precio:this.producto.Precio, 
                precioTotal:this.producto.Precio,
                user: this.user.data.email,
              })
            }else {
              querySnapshot.forEach((doc) => {
              if(doc.data().unidades<this.producto.Stock){
                let unidadesTotales= doc.data().unidades+1;
                let total= unidadesTotales * doc.data().Precio;

                db.collection('carrito').doc(doc.id).update({
                  unidades: unidadesTotales,
                  precioTotal: total
                })
              }
              });
            }
          });
        }
      }
    },
    computed: {

    },
    firestore: {
      producto: db.collection('camisetas'),
  },
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  section {
    grid-column: 1 / -1;
    grid-row: 2 / 4;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, min-content);
    grid-gap: 2rem;

    .containerProducto{
      grid-column: 1 / 7;
      grid-row: 1 / 2;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      @include response(lg){
        flex-wrap: nowrap;
      }
      @include response(xl){
        flex-wrap: nowrap;
      }

      .foto{
        border: 1px solid black;
        background: white;
        width: auto;
        width: 60vw;
        /*max-width: 800px;*/
        height: 500px;
        min-height: 500px;
        @include response(lg){
          max-width: 450px;
          margin-left: 5rem;
          height: 700px;
        }
        @include response(xl){
          max-width: 800px;
          width: 40vw;
        }
        img{
          display: block;
          object-fit: contain;
        }
      }

    }

    .datosProducto{
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      margin-left: 5vh;
      margin-bottom: 3rem;
      @include response(sm){
        grid-row: 2 / 3;
      }
      @include response(lg){
        margin-left: 5vh;
        grid-row: 2 / 3;
        grid-column: 1 / -1;
      }
      @include response(xl){
        grid-column: 7 / -1;
        grid-row: 1 / 2;
      }

      p s{
        color: color(primary);
      }


      .colores{
        display: flex;

        .color{
          border: 1px solid black;
          height: 150px;
          width: 100px;
          margin: 10px;

          img{
            object-fit: cover;
          }
        }
      }

      .talla{
        border: 1px solid black;
        width: 350px;
        height: 40px;
        margin-bottom: 10px;
      }

      button{
        background: rgba(color(quaternary), 0.2);
        width: 350px;
        height: 40px;
        border: 1px solid black;
      }
    }
  }

</style>
