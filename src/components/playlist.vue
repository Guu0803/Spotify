<template>
    <div class="window">
        <div class="playlist-info">
            <img src="@/assets/mix-indie.png" class="img-thumb">
            <div>
                <div class="playlist-type">
                    Playlist pública
                </div>
                <div class="playlist-name">
                    {{ playlistName }}
                </div>
                <div class="playlist-artist">
                    <div>
                        {{artist1}},
                    </div>
                    <div>
                        {{artist2}},
                    </div>
                    <div>
                        {{artist3}},
                    </div>
                    <div>
                        e mais
                    </div>
                </div>
                <div class="info">
                    <img src="@/assets/spotify-icon.png">
                    Feito para
                    <div>
                        <div class="user">
                            Gustavo Nogueira
                        </div>
                        <span class="material-icons dot">
                            fiber_manual_record
                        </span>
                        5 músicas,
                    </div>
                    2h 40min *fazer conta
                </div>
            </div>
        </div>
        <div class="playlist-header">
            <div class="btn-container">
                <div class="btns">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                    <span class="material-symbols-sharp like">
                        favorite
                    </span>
                    <span class="material-symbols-sharp download">
                        south
                    </span>
                    <span class="material-symbols-sharp like">
                        more_horiz
                    </span>
                </div>
                <div class="search-container">
                    <span class="material-symbols-sharp search">
                        search
                    </span>
                    <div>
                        Ordem personalizada
                        <span class="material-symbols-sharp">
                            arrow_drop_down
                        </span>
                    </div>
                </div>
            </div>
            <div class="columns-container">
                <div class="columns">
                    <div class="number">
                        #
                    </div>
                    <div class="title">
                        Título
                    </div>
                    <div class="album">
                        Álbum
                    </div>
                    <div class="added">
                        Adicionado em
                    </div>
                    <div class="duration">
                        <span class="material-symbols-sharp clock">
                            schedule
                        </span>
                    </div>
                </div>
            </div>
            <div class="teste">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'indiePage',
    props:['playlistName','artist1','artist2', 'artist3',],
}

</script>
<style scoped>
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

.window {
    background-color: rgba(255, 20, 147, 0.6);
    border-radius: 10px;
}

.playlist-info {
    display: flex;
    gap: 2vw;
    padding: 10vh 1vw 3vh 1vw;
}

.img-thumb {
    width: 13vw;
    height: 13vw;
    border-radius: 5px;
}

.playlist-info>div {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    color: var(--font-color-hover);
    width: 100%;
    font-weight: 500;
}

.playlist-type {
    font-size: 0.8em;
}

.playlist-name {
    font-size: 4.5em;
    font-weight: 700;
}

.playlist-artist {
    display: flex;
    gap: 1vh;
    font-size: 0.8em;
    margin-top: 2vh;
    color: #a8a8a8;
}

.playlist-artist>div:not(:last-child) {
    color: var(--font-color-hover);
    cursor: pointer;
}

.playlist-artist>div:not(:last-child):hover {
    text-decoration: underline 2px;
}

.info {
    display: flex;
    align-items: center;
    gap: 1vh;
    font-size: 0.8em;
    color: #a8a8a8;

}

.info>div {
    display: flex;
    align-items: center;
    gap: 1vh;
    color: var(--font-color-hover);
}

.user:hover {
    cursor: pointer;
    text-decoration: underline 2px;
}

.dot {
    font-size: 0.5em;
    padding-top: 3px;
}

.playlist-header {
    position: relative;
}

.btn-container {
    display: flex;
    background-color: rgb(124, 1, 70);
    height: 15vh;
    padding: 2vh 1vw 0 1vw;
    justify-content: space-between;

}

.btns,
.search-container {
    display: flex;
    align-items: center;
    height: fit-content;
}

.btns {
    gap: 2vw;
}

.search-container {
    color: var(--font-color);
    gap: 1vw;
    font-size: 0.9em;
    padding-top: 2vh;
}
.search-container>div{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.search-container>div:hover {
    color: var(--font-color-hover);
}

.search {
    font-size: 1.4em;
    padding: 0.5vh;
    border-radius: 50%;
}
.search:hover {
    background-color:#ffffff3d;
}

.play-btn {
    padding: 1vh;
    background-color: #1ed760;
    border-radius: 50%;
    font-size: 2.5em;
    cursor: pointer;
    color: black;
}

.play-btn:hover {
    scale: 1.1;
    transition: ease-in-out;
}

.like {
    font-size: 2.5em;
    font-weight: 300;
}

.download {
    border: 2px solid var(--font-color);
    color: var(--font-color);
    border-radius: 50%;
    padding: 2px;
    font-size: 1.3em;
}

.download:hover {
    cursor: pointer;
    color: var(--font-color-hover);
    border-color: var(--font-color-hover);
}

.columns {
    display: flex;
    align-items: first baseline;
    padding: 0 1vw;
    border-bottom: 1px solid #a7a7a730;
    color: var(--font-color);
    font-size: 0.8em;
}

.columns-container {
    margin-top: -2vh;
    height: 15vh;
    background-image: linear-gradient(to bottom, rgb(124, 1, 70), var(--div-background));
}

.teste {
    height: 20vh;
    background-color: var(--div-background);
}

.number {
    width: 3vw;
    text-align: center;
}

.title {
    width: 20vw;
}

.album {
    width: 15vw;
}

.added {
    width: 10vw;
    margin-right: 10vw;
}

.duration {
    width: 3vw;
}

.clock {
    font-size: 1.4em;
}

.title:hover,
.added:hover,
.album:hover,
.clock:hover {
    cursor: pointer;
    color: var(--font-color-hover);
    text-decoration: none;
}
</style>