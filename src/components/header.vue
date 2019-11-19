<template>
  <v-sheet
    height="500"
    class="overflow-hidden"
    style="position: relative;"
  >
  <v-toolbar
    color="purple lighten-3"
    dark
  >
    <v-container>
      <v-row>
        <v-btn
          color="pink darken-1"
          dark
          @click.stop="drawer = !drawer"
          class="hamburger-btn"
          >
          <v-icon class="burgerIcon" color="white">fas fa-hamburger</v-icon>
        </v-btn>
        <v-toolbar-title>The Boredom Challenge</v-toolbar-title>
      </v-row>
    </v-container>
</v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            <router-link to="/"></router-link>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'Log In' },
        { title: 'About', icon: 'Application' }
      ]
    }
  }
}
</script>

<style scoped>
.hamburger-btn {
    display: flex-start;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 15px;
}
.burgerIcon {margin: 0 auto;}
</style>
