<template>
<div id="app">
  <img src='./assets/logo.png' alt='Vue logo'>
  <h1>Platzi Music</h1>
  <select v-model="selectedcountry">
    <option v-for="country in countries" :key="country.value" :value="country.value">
      {{ country.name }}
    </option>
  </select>
  <Spinner v-show="loading"/>
  <Artist v-for="artist in artists" v-bind:artist="artist" :key="artist.mbid"/>
</div>
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'España', value: 'spain' },
        { name: 'Colombia', value: 'colombia' }
      ],
      selectedcountry: 'argentina',
      loading: true
    }
  },
  methods: {
    refreshArtist () {
      const self = this
      this.artists = []
      this.loading = true
      getArtists(this.selectedcountry)
        .then(function (artists) {
          self.artists = artists
          self.loading = false
        })
    }
  },
  mounted () {
    this.refreshArtist()
  },
  components: {
    Artist,
    Spinner
  },
  watch: {
    selectedcountry () {
      this.refreshArtist()
    }
  }
}
</script>

<style>
#app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h3{margin: 40px 0 0;}

ul{
  list-style-type: none;
  padding: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{color: #42b983;}
</style>
