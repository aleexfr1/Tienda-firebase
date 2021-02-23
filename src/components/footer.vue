<template lang="html">

  <div class="pie">

    <div class="Pagos">
      <p><i class="fas fa-credit-card"></i>Métodos de Pago</p>
      <i class="fab fa-cc-btc"></i>
      <i class="fab fa-cc-paypal"></i>
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


    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, min-content);
    grid-gap: 2rem;
    background-color: (rgba(color(primary), 0.3));

    .partners{
      grid-column: 1 / -1;
      @include navigation();
      @include response(lg){
        grid-column: 2 / 4;
      }
    }

    .Pagos{
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
