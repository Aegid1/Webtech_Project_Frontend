<template>
  <div class="container">
    <div class="DivWrapper">
      <div class="firstDiv"></div>
      <div class="secondDiv">
        <form>
          <div class ="WrapperLoginForm">
            <div class="loginForm">
              <label for="exampleInputEmail1" class="Form-titles"><b>Email address </b> </label>
              <input type="email" class="InputFields" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
              <div class="loginForm">
              <br>
              <label for="exampleInputPassword1" class="Form-titles"><b>Password </b></label>
              <input type="password" class="InputFields" id="exampleInputPassword1">
            </div>
            <div class="loginForm form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
          <br>
          <button type="submit" class="LoginButton"><b>Login</b></button>
          </div>
        </form>
      </div>
      <div class="thirdDiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>

.firstDiv {
  height: 100vh;
  width: 15%;
  z-index: 0;
  border-radius: 0px 30px 0px 0px;
  background-color: #20c9c1;
  float: left;
}

.secondDiv{
  background-color: red;
  width: 60%;
  height: 0px;
  z-index: 0;
  margin: 0 auto;
}

.thirdDiv{
  width: 15%;
  height: 100vh;
  z-index: 0;
  border-radius: 30px 0px 0px 0px;
  background-color: #20c9c1;
  float: right;
}

.WrapperLoginForm {
  background-color: #20c9c1;
  padding: 20px;
  border-radius: 30px 30px 30px 30px;
  height: 70vh;
}

.InputFields{
  display: inline-block;
  width: 80%;
}

.form-text{
  margin: 10px;
}

.form-check-input{
  margin: 15px;
}

.LoginButton{
  background-color: White;
  max-width: 350px;
  padding: 15px;
  padding-left: 25px;
  padding-right: 25px;
  margin: 0px;
  border-radius: 15px 15px 15px 15px;
}

/*.Form-titles{
  background-color: aqua;
}
 */
</style>
