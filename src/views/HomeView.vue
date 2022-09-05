<template>
  <section id="landing" class="container-fluid align-items-center justify-content-center">
  <div>
    <h1 class="text-center text-white">Welcome to Tommorow-Tech</h1>
  </div>
</section>
</template>


<script>
import carousel from '../components/carousel.vue'


  export default {
    mounted () {
    AOS.init()
}
}

</script>


<style scoped>

  #landing{
    min-height: 100vh;
    background: url(https://i.postimg.cc/wvxxpv9d/blue-cyber-circuit-future-technology-image-vector.webp);
    background-attachment: fixed;
    min-width: 100%;
}

</style>
