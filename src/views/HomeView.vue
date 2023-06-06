<template>
  <head>
    <link rel= "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  </head>
  <div class="background">
    <div class="left-side">
      <div class="left-side-container">
        <div>
          <div class = "profile-picture">
            <div class = "circle button" onClick = "exampleFunction()">
              <i class="fa fa-upload fa-2x"></i>
            </div>
          </div>
          <div class="profile-button button button::before button:hover::before button:hover button:active" onClick = "exampleFunction()">
            <i class="fa fa-user icons-left-side"></i>
            Profile
          </div>
        </div>
        <div>
          <div class="settings-button button button::before button:hover::before button:hover button:active" onClick = "exampleFunction()">
            <i class="fa fa-cog icons-left-side"></i>
            Settings
          </div>
          <div class="logout-button button button::before button:hover::before button:hover button:active" onClick = "exampleFunction()">
            <i class="gg-log-out icons-left-side" style="margin-right: 18%;"></i>
            Logout
          </div>
        </div>
      </div>
    </div>
    <div class="main-part">
      <div class = "to-do-header">
        <span>
          <h1>TO DO's </h1>
        </span>
      </div>
      <div class = to-do-body>
        <div class = TODO>
          <span class = TODO_name>
            Wäsche waschen gehen
          </span>
          <span class = TODO_date>
            12.03.2022
          </span>
          <i class="fas fa-edit fa-lg edit-button edit-button i"></i>
          <i class="fas fa-trash fa-lg edit-button edit-button i" ></i>
          <i class="fa fa-check-circle fa-lg edit-button edit-button i"></i>
        </div>
        <div class = TODO>
          <input class = "input" placeholder="TODO Name">
          <input class = "input" placeholder="Date">
          <i class="fa fa-plus fa-lg edit-button edit-button i todo_add_button"></i>
        </div>
      </div>
    </div>
    <div class="right-side">

    </div>
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
.TODO{
  display: grid;
  margin-top: 3%;
  margin-left: 1%;
  grid-template-columns: 5fr 3fr 0.20fr 0.20fr 0.20fr;
  padding: 1%;
  grid-gap: 1%;

}
.TODO_name{
  font-weight: bold;
  font-size: 125%;
  text-align: left;
  color: rgb(0, 0, 0);

}

.TODO_date{
  margin-left: 5%;
  font-weight: bold;
  font-size: 125%;
  color: rgb(0, 0, 0);

}

.input{
  border: none;
  /* border-bottom: 2px solid rgb(67, 65, 65); */
  background-color: #00000000;
  padding: 2.5%;
  border-radius:10px;
  box-shadow:0 0 15px 0px rgba(0,0,0,0.06);
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
  position:static;
  display: grid;
  background-color: #20c9c1;
  float: left;
  width: 20%;
  height: 100vh;
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
  display: grid;
  grid-template-rows: 20% 80%;
  height: 100vh;
}

.to-do-header{
  grid-row-end: auto;
  display: inline-grid;
  z-index: 2;
  margin-right: 75%;
  margin-top: 8%;
}

.to-do-body{
  background-color: #0000000d;
  width: 133vh;
  height: 75vh;
  float: left;
  z-index: 1;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 15px -2px 50px rgb(210, 212, 213);
  /* display: grid; */
  /* grid-template-rows: 20% 80%; */
  /* height: 50vh; */
  margin-right: 0%;
  margin-left: 5%
}
.todo_add_button{
  margin-top: 20%;
}
.content {
  z-index: 1;
}

.left-side-container {
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100vh;
}

.profile-button{
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  z-index: 1;
  margin-top: 5%;
}
.settings-button,
.logout-button,
.to-do-button,
.edit-button {
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  z-index: 1;
}

.settings-button i,
.logout-button i,
.profile-button i,
.edit-button i {
  margin-right: 10%;
  z-index: 1;
}
.to_do{
  margin-top: 1%;
  margin-left: 1%;
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

.to_do::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50%;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(173, 165, 165);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.to_do:hover {
  color: #212121;
  scale: 0.98;
}

.to_do:hover::before {
  scale: 3;
}

.to_do:active {
  scale: 0.98;
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
