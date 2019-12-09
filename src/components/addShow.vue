<template>
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ showList.showTitle }} </h3>
                <div>
                    {{ showList.showGenre }}
                </div>
                <span> {{ showList.showSummary }} </span>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn>Choose</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
  props: ['show'],
  data () {
    return {
      showList: [
        {
          showTitle: '',
          newShow: '',
          showSummary: '',
          showGenre: []
          // showPhoto: ''
        },
        {
          showTitle: '',
          newShow: '',
          showSummary: '',
          showGenre: []
          // showPhoto: ''
        }
      ]
      // activities: [],
      // sendActivity: ''
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
          console.log(objectsToArray)
          this.showList.newShow = objectsToArray
          this.showList.showTitle = response.data.name
          this.showList.showGenre = response.data.genres
          const newSummary = response.data.summary
          this.showList.showSummary = newSummary.replace(/<[^>]*>?/gm, '')
          console.log(this.showList)
        })
      axios.get('http://api.tvmaze.com/singlesearch/shows?q=vikings')
        .then(response => {
          const allActivitiesObj = response
          const objectsToArray = Object.entries(allActivitiesObj).map(e =>
            Object.assign(e[1], { key: e[0] })
          )
          console.log(objectsToArray)
          this.showList.newShow = objectsToArray
          this.showList.showTitle = response.data.name
          this.showList.showGenre = response.data.genres
          const newSummary = response.data.summary
          this.showList.showSummary = newSummary.replace(/<[^>]*>?/gm, '')
          console.log(this.showList)
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.getDrama()
  }
}
</script>

<style scoped>

</style>
