<template>
    <v-app>
    <v-content>
    <Header></Header>
    <loginForm></loginForm>
    </v-content>
    </v-app>
</template>

<script>
import Header from './components/header.vue'
import loginForm from './components/loginForm.vue'

export default {
  name: 'App',
  components: {
    Header,
    loginForm
  },
  created: function () {
    //`this` points to the vm instance
    //let vm = this
      fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  },
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/people').then(response => {
        vm.people = response.data.results
      }).catch(error => {throw error})
    }
  }
}
</script>

<style scoped>

</style>
