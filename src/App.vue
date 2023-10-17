<template>
  <div class="window-app">
    <div class="header">
      <div class="home">
        <span class="material-symbols-sharp house" v-on:click="toHome()">
          home
        </span>
        <span class="material-symbols-sharp search">
          search
        </span>
      </div>
      <div class="nav-menu">
        <img src="@/assets/biblioteca.png" class="library">
        <div>
          <img src="@/assets/musicas-curtidas.png" class="nav-img" v-on:click="toMusicasCurtidas()">
          <img src="@/assets/episodios.png" class="nav-img" v-on:click="toSeusEpisodios()">
          <img src="@/assets/descobertas.png" class="nav-img" v-on:click="toDescobertas()">
          <img src="@/assets/country.png" class="nav-img" v-on:click="toCountry()">
          <img src="@/assets/indie.png" class="nav-img" v-on:click="toIndieVibration()">
          <img src="@/assets/nothing.png" class="nav-img" v-on:click="toNothing()">
          <img src="@/assets/session.png" class="nav-img" v-on:click="toSessions()">
        </div>
      </div>
    </div>
    <div class="nav-btn">
      <div class="btn">
        <span class="material-symbols-sharp previous" v-on:click="goBack()">
          chevron_left
        </span>
        <span class="material-symbols-sharp next">
          chevron_right
        </span>
      </div>
      <div class="user-btn">
        <span class="material-symbols-sharp notification">
          notifications
        </span>
        <span class="material-symbols-sharp group">
          groups
        </span>
        <img src="@/assets/img-user.png" class="img-user">
      </div>
    </div>

    <router-view class="page-body" />

    <div class="footer">
      <div class="title-container">
        <div class="title">
          Nome da Playlist
        </div>
        <span class="material-symbols-sharp close">
          close
        </span>
      </div>
      <div class="music-container">
        <div class="album">
          <img :src="music.albumCover" class="img-info">
        </div>
        <div class="artist-container">
          <div>
            <div class="song">
              {{ music.name }}
            </div>
            <div class="artist">
              {{ music.artist }}
            </div>
          </div>
          <div class="like-container">
            <span class="material-symbols-sharp like">
              favorite
            </span>
            <span class="material-symbols-sharp like">
              more_horiz
            </span>
          </div>
        </div>
      </div>
      <div class="about-the-artist">
        <div class="artist-banner">
          <img :src="music.about.cover" class="about-banner">
        </div>
        <div class="name">
          {{ music.artist }}
        </div>
        <div class="listeners">
          {{music.about.listeners}} ouvintes mensais
          <div class="follow" v-on:click="following()">
            <div v-if="follow">
              Seguindo
            </div>
            <div v-else>
              Seguir
            </div>
          </div>
        </div>
        <div class="description">
        {{ music.about.info }}
        </div>
      </div>
    </div>
    <div class="reproduction-container">
      <div class="artist-reproduction">
        <div>
          <img :src="music.albumCover" class="thumb-album">
        </div>
        <div class="reproduction">
          <div class="reproduction-name">
            {{ music.name }}
          </div>
          <div class="reproduction-artist">
            {{ music.artist }}
          </div>
        </div>
        <div v-on:click="liked()">
          <span class="material-icons liked" v-if="like">
            favorite
          </span>
          <span class="material-symbols-sharp like" v-else>
            favorite
          </span>
        </div>
      </div>

      <div class="reproduction-options">
        <div>
          <div v-on:click="randomBtn()">
            <img src="@/assets/aleatorio-verde.png" class="playback-icon" v-if="random">
            <img src="@/assets/aleatorio.png" class="playback-icon" v-else>
          </div>
          <span class="material-symbols-sharp skip">
            skip_previous
          </span>
          <div v-on:click="playMusic()">
            <span class="material-icons play" v-if="pause">
              pause
            </span>
            <span class="material-icons play" v-else>
              play_arrow
            </span>
          </div>
          <span class="material-symbols-sharp skip">
            skip_next
          </span>
          <div v-on:click="loopOn()">
            <img src="@/assets/repetir-verde.png" class="playback-icon" v-if="loop">
            <img src="@/assets/repetir.png" class="playback-icon" v-else>
          </div>
        </div>
        <div class="music-progress">
          0:00
          <input type="range" class="progress">
          {{ music.duration }}
        </div>
      </div>

      <div class="reproduction-configs">
        <div v-on:click="slide()">
          <span class="material-symbols-sharp configs-icon-green" v-if="slideShow">
            slideshow
          </span>
          <span class="material-symbols-sharp configs-icon" v-else>
            slideshow
          </span>
        </div>
        <div v-on:click="letterOn()">
          <img src="@/assets/microfone-verde.png" v-if="letter" class="microfone">
          <img src="@/assets/microfone.png" class="microfone" v-else>
        </div>
        <div v-on:click="queueOn()">
          <span class="material-symbols-sharp configs-icon-green" v-if="queue">
            queue_music
          </span>
          <span class="material-symbols-sharp configs-icon" v-else>
            queue_music
          </span>
        </div>
        <div v-on:click="devicesOn()">
          <span class="material-symbols-sharp configs-icon-green" v-if="devices">
            devices
          </span>
          <span class="material-symbols-sharp configs-icon" v-else>
            devices
          </span>
        </div>
        <div v-on:click="muteAll">
          <span class="material-symbols-sharp configs-icon" v-if="mute">
            no_sound
          </span>
          <span class="material-symbols-sharp configs-icon" v-else>
            volume_up
          </span>
        </div>
        <div class="volume">
          <input type="range">
        </div>
        <span class="material-symbols-sharp fullscreen">
          open_in_full
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      follow: false,
      like: false,
      random: false,
      pause: false,
      loop: false,
      slideShow: false,
      letter: false,
      queue: false,
      devices: false,
      mute: false
    }
  },
  methods: {
    muteAll() {
      if (this.mute == false) {
        this.mute = true
      } else {
        this.mute = false
      }
    },
    devicesOn() {
      if (this.devices == false) {
        this.devices = true
      } else {
        this.devices = false
      }
    },
    queueOn() {
      if (this.queue == false) {
        this.queue = true
      } else {
        this.queue = false
      }
    },
    letterOn() {
      if (this.letter == false) {
        this.letter = true
      } else {
        this.letter = false
      }
    },
    slide() {
      if (this.slideShow == false) {
        this.slideShow = true
      } else {
        this.slideShow = false
      }
    },
    loopOn() {
      if (this.loop == false) {
        this.loop = true
      } else {
        this.loop = false
      }
    },
    following() {
      if (this.follow == false) {
        this.follow = true
      } else {
        this.follow = false
      }
    },
    liked() {
      if (this.like == false) {
        this.like = true
      } else {
        this.like = false
      }
    },
    randomBtn() {
      if (this.random == false) {
        this.random = true
      } else {
        this.random = false
      }
    },
    playMusic() {
      if (this.pause == false) {
        this.pause = true
      } else {
        this.pause = false
      }
    },
    goBack() {
      this.$router.go(-1)
    },
    toMusicasCurtidas() {
      this.$router.push('/musicas-curtidas')
    },
    toDescobertas() {
      this.$router.push('/descobertas-da-semana')
    },
    toCountry() {
      this.$router.push('/country')
    },
    toNothing() {
      this.$router.push('/this-is-nothing-but-thieves')
    },
    toIndieVibration() {
      this.$router.push('/indie-vibration')
    }, toSessions() {
      this.$router.push('/sessions')
    },
    toSeusEpisodios() {
      this.$router.push('/seus-episodios')
    },
    toHome() {
      this.$router.push('/')
    }
  },
  computed: {
    music() {
      return this.$store.state.musicNow
    }
  },
}

