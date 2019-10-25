<template>
<div>
<v-container class="pa-6">
<v-card class="d-flex flex-column sm-10 md-6 lg-6 justify-space-around pa-6 teal lighten-4"
max-width="500"
>
<h1>APP TITLE</h1>
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
            :rules="nameRules"
            :counter="10"
            label="Email"
            required
          ></v-text-field>
          <div class="mx-auto">
          <v-btn class="teal lighten-5">Sign In</v-btn>
          </div>
        </v-card>
        </v-container>
        </div>
</template>
<style scoped>
.backColor {
  position: fixed;
  margin-top: 0;
  height:100%;
  width: 100%;

}
</style>
<script>
</script>
