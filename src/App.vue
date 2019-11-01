<template>
    <v-app>
    <v-content>
    <Header></Header>
    <div class="appContent">
    <router-view></router-view>
    </div>
    </v-content>
    </v-app>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  created: function () {
    // `this` points to the vm instance
    // let vm = this
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  }
}

</script>

<style scoped>
.appContent {
  margin-top: -400px;
}
</style>
