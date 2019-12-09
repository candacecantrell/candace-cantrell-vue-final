<template>
 <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
    <div class="displayNew">
      <p>{{ this.newChallenges }}</p>
  </div>
      <div class="my-2">
        <v-btn small
        @click="startChallenge"
        >Start This Challenge</v-btn>
      </div>
      <div class="my-2">
        <v-btn small>Challenge Completed!</v-btn>
      </div>
       </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      newChallenges: this.$store.getters.sendChallenges
    }
  },
  computed: {
    challenges () {
      const challenge = this.$store.getters.sendChallenges
      return challenge
    }
  },
  methods: {
  }
}
</script>
<style scoped>
<style scoped>
.sendAct {
    padding-top: 0rem
}
.displayNew {
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-top: -5rem;
  padding: 30rem 0 5rem 0;
}
</style>
