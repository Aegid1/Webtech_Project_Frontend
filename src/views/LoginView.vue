<template>
  <div class="container">
    <div class="DivWrapper">
      <div class="firstDiv"></div>
      <div class="secondDiv">
        <form>
          <h1>Login into your Home</h1>
          <div class ="WrapperLoginForm">
            <div class="loginForm">
              <label for="exampleInputEmail1" class="Form-titles"><b><h2>Email Address</h2></b></label>
              <input type="email" class="InputFields" id="exampleInputEmail1" required aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="loginForm">
              <label for="exampleInputPassword1" class="Form-titles"><b><h2>Password</h2></b></label>
              <input type="password" class="InputFields" id="exampleInputPassword1" required>
            </div>
            <div class="ForgotPassword">
              <a href="http://localhost:3000/login"><b>Passwort vergessen?</b></a>
              <br>
            </div>
            <div class=Checkbox>
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">&nbsp; Check me out</label></div>
            <div class = LoginButtonDiv>
              <button type="submit" class="LoginButton" @click="navigateToHomeView()"><b>Login</b></button>
              <br>
              <br>
              <a href="http://localhost:3000/registration">Noch keinen Account? <b>Registrieren</b></a>
            </div>
          </div>
        </form>
      </div>
      <div class="thirdDiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  methods: {
    navigateToHomeView () {
      this.$router.push('/')
    }
  }
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
  padding-top: 30px;
  border-radius: 30px 30px 30px 30px;
}

.form-text{
  margin: 10px;
  text-align: left;
  text-align: left;
}

.form-check-input{
  background-color: #2c3e50;
}

.Form-titles{
}

.loginForm{
  text-align: left;
  padding-left: 20px;
}

.form-check-input{
  margin: auto;
}
.LoginButton{
  background-color: White;
  max-width: 350px;
  margin-top: 10px;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 15px 15px 15px 15px;
}

.InputFields{
  padding: 1vh;
}

.InputFields{
  width: 100vh;
  background-color: white;
  display: inline-block;
}

.ForgotPassword{
  padding-top: 10px;
  text-align: left;
  padding-left: 20px;
}
.Checkbox{
  text-align: left;
  padding-top: 3px;
  padding-left: 20px;
}
.LoginButtonDiv{
  text-align: left;
  padding-left: 20px;
  padding-bottom: 30px;
}
</style>
