<template>
<div class="centerApp">
<v-container>
<v-card class="teal lighten-4 pa-3"
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
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last Name"
            required
          ></v-text-field>
            <v-text-field
            v-model="email"
            :rules="mailRules"
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
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  })
}
</script>
