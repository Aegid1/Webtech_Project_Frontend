<template>
  <div class="container">
    <h1>Registration Page</h1>
    <br />
    <br/>
    <div class="row">
      <div class="firstDiv"></div>
      <div class="col-md-6">
        <form>
          <div class="loginForm">
            <label for="exampleInputEmail1" class="Form-titles">Email address</label>
            <input type="email" class="InputFields" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="loginForm">
            <label for="exampleInputPassword1" class="Form-titles">Password</label>
            <input type="password" class="InputFields" id="exampleInputPassword1">
          </div>
          <div class="loginForm form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form></div>
      <div class="firstDiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationView'
}
</script>

<style scoped>

</style>
