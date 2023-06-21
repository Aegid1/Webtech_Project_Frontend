<template>
  <div class="container">
      <h1>Login into your Home</h1>
      <br />
      <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
        <div class="loginForm">
          <label for="exampleInputEmail1" class="form-label"><b>Email address </b> </label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <br>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="loginForm">
          <label for="exampleInputPassword1" class="form-label"><b>Password </b></label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
           <br>
        <div class="loginForm form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="Login" class="btn btn-primary">Login</button>
      </form></div>
      <div class="col-md-9"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.col-md-3 {
  display: grid;
  grid-template-rows: 40% 20%;
  height: 100vh;
  width: 20%;
  z-index: 0;
  border-radius: 0px 30px 0px 0px;
  background-color: #20c9c1;
}

.loginForm {
  background-color: #20c9c1;
  margin: auto;
  max-width: 350px;
  padding: 10px;
  text-transform:
}
</style>
