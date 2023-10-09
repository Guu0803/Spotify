<template>
  <div class="window-app">
    <div class="header">
      <div class="home">
        <span class="material-symbols-sharp house">
          home
        </span>
        <span class="material-symbols-sharp house" v-if="home">
          home
        </span>
        <span class="material-symbols-sharp search">
          search
        </span>
      </div>
      <div class="nav-menu">
        <img src="@/assets/biblioteca.png" class="library">
        <img src="@/assets/biblioteca-cheia.png" class="library" v-if="library">
        <img src="@/assets/musicas-curtidas.png" class="nav-img" v-on:click="toMusicasCurtidas()">
        <img src="@/assets/episodios.png" class="nav-img">
        <img src="@/assets/descobertas.png" class="nav-img" v-on:click="toDescobertas()">
        <img src="@/assets/country.png" class="nav-img" v-on:click="toCountry()">
        <img src="@/assets/indie.png" class="nav-img" v-on:click="toIndieVibration()">
        <img src="@/assets/nothing.png" class="nav-img" v-on:click="toNothing()">
        <img src="@/assets/session.png" class="nav-img" v-on:click="toSessions()">
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
          <img src="@/assets/album-teste.png" class="img-info">
        </div>
        <div class="artist-container">
          <div>
            <div class="song">
              Heartstrings
            </div>
            <div class="artist">
              Jacob Lee
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
          <img src="@/assets/sobre-artista.png" class="about-banner">
        </div>
        <div class="name">
          Jacob Lee
        </div>
        <div class="listeners">
          391.271 ouvintes mensais
          <div class="follow">
            Seguir
          </div>
        </div>
        <div class="description">
          Traduzido do inglês-Jacob Lee Christian Blowes, que atua como Jacob Lee, é um pop australiano, cantor e
          compositor de Gold Coast, Queensland. Em maio-junho de 2014, ele participou da terceira série australiana do The
          Voice e foi treinado por Will.i.am.
        </div>
      </div>
    </div>
    <div class="reproduction-container">
      <div class="artist-reproduction">
        <div>
          <img src="@/assets/album-teste.png" class="thumb-album">
        </div>
        <div class="reproduction">
          <div class="reproduction-name">
            Heartstrings
          </div>
          <div class="reproduction-artist">
            Jacob Lee
          </div>
        </div>
        <span class="material-symbols-sharp like">
          favorite
        </span>
      </div>

      <div class="reproduction-options">
        <div>
          <img src="@/assets/aleatorio.png" class="playback-icon">
          <img src="@/assets/aleatorio-verde.png" class="playback-icon" v-if="random">
          <span class="material-symbols-sharp skip">
            skip_previous
          </span>
          <span class="material-icons play">
            play_arrow
          </span>
          <span class="material-icons play" v-if="pause == false">
            pause
          </span>
          <span class="material-symbols-sharp skip">
            skip_next
          </span>
          <img src="@/assets/repetir.png" class="playback-icon">
          <img src="@/assets/repetir-verde.png" class="playback-icon" v-if="loop">
        </div>
        <div>
          <input type="range" class="progress">
        </div>

      </div>

      <div class="reproduction-configs">
        <span class="material-symbols-sharp configs-icon">
          slideshow
        </span>
        <img src="@/assets/microfone.png" class="microfone">
        <img src="@/assets/microfone-verde.png" v-if="letter" class="microfone">
        <span class="material-symbols-sharp configs-icon">
          queue_music
        </span>
        <span class="material-symbols-sharp configs-icon">
          devices
        </span>
        <span class="material-symbols-sharp configs-icon">
          no_sound
        </span>
        <span class="material-symbols-sharp configs-icon">
          volume_down
        </span>
        <span class="material-symbols-sharp configs-icon">
          volume_up
        </span>
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

    }
  },
  methods: {
    // progresso() {
    //   const progress = document.querySelector('.progress');
    //   progress.addEventListener('input', function () {
    //     const value = this.value;
    //     this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
    //   })
    // }
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
    }
  }
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
  padding: 2vh 2vh 0 2vh;
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
  height: 67.2vh;
  gap: 1vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1vh;
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
  margin-left: 1.3vh;
  cursor: pointer;
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
  width: 99%;
  background-color: var(--background);
  bottom: 0;
  padding-bottom: 2vh;
}

.thumb-album {
  height: 9vh;
  border-radius: 5px;
}

.artist-reproduction {
  display: flex;
  align-items: center;
  color: var(--font-color-hover);
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
  -webkit-appearance: none;
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
  background: #000;

}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #a7a7a750;

}
</style>


