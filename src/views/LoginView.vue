<template>
  <div class="container">
    <div class="DivWrapper">
      <div class="firstDiv"></div>
      <div class="secondDiv">
        <form>
          <h1>Login into your Home</h1>
          <div class ="WrapperLoginForm">
            <div class="loginForm">
              <label for="exampleInputEmail1" class="Form-titles"><b><h2>Email address</h2></b></label>
              <input type="email" class="InputFields" id="exampleInputEmail1" required aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
              <div class="loginForm">
              <label for="exampleInputPassword1" class="Form-titles"><b><h2>Password</h2></b></label>
              <input type="password" class="InputFields" id="exampleInputPassword1" required>
            </div>
            <div class="form-check">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
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
  padding-top: 45px;
  border-radius: 30px 30px 30px 30px;
}

.form-text{
  margin: 10px;
  text-align: left;
  text-align: left;
}

.Form-titles{
  background-color: #42b983;
 }

.loginForm{
  text-align: left;
  padding-left: 20px;
}

.form-check-input{
  margin: 5px;
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

.InputFields{
  padding: 1vh;
}

label{
  width: 200px;
  display: inline-block;
}

.InputFields{
  width: 100vh;
}

.form-check{
  text-align: left;
  padding-left: 3vh;
}

.loginForm form-check{
  text-align: right;
}
</style>
