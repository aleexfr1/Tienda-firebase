<template lang="html">
  <section>
    <div class="camisetas">
      <div class="card" v-for="camisetas in camisetas" v-bind:key="camisetas.id">
        <div class="imgBx">
          <img v-bind:src="camisetas.Portada">
          <h2>{{camisetas.Nombre}}</h2>
        </div>
        <div class="content">
          <div class="price">
            <h3>Precio: </h3>
              <span>{{camisetas.Precio}}</span>
            <h3>Stock: </h3>
              <span>Hola</span>
          </div>

          <router-link v-bind:to="'/camisetainfo/'+camisetas.id">{{camisetas.Nombre}}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'camisetas',
    props: ["camisetas"],
    mounted () {
      
    },
    data () {
      return {
        disponible: "Disponible",
        noDisponible: "Agotado"
      }
    },
    methods: {

    },
    computed: {
      stockDisponible: function(){
        if(this.camisetas.Stock > 0){
          return this.disponible;
        } else {
          return this.noDisponible;
        }
      }
    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  section {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    min-height: min-content;
    background: rgba(color(primary), 0.3);
    overflow: hidden;
    /*padding: 100px 20px;*/
    box-sizing: border-box;

    .camisetas{
      position: relative;
      /*z-index: 10;*/
      display: flex;
      justify-content: center;
      /*align-items: center;*/
      flex-wrap: wrap;

      .card{
        position: relative;
        width: 350px;
        height: 400px;
        margin: 20px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(color(primary), 0.05);
        box-shadow: 0 10px 25px rgba(color(primary), 0.05);
        backdrop-filter: blur(15px);
        &:hover{
          .imgBx{
            /*transform: translateY(-100px);*/
            img{
              transform: translate(-20px, -40px) rotate(-25deg) scale(1.4);
            }
          }
          /*.content{
            opacity: 1;
            visibility: visible;
            transform: translateY(-50px);
          }*/
        }

        .imgBx{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          transition: 0.5s ease-in-out;
          text-align: center;
          img{
            max-width: 100%;
            margin: 0 0 20px;
            transition: 0.5s ease-in-out;
          }
          h2{
            color: color(secondary);
          }
        }

        .content{
          position: absolute;
          bottom: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: 0.5s ease-in-out;
          /*opacity: 0;
          visibility: hidden;*/

          .price{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 20px;
            h3{
                color: color(secondary);
                font-weight: 300;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-right: 10px;
            }
            span{
              width: min-content;
              height: 26px;
              text-align: center;
              line-height: 24px;
              display: inline-block;
              color: color(primary);
              background: color(secondary);
              border-radius: 4px;
              font-size: size(xs);
              margin: 0 5px;
              margin-right: 10px;
              font-weight: 500;
              transition: 0.5s;
              cursor: pointer;
              &:hover{
                background: color(quaternary);
              }
            }
          }
          a{
            position: relative;
            top: 10px;
            padding: 12px 30px;
            background: rgba(color(secondary), 1);
            border-radius: 40px;
            font-weight: 600;
            letter-spacing: 1px;
            color: color(primary);
            text-decoration: none;
            text-transform: uppercase;
          }
        }
      }
    }
  }
</style>