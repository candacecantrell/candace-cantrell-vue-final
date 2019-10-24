<template>
<v-card class="d-flex justify-sm-center">
 <v-col
          cols="12"
        >
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
        </v-col>
        </v-card>
</template>
<style scoped>
</style>
<script>
</script>
