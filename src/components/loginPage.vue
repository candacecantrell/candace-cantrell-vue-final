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
          Get Challenge
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
    <div class="send">
      <p v-html="sendActivity" class="sendAct">Your Challenge: {{ sendActivity }}</p>
      </div>
  </div>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      activities: [],
      sendActivity: '',
      items: [
        { title: 'education', clicked: 'getEd' },
        { title: 'social', clicked: 'getSoc' },
        { title: 'relaxation', clicked: 'getRel' },
        { title: 'cooking', clicked: 'getCook' },
        { title: 'music', clicked: 'getMus' },
        { title: 'busywork', clicked: 'getBusy' },
        { title: 'diy', clicked: 'getDiy' },
        { title: 'random', clicked: 'getType' }
      ]
    }
  },
  methods: {
    getType () {
      axios.get('https://www.boredapi.com/api/activity/')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          // console.log(response.data.activity)
          this.sendActivity = response.data.activity.toString()
          this.activities = response.data.activity.toString()
          console.log(this.sendActivity)
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log()
        })
    },
    getEd () {
      axios.get('https://www.boredapi.com/api/activity?type=education')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getSoc () {
      axios.get('https://www.boredapi.com/api/activity?type=social')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getRel () {
      axios.get('https://www.boredapi.com/api/activity?type=relaxation')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getCook () {
      axios.get('https://www.boredapi.com/api/activity?type=cooking')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getMus () {
      axios.get('https://www.boredapi.com/api/activity?type=music')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getBusy () {
      axios.get('https://www.boredapi.com/api/activity?type=busywork')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    },
    getDiy () {
      axios.get('https://www.boredapi.com/api/activity?type=diy')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.activities = objectsToArray
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(this.activities)
        })
    }
  }
}
</script>
<style scoped>
.sendAct {
  padding: 25rem 0 0 0
}

.send {
  padding-top: -30rem;
}
</style>