</script>
<style>
body {
  background-color: var(--background);
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

:root {
  --green: #1ed760;
  --font-color: #a7a7a7;
  --font-color-hover: #fff;
  --div-background: #121212;
  --div-background-2: #1a1a1a;
  --background-highlight: #242424;
  --background: #000;
  --background-hover: hsla(0, 0%, 100%, .07);
}

.window-app {
  display: flex;
  gap: 1vw;
  padding: 2vh;
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  overflow-y: hidden;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  box-sizing: border-box;
  height: 84vh;
}

.home,
.nav-menu {
  display: flex;
  width: 5vw;
  flex-direction: column;
  color: var(--font-color);
  background-color: var(--div-background);
  border-radius: 10px;
  align-items: center;
}

.home {
  gap: 2vh;
  padding: 2vh 1vh;
}

.nav-menu {
  height: 64vh;
  gap: 1vh;
  padding: 1vh;
}
.nav-menu>div{
  overflow-y: scroll;
  overflow-x: hidden;
}

.nav-img {
  border-radius: 5px;
  height: 8vh;
  padding: 1vh;
  cursor: pointer;
}

.nav-img:hover {
  background-color: hsla(0, 0%, 100%, .07);
}

.house,
.search {
  font-size: 2em;
  text-align: center;
  cursor: pointer;
}

.house:hover,
.search:hover {
  color: #fff;
}

.library {
  width: 6vh;
  height: 7vh;
  margin-left: -0.5vh;
  cursor: pointer;
  padding: 3px 0;
}


.nav-btn {
  display: flex;
  color: var(--font-color);
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 57.5vw;
  margin: 1vw 0;
  left: 9vw;
  box-sizing: border-box;
  z-index: 2;
}

.btn {
  display: flex;
  gap: 1vw;
  height: 5vh;
  align-items: center;
}

.next,
.previous {
  background-color: #00000050;
  border-radius: 50%;
  font-size: 2.1em;
  cursor: pointer;
}

.next:hover,
.previous:hover {
  color: var(--font-color-hover);
}

.user-btn {
  display: flex;
  gap: 1vw;
  align-items: center;
}

.img-user,
.notification,
.group {
  height: 4vh;
  background-color: #000;
  border-radius: 50%;
  padding: 0.4vh;
  cursor: pointer;
}

.group {
  width: 3.8vh;
}

.group:hover,
.notification:hover {
  color: var(--font-color-hover);
}

.img-user:hover {
  scale: 1.1;
}

.page-body {
  width: 66vw;
  height: 84vh;
  border-radius: 10px;
  background-color: var(--div-background);
  overflow-y: overlay;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.footer {
  background-color: var(--div-background);
  padding: 3vh 1vw;
  color: var(--font-color);
  width: 30vw;
  height: 78vh;
  overflow-x: hidden;
  overflow-y: overlay;
  border-radius: 10px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--font-color-hover);
  cursor: pointer;
}

.title:hover,
.song:hover {
  text-decoration: underline 2px;
}

.close {
  font-weight: 400;
  color: var(--font-color);
  cursor: pointer;
}

.close:hover {
  color: var(--font-color-hover);
}

.img-info {
  width: 100%;
  margin: 2vh 0;
  cursor: pointer;
}

.artist-container {
  display: flex;
  justify-content: space-between;
}

.artist-container>div {
  font-weight: 600;
}

.like-container {
  display: flex;
  gap: 1vw;
}

.song {
  font-weight: 800;
  color: var(--font-color-hover);
  font-size: 1.4em;
  cursor: pointer;
  margin-bottom: 1vh;
}

.artist:hover {
  text-decoration: underline 2px;
  cursor: pointer;
}

.about-the-artist {
  background-color: var(--div-background-2);
  border-radius: 10px;
  margin-top: 3vh;
}

.name {
  font-weight: 800;
  color: var(--font-color-hover);
  font-size: 1.1em;
  margin-left: 2vw;
  cursor: pointer;
}

.name:hover {
  text-decoration: underline 2px;
}

.about-banner {
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin-bottom: 2vh;
}

.listeners {
  font-weight: 600;
  display: flex;
  gap: 1vw;
  justify-content: space-between;
  align-items: center;
  margin: 1vh 0 2vh 2vw;
}

.follow {
  border: 1px solid var(--font-color);
  padding: 1vh 1vw;
  border-radius: 20px;
  color: var(--font-color-hover);
  margin-right: 2vw;
  font-size: 0.9em;
  cursor: pointer;
  width: 5vw;
  text-align: center;
}

.follow:hover {
  scale: 1.1;
}

.description {
  padding: 1vw;
  font-size: 0.9em;
  font-weight: 600;
}

.reproduction-container {
  position: absolute;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 10vh;
  width: 97%;
  background-color: var(--background);
  bottom: 2vh;
}

.music-progress {
  display: flex;
  align-items: center;
  font-size: 0.7em;
  font-weight: 500;
}

.thumb-album {
  height: 8vh;
  border-radius: 5px;
}

.artist-reproduction {
  display: flex;
  align-items: center;
  color: var(--font-color-hover);
  width: 25vw;
}

.reproduction {
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  margin: 0 1vw;
}

.reproduction-name {
  font-weight: 600;
  font-size: 0.9em;
}

.reproduction-artist {
  color: var(--font-color);
  font-size: 0.7em;
}

.like {
  font-weight: 400;
  color: var(--font-color);
  cursor: pointer;
  height: fit-content;
}

.liked {
  font-weight: 300;
  color: var(--green);
  cursor: pointer;
}

.reproduction>div:hover {
  text-decoration: underline 2px;
  cursor: pointer;
}

.like:hover {
  color: var(--font-color-hover);
}

.reproduction-options {
  display: flex;
  flex-direction: column;
  color: var(--font-color);
  gap: 1vh;
  justify-content: center;
}

.reproduction-options>div {
  width: 35vw;
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
}

input[type=range] {
  appearance: none;
  margin: 1vh 0;
  width: 100%;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.6vh;
  cursor: pointer;
  background: #a7a7a7;
  border-radius: 20px;
}

input[type=range]::-webkit-slider-thumb {
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
}

input[type=range]:hover::-webkit-slider-thumb {
  height: 2vh;
  width: 2vh;
  margin-top: -0.6vh;
  background: #fff;
  transition: ease-in-out;
}

input[type=range]:hover::-webkit-slider-runnable-track {
  background: #1ED760;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: red;
  border-radius: 1px;
  border: 0px solid #000000;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #1ED760;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}

input[type=range]::-ms-fill-upper {
  background: #1ED760;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}

input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #1ED760;
}

input[type=range]:focus::-ms-fill-upper {
  background: #1ED760;
}

.playback-icon {
  height: 3vh;
  cursor: pointer;
}

.play {
  font-size: 1.5em;
  background-color: #fff;
  padding: 1vh;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
}

.play:hover {
  scale: 1.1;
}

.skip {
  font-size: 2em;
  color: var(--font-color);
  cursor: pointer;
  font-weight: 300;
  padding-bottom: 5px;
}

.skip:hover {
  color: var(--font-color-hover);
}

.reproduction-configs {
  color: var(--font-color);
  display: flex;
  gap: 1vw;
  align-items: center;
  margin-right: 1vw;
}

.configs-icon-green {
  color: var(--green);
  cursor: pointer;
}

.configs-icon:hover,
.fullscreen:hover {
  cursor: pointer;
  color: var(--font-color-hover);
}

.microfone {
  cursor: pointer;
}

.fullscreen {
  font-size: 1.2em;
}

.volume {
  width: 10vw;
  margin-bottom: 0.5vh;
}

::-webkit-scrollbar {
  appearance: none;
  scroll-behavior: smooth;
  width: 10px;
  background: transparent;

}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #a7a7a750;

}
</style>


