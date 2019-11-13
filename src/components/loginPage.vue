<template>
  <v-row align="center" justify="center">
<div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="cyan lighten-2"
          dark
          v-on="on"
        >
          Activity Type
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="getType"
        >
          <v-list-item-title><a>{{ item.title }}</a></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      activity: [],
      items: [
        { title: 'recreational' },
        { title: 'education' },
        { title: 'social' },
        { title: 'relaxation' },
        { title: 'cooking' },
        { title: 'music' },
        { title: 'busywork' },
        { title: 'diy' },
        { title: 'random' }
      ]
    }
  },
  methods: {
    getActivity () {
      axios.get('https://www.boredapi.com/api/activity/')
        .then(response => {
          console.log(response)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
<style scoped>
</style>
