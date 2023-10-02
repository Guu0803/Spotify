<template>
  <div class="window">
    <div class="header">
      <div class="home">
        <span class="material-symbols-sharp house">
          home
        </span>
        <span class="material-symbols-sharp search">
          search
        </span>
      </div>
      <div class="nav-menu">
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"
          class="Svg-sc-ytk21e-0 haNxPq library">
          <path
            d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
          </path>
        </svg>

        <img src="@/assets/musicas-curtidas.png" class="nav-img">
        <img src="@/assets/episodios.png" class="nav-img">
        <img src="@/assets/descobertas.png" class="nav-img">
        <img src="@/assets/country.png" class="nav-img">
        <img src="@/assets/indie.png" class="nav-img">
        <img src="@/assets/nothing.png" class="nav-img">
        <img src="@/assets/session.png" class="nav-img">
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
            <div>
              Jacob Lee
            </div>
          </div>
          <div class="like-container">
            <span class="material-symbols-sharp">
              favorite
            </span>
            <span class="material-symbols-sharp">
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
          Voice e foi treinado por will.i.am.
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
            <span class="material-symbols-sharp">
              favorite
            </span>
          </div>
        </div>

        <div class="reproduction-options">
          <img src="@/assets/microfone.png">
          <img src="@/assets/microfone-verde.png">
          <img src="@/assets/aleatorio.png">
          <img src="@/assets/aleatorio-verde.png">
          <img src="@/assets/repetir.png">
          <img src="@/assets/repetir-verde.png">

          <span class="material-symbols-sharp">
            skip_previous
          </span>
          <span class="material-symbols-sharp">
            skip_next
          </span>
          <span class="material-icons">
            play_arrow
          </span>
          <span class="material-icons">
            pause
          </span>
        </div>

        <div class="reproduction-configs">
          <span class="material-symbols-sharp">
            queue_music
          </span>
          <span class="material-symbols-sharp">
            slideshow
          </span>
          <span class="material-symbols-sharp">
            devices
          </span>
          <span class="material-symbols-sharp">
            volume_down
          </span>
          <span class="material-symbols-sharp">
            volume_up
          </span>
          <span class="material-symbols-sharp">
            no_sound
          </span>
          <span class="material-symbols-sharp">
            open_in_full
          </span>
        </div>
      </div>
  </div>
</template>
<script>


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
  --div-background-2: #242424;
  --background-highlight: #1a1a1a;
  --background: #000;
  --background-hover: hsla(0, 0%, 100%, .07);
}

.window {
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
  width: 5vw;  
}

.home,
.nav-menu {
  display: flex;
  width: 5vw;
  flex-direction: column;
  gap: 1vh;
  color: var(--font-color);
  background-color: var(--div-background);
  padding: 1vh;
  border-radius: 10px;
}
.nav-menu{
  height: 61vh;
  overflow-y: scroll;

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

.material-symbols-sharp {
  font-variation-settings:
    FILL 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}

svg {
  fill: var(--font-color);
  cursor: pointer;
  margin: 1vh 0 0 3vh;
}

svg:hover {
  fill: var(--font-color-hover);
}

.page-body {
  width: 60vw;
  height: 82vh;
}

.footer {
  background-color: var(--div-background);
  padding: 3vh 1vw;
  color: var(--font-color);
  width: 30vw;
  height: 72vh;
  overflow-x: hidden;
  overflow-y: scroll;
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
}
.description{
  padding: 1vw;
  font-size: 0.9em;
  font-weight: 600;
}
.reproduction-container{
  position: absolute;
  display: flex;
  height: 15vh;
  width: 99%;
  background-color: var(--background);
  bottom: 0;

}
.thumb-album{
  height:9vh;
}
.artist-reproduction{
  display: flex;
  color: var(--font-color-hover);
}
</style>