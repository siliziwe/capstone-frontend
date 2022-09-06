<template>
  <div id="signup" class="container min-vh-100">
    <h2 class="fw-bold p-2 text-center">Register</h2>
    <div class="col-md-6 m-auto">
    <form class="container border border-black h-100" @submit.prevent="register">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control pass m-auto" id="firstName" v-model="firstName">
      </div>
        <div class="form-group">
        <label for="lastName">Last tName</label>
        <input type="text" class="form-control pass m-auto" id="lastName" v-model="lastName">
      </div>
        <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control pass m-auto" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" class="form-control pass m-auto" id="password" v-model="password">
      </div>
      <div class="form-group">
        <label for="mobile">mobile</label>
        <input type="number" class="form-control pass m-auto" id="password" v-model="password">
      </div>
        <div class="form-group">
        <label class="form-control" v-show="userMsg">{{userMsg}}</label>
      </div>
      <button class="btn btn-primary my-5" type="submit">Submit</button>
    </form>
    </div>
    </div>

    <form>
<div class="container d-block min-vh-100">
  <h2 class="text-dark text-center"> Login</h2>
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="staticEmail2" class="sr-only">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary mb-2">Login</button>
    </form>
</div>
</template>

<script>
// export default {
//   name: '',
//   components:{

//   },
//   computed:{

//   },
//   data() {
//     return {


//     }
//   },
//   mounted() {
  export default {
    data() {
    return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
  },
      computed: {
    userMsg() {
      return this.$store.state.userMsg
    }
  },
    methods: {
        register() {
        this.$store.dispatch('register', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
      });
    }
  }
}


</script>

<style>
  .form{
    background-color: #FEFEFE;
}
.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
}
.pass::placeholder{
    padding-left: 20px;
    font-size: 15px;
}
.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
    font-size: 20px;
    transition: 0.5s ease;
}
.pass:hover{
    background-color: black;
    color: white;
}
</style>