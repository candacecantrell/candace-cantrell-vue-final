<template>
<div>
<v-list class="sendAct" >
        <v-list-item
          v-for="(challenge, index) in challenges"
          :key="index"
        >
          <p v-html="challenge" class="sendAct">Your Challenge: {{ challenge }}</p>
        </v-list-item>
      </v-list>
      </div>
</template>
<script>
export default {
  computed: {
    challenges () {
      console.log(this.$store.getters.sendChallenges)
      return this.$store.getters.sendChallenges.toString()
    }
    // challenges: () => this.$store.getters.sendChallenges
  }
}
</script>
<style scoped>
<style scoped>

.send {
  padding-top: -30rem;
}
</style>
