<template>
<v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Save New Shows</v-card-title>
          </v-card>
        </v-col>

        <v-col
          cols="12"
        >
          <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary }}</v-card-text>
                <v-btn @click="save1()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
                    <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title2 }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre2" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary2 }}</v-card-text>
                <v-btn @click="save2()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
                              <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title3 }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre3" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary3 }}</v-card-text>
                <v-btn @click="save3()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
                              <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title4 }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre4" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary4 }}</v-card-text>
                <v-btn @click="save4()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
                              <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title5 }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre5" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary5 }}</v-card-text>
                <v-btn @click="save5()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
                              <v-card
            color='deep-purple lighten-4'
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{ this.title6 }}</v-card-title>

                <v-card-subtitle v-for="(genre, i) in this.showGenre6" :key="i" >{{ genre }}</v-card-subtitle>
                <v-card-text>{{ this.showSummary6 }}</v-card-text>
                <v-btn @click="save6()" >save</v-btn>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: ['show'],
  data () {
    return {
      title: '',
      newShow: '',
      showSummary: '',
      showGenre: [],
      title2: '',
      newShow2: '',
      showSummary2: '',
      showGenre2: [],
      title3: '',
      newShow3: '',
      showSummary3: '',
      showGenre3: [],
      title4: '',
      newShow4: '',
      showSummary4: '',
      showGenre4: [],
      title5: '',
      newShow5: '',
      showSummary5: '',
      showGenre5: [],
      title6: '',
      newShow6: '',
      showSummary6: '',
      showGenre6: []
    }
  },
  methods: {
    getDrama () {
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=girls')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow = objectsToArray
          this.title = response.data.name
          this.showGenre = response.data.genres
          const newSummary = response.data.summary
          this.showSummary = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=vikings')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow2 = objectsToArray
          this.title2 = response.data.name
          this.showGenre2 = response.data.genres
          const newSummary = response.data.summary
          this.showSummary2 = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow2)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=mr-robot')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow3 = objectsToArray
          this.title3 = response.data.name
          this.showGenre3 = response.data.genres
          const newSummary = response.data.summary
          this.showSummary3 = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow3)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=the-blacklist')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow4 = objectsToArray
          this.title4 = response.data.name
          this.showGenre4 = response.data.genres
          const newSummary = response.data.summary
          this.showSummary4 = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow4)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=watchmen')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow5 = objectsToArray
          this.title5 = response.data.name
          this.showGenre5 = response.data.genres
          const newSummary = response.data.summary
          this.showSummary5 = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow5)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=batwoman')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          // console.log(objectsToArray)
          this.newShow6 = objectsToArray
          this.title6 = response.data.name
          this.showGenre6 = response.data.genres
          const newSummary = response.data.summary
          this.showSummary6 = newSummary.replace(/<[^>]*>?/gm, '')
          // console.log(this.newShow6)
        })
        .catch(error => console.error(error))
    },
    save1 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title
      })
    },
    save2 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title2
      })
    },
    save3 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title3
      })
    },
    save4 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title4
      })
    },
    save5 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title5
      })
    },
    save6 () {
      this.$store.dispatch('storeToList', {
        sendShow: this.title6
      })
    }
  },
  created: function () {
    this.getDrama()
  }
}
</script>

<style scoped>

</style>
