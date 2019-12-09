<template>
  <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Saved List</v-card-title>
          </v-card>
        </v-col>

        <v-col
          cols="12"
        >
          <v-card
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.newShows }}</v-card-title>

                <v-card-subtitle></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
      newShow: '',
      newShows: this.$store.getters.saveList.sendShow
    }
  },
  computed: {
    showWatchList () {
      const savedShows = this.$store.getters.saveList
      return savedShows
    }
  },
  methods: {
    displayNewShows () {
      console.log(this.newShows)
      this.items.title = this.newShow
      console.log(this.newShow)
    }
  },
  created: function () {
    this.displayNewShows()
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
