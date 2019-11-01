<template>
<div class="centerApp">
<v-container>
<v-card class="teal lighten-4"
max-width="500"
>
<h1>APP TITLE</h1>
<v-form>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
            <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Last Name"
            required
          ></v-text-field>
            <v-text-field
            v-model="firstname"
            :rules="mailRules"
            :counter="10"
            label="Email"
            required
          ></v-text-field>
          <div class="mx-auto">
          <v-btn class="teal lighten-5">Sign In</v-btn>
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
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    mailRules: [
      v => !!v || 'Email is required'
    ]
  })
}
</script>
