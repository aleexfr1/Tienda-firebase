<template lang="html">

  <section>
    <div class="loader">
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
    </div>

    <h2>Cargando...</h2>

    <div class="loader">
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:1;"></div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'loading',
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

<style scoped>
  section{
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: changeColor 0.5s linear infinite;
  }

  @keyframes changeColor {
    0%{
      filter: hue-rotate(0deg);
    }
    100%{
      filter: hue-rotate(300deg);
    }
  }

  section h2{
    color: rgb(0, 0, 0);
    font-weight: 300;
    letter-spacing: 10px;
  }

  section .loader{
    position: relative;
    display: flex;
  }
  section .loader .dot{
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin: 20px 10px;
    transform: scale(0.1);
    border-radius: 50%;
    animation: animateDot 5s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }

  section .loader:last-child .dot{
    animation-delay: calc(-0.1s * var(--i));
  }

  @keyframes animateDot{
    0%{
      transform: scale(0.1);
    }
    10%{
      transform: scale(1);
    }

    50%,100%{
      transform: scale(0.1);
    }
  }
</style>
