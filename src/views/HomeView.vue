<template>
  <div class = "background">
    <div class = "left-side"></div>
    <div class = "right-side"></div>
  </div>

  <div class = "content">
    <div class = "left-side">
      <div class = "settings-button" alt = "settings button">
        <img class = "settings-icon" alt = "settings icon" src = "../assets/settings.png">
        <div class = "button-text">Settings</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    position: relative;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .left-side {
    background-color: #20c9c1;
    width: 15%;
    height: 100vh;
    float: left;
  }
  .right-side {
    background-color: #f8efef;
    width: 85%;
    height: 100vh;
    float: left;
  }
  .content {
    z-index: 1;
  }
  .settings-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .settings-icon {
    position: relative;
    display: flex;
    margin-right: 5px;
    /* left: 2.2%; */
    width: 40px;
    height: 40px;
    z-index: 1;
  }
  .button-text {
    position: relative;
    margin-left: 10px;
    font-weight: bold;
  }
</style>
