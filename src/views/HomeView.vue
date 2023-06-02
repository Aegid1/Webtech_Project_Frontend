<template>
  <head>
    <link rel= "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </head>
  <div class="background">
    <div class="left-side">
      <div class="left-side-container">
        <div>
          <div class = "profile-picture">
            <div class = "circle button">
              <i class="fa fa-upload fa-2x"></i>
            </div>
          </div>
          <div class="profile-button button button::before button:hover::before button:hover button:active">
            <i class="fa fa-user icons-left-side"></i>
            Profile
          </div>
        </div>
        <div>
          <div class="settings-button button button::before button:hover::before button:hover button:active">
            <i class="fa fa-cog icons-left-side"></i>
            Settings
          </div>
          <div class="logout-button button button::before button:hover::before button:hover button:active">
            <i class="gg-log-out icons-left-side" style="margin-right: 18%;"></i>
            Logout
          </div>
        </div>
      </div>
    </div>
    <div class="main-part"></div>
      <div>

      </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {}
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
  background-color: #f8efef;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.left-side {
  display: grid;
  grid-template-rows: 2ch auto minmax(10px, 60px);
  grid-gap: 20px;
  background-color: #20c9c1;
  width: 10%;
  height: 100vh;
  float: left;
  z-index: 1;
  border-radius: 0px 30px 0px 0px;
  box-shadow: 15px -20px 10px rgb(221, 227, 228);
  right: 20px;
}

.right-side {
  display: grid;
  background-color: #20c9c1;
  width: 20%;
  height: 100vh;
  float: left;
  z-index: 0;
  border-radius: 30px 0px 0px 0px;
  box-shadow: -15px 2px 10px rgb(221, 227, 228)
}

.profile-picture{
  position: relative;
  display: inline-block;
}

.main-part {
  background-color: #f8efef;
  width: 70%;
  height: 100vh;
  float: left;
  z-index: 0;
  box-shadow: 15px -2px 10px rgb(221, 227, 228) inset;
}

.content {
  z-index: 1;
}

.left-side-container {
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100vh;
}

.settings-button,
.logout-button,
.profile-button {
  display: flex;
  align-items: center;
  padding: 20px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  z-index: 1;
}

.settings-button i,
.logout-button i,
.profile-button i {
  margin-right: 10%;
  z-index: 1;
}

.button {
  cursor: pointer;
  position: relative;
  padding: 10px 10px;
  font-size: 18px;
  color: rgb(0, 0, 0);
  border-radius: 20px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(253, 253, 253);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 0.95;
}

.button:active {
  scale: 0.95;
}

.icons-left-side {
  margin-left: 10%;
}

.gg-log-out {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 6px;
 height: 16px;
 border: 2px solid;
 transform: scale(var(--ggs,1.3));
 border-right: 0;
 border-top-left-radius: 2px;
 border-bottom-left-radius: 2px;
 margin-right: 10%;
}

.gg-log-out::after,
.gg-log-out::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
}

.gg-log-out::after {
 border-top: 2px solid;
 border-left: 2px solid;
 transform: rotate(-45deg);
 width: 8px;
 height: 8px;
 left: 4px;
 bottom: 2px
}

.gg-log-out::before {
 border-radius: 3px;
 width: 10px;
 height: 2px;
 background: currentColor;
 left: 5px;
 bottom: 5px
}

.circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  border-color: black;
  border:10px;
}

</style>
