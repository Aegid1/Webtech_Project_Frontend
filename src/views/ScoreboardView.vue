<!-- eslint-disable no-template-curly-in-string -->
<template>
    <head>
      <link rel= "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    </head>

      <div>
        <h1 class = "title"> Scoreboard </h1>
        <div class = "layout">
        <table v-if="group && group.length > 0" id='group'>
          Diese Zeile geht durch alle To-do's durch
          <tr v-for="user in group" :key ="user.id">
            <td> {{ user.firstname ? user.firstname : ' ' }} </td>
            <td> {{ user.score ? user.score : ' ' }} </td>
          </tr>
        </table>
        <table v-else id='group'>
          <tr class = "TODOS">
            <td> NO USERS AVAILABLE </td>
          </tr>
        </table>
        </div>
      </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'ScoreboardView',
  components: {},

  // nicht sicher ob todoList hier eine Liste oder nicht ein Objekt ist
  data () {
    return {
      group: [],
      firstname: '',
      userScore: ''

    }
  },

  methods: {

    loadScores (groupId) {
      const endpoint = 'http://localhost:8080/getGroup/' + groupId
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => { this.group = result })
        .catch(error => console.log('scores cant be loaded', error))
    }
  },
  mounted () {
    const groupId = this.$route.params.id
    this.loadScores(groupId)
  }

}
</script>

<style>

.title {
  margin-top: 5vh;
}

.layout{
  background-color: #f8efef;
  margin-left: 2.5vh;
  width: 90%;
  height: 83%;
  z-index: 10;
  border-radius: 30px 30px 30px 30px;
  box-shadow: 15px -2px 50px #00000022;
}
</style>
