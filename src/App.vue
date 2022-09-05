<template>
  <div>
   <navbar></navbar>
   <CartIcon></CartIcon>
  <router-view/>

  <footerCom />
</div>
</template>

<script>
import navbar from './components/navbar.vue'
import footerCom from './components/footerCom.vue'
import CartIcon from './components/cartIcon.vue'

  export default{
    name: 'App',
    components:{
    navbar,
    footerCom,

}
  }
</script>

<style>
body{
  background-color: #fbfcfd;
  padding: 4px 120px;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 590px){
  body{
  padding: 20px 20px;
 }
}
</style>
