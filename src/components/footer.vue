<template lang="html">

  <div class="pie">

    <div class="Pagos">
      <p>Métodos de Pago</p>
      <a href="#"><i class="fas fa-cc-btc"></i></a>
      <a href="#"><i class="fab fa-cc-paypal"></i></a>
      <a href="#"><i class="fas fa-dollar-sign"></i></a>

    </div>

    <div class="Transporte">
      <p>Transporte</p>
      <a href="#"><i class="fas fa-car"></i></a>
      <a href="#"><i class="fas fa-motorcycle"></i></a>
      <a href="#"><i class="fas fa-truck-moving"></i></a>

    </div>

    <div class="redesSociales">
      <p>Redes Sociales</p>
      <a href="#"><i class="fab fa-facebook-square"></i></a>
      <a href="#"><i class="fab fa-instagram-square"></i></a>
      <a href="#"><i class="fab fa-twitter-square"></i></a>
    </div>

  </div>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  .pie {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    border: 1px;


    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, min-content);
    grid-gap: 2rem;
    background-color: (rgba(color(primary), 0.3));

    .Pagos{
      grid-column: 1 / -1;
      @include navigation();
      @include response(lg){
        grid-column: 2 / 4;
      }
    }

    .Transporte{
      grid-column: 1 / -1;
      @include navigation();
      @include response(lg){
        grid-column: 5 / 7;
      }
    }

    .redesSociales{
      grid-column: 1 / -1;
      @include navigation();
      @include response(lg){
        grid-column: 8 / 10;
      }
    }
  }
</style>
