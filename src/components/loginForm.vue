<template>
<div class="centerApp">
<v-container>
<v-card class="teal lighten-4 pa-3"
max-width="500"
>
<h1>APP TITLE</h1>
<v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="15"
            label="Username"
            required
          ></v-text-field>
            <v-text-field
            v-model="password"
            :rules="passRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
            <v-text-field
            v-model="email"
            :rules="mailRules"
            label="Email"
            required
          ></v-text-field>
          <div class="mx-auto">
          <v-btn class="teal lighten-5"
          @click="onSubmit" >Sign In</v-btn>
          </div>
          </v-form>
        </v-card>
        </v-container>
        </div>
</template>
<style scoped>
</style>
<script>
export default {
  data () {
    return {
      valid: false,
      username: '',
      password: '',
      email: '',
      nameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 8 || 'Username must be at least 8 characters'
      ],
      passRules: [
        v => !!v || 'Password is required'
      ],
      mailRules: [
        v => !!v || 'Email is required'
      ]
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      console.log(formData)
      this.$store.dispatch('userLoggedIn', {
        username: this.username,
        password: this.password,
        email: this.email
      })
    }
  }
}
</script>
