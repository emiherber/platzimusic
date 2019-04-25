<template>
  <header class="section hero is-primary">
    <nav class="level hero-head">
      <div class="level-left">
        <div class="level-item">
          <strong>📻 Platzi Music</strong>
        </div>
      </div>
      <div class="level-right">
        <router-link class="level-item" to="/">Buscar</router-link>
        <router-link class="level-item" to="about">Nosotros</router-link>
      </div>
    </nav>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que están Vue-nísimas</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </header>
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: {
    PmPlayer
  }
}
</script>
