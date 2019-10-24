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
  components: {
    Header,
    loginForm
  }
}
</script>

<style scoped>

</style>
