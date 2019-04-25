<template>
  <div id="main">
    <transition name="move">
      <pm-notification v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
      </pm-notification>
    </transition>
    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="field has-addons container">
          <div class="control is-expanded">
            <input
              type="text"
              v-model="searchQuery"
              class="input is-large"
              placeholder="Buscar cancion"
              @keyup.enter="search"
            >
          </div>
          <div class="control">
            <a @click="search" class="button is-info is-large">Buscar</a>
          </div>
        </div>
      </nav>
      <div class="container">
        <p>
          <small>{{searchMessage}}</small>
        </p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" :key="t.id">
            <pm-track
              :class="{'is-active':t.id === selectedTrack}"
              :track="t"
              v-on:select="setSelectedTrack"
              v-blur="t.preview_url"
            ></pm-track>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tracksService from "@/services/track";

import PmTrack from "./Track.vue";

import PmLoader from "./shared/Loader.vue";
import PmNotification from "./shared/Notification.vue";
import { setTimeout } from "timers";

export default {
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotification: false
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;

      tracksService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
