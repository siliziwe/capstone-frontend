<template>
  <section id="landing">
  <div>
    <h1 class="text-center text-white">Welcome to Tommorow-Tech</h1>
  </div>
</section>
</template>


<script>

  export default {
    mounted () {
    AOS.init()
  }
}
</script>




<style scoped>
  #landing{
    min-height: 100vh;
    background: url(https://i.postimg.cc/wvxxpv9d/blue-cyber-circuit-future-technology-image-vector.webp) ;
    display: inline-flex;
    background-attachment: fixed;
    min-width: 100vw;
    margin-right: 300px;
}
</style>
