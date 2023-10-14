<template>
    <div class="window" :style="background()">
        <div class="playlist-info">
            <img :src="playlistImg" class="img-thumb">
            <div>
                <div class="playlist-type">
                    Playlist pública
                </div>
                <div class="playlist-name">
                    {{ playlistName }}
                </div>
                <div class="playlist-artist" v-if="artist1">
                    <div>
                        {{ artist1 }},
                    </div>
                    <div>
                        {{ artist2 }},
                    </div>
                    <div v-if="artist2">
                        {{ artist3 }}
                    </div>
                    <div>
                        e mais
                    </div>
                </div>
                <div class="description" v-if="playlistDescription">
                    {{ playlistDescription }}
                </div>
                <div class="info">
                    <img src="@/assets/img-user.png" class="img-user"
                        v-if="playlist == 'curtidas' || playlist == 'episodios' || playlist == 'country' || playlist == 'vibration'">
                    <div
                        v-if="(playlist != 'episodios' && playlist != 'curtidas' && playlist != 'country' && playlist != 'vibration') || enriquecer == true">
                        <img src="@/assets/spotify-icon.png" class="spotify-icon">
                        <div style="color:#cac2c2 ;">
                            Feito para
                        </div>
                    </div>
                    <div>
                        <div class="user">
                            Gustavo Nogueira
                        </div>
                        <span class="material-icons dot">
                            fiber_manual_record
                        </span>
                        <div v-if="episode == true">
                            2 episódios,
                        </div>
                        <div v-else>
                            5 músicas,
                        </div>
                    </div>
                    2h 40min *fazer conta
                </div>
            </div>
        </div>
        <div class="playlist-header" :style="backgroundPlaylistHeader()">
            <div class="btn-container">
                <div class="btns">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                    <div v-if="playlist == 'country' || playlist == 'vibration'">
                        <div class="enrich" v-if="enriquecer == false">
                            Enriquecer
                        </div>
                        <div class="enrich" v-else>
                            <img src="@/assets/brilho.png">
                            Enriquecida
                        </div>
                    </div>
                    <span class="material-symbols-sharp like"
                        v-if="playlist != 'episodios' && playlist != 'curtidas' && playlist != 'country' && playlist != 'vibration'">
                        favorite
                    </span>
                    <span class="material-symbols-sharp download" v-if="playlist != 'episodios'">
                        south
                    </span>
                    <span class="material-symbols-sharp collaborators"
                        v-if="playlist == 'country' || playlist == 'vibration'">
                        person_add
                    </span>
                    <span class="material-symbols-sharp like" v-if="playlist != 'episodios' && playlist != 'curtidas'">
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
        </div>
    </div>
</template>
<script>
export default {
    name: 'playlistComponent',
    props: ['playlistName', 'artist1', 'artist2', 'artist3', 'playlistImg', 'playlistDescription', 'episode', 'playlist'],
    data() {
        return {
            enriquecer: false
        }
    },
    methods: {
        background() {
            if (this.playlist == 'session') {
                return 'background-color: rgba(114, 49, 114, 0.7);'
            }
            if (this.playlist == 'country') {
                return 'background-color: rgb(184,20,20);'
            }
            if (this.playlist == 'descobertas') {
                return 'background-color: rgb(41,99,147);'
            }
            if (this.playlist == 'curtidas') {
                return 'background-color: rgba(31, 16, 79);'
            }
            if (this.playlist == 'episodios') {
                return 'background-color: rgb(5, 131, 100);'
            }
            if (this.playlist == 'vibration') {
                return 'background-color: rgba(237, 145, 33, 0.8);'
            }
            if (this.playlist == 'nothing') {
                return 'background-color: rgba(102, 100, 100, 0.8);'
            }
            if (this.playlist == 'indie') {
                return 'background-color: rgba(255, 20, 147, 0.7);'
            }
            if (this.playlist == 'relax') {
                return 'background-color: rgb(98, 150, 137);'
            }
            if (this.playlist == 'metal') {
                return 'background-color: rgb(10, 72, 143);'
            }
            if (this.playlist == 'daily') {
                return 'background-color: rgb(69, 109, 46);'
            }
        },
        backgroundPlaylistHeader() {
            if (this.playlist == 'session') {
                return 'background-image: linear-gradient(to bottom, rgb(66, 27, 66) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'country') {
                return 'background-image: linear-gradient(to bottom, rgb(141, 14, 14) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'descobertas') {
                return 'background-image: linear-gradient(to bottom, rgb(24, 69, 105) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'curtidas') {
                return 'background-image: linear-gradient(to bottom, rgb(22, 12, 56) 10%, var(--div-background) 70%)'
            }
            if (this.playlist == 'episodios') {
                return 'background-image: linear-gradient(to bottom, rgb(5, 104, 79) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'vibration') {
                return 'background-image: linear-gradient(to bottom, rgba(173, 105, 22, 0.8) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'nothing') {
                return 'background-image: linear-gradient(to bottom, rgb(71, 70, 70) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'indie') {
                return 'background-image: linear-gradient(to bottom, rgb(148, 13, 85) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'relax') {
                return 'background-image: linear-gradient(to bottom, rgb(71, 110, 101) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'metal') {
                return 'background-image: linear-gradient(to bottom, rgb(6, 43, 85) 10%, var(--div-background) 70%);'
            }
            if (this.playlist == 'daily') {
                return 'background-image: linear-gradient(to bottom, rgb(50, 78, 34) 10%, var(--div-background) 70%);'
            }
        }
    }
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
    background-color: rgb(50, 78, 34);
    border-radius: 10px;
}

.playlist-info {
    display: flex;
    gap: 2vw;
    padding: 10vh 1vw 3vh 1vw;
    align-items: center;
}

.img-thumb {
    width: 13vw;
    height: 13vw;
    border-radius: 5px;
    box-shadow: 0px 0px 69px -5px rgba(0, 0, 0, 0.74);
}

.img-user {
    height: 3.5vh;
    border-radius: 50%;
    padding: 0;
    z-index: 1;
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
    margin-top: 3vh;
}

.playlist-name {
    font-size: 2.5em;
    font-weight: 700;
}

.description {
    padding: 0;
    font-size: 0.8em;
    color: var(--font-color);
    font-weight: 500;
    padding-bottom: 1vh;
}

.playlist-artist {
    display: flex;
    gap: 1vh;
    font-size: 0.8em;
    margin-top: 2vh;
    color: #cac2c2;
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
    color: #cac2c2;
}

.info>div {
    display: flex;
    gap: 1vh;
    align-items: center;
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
    height: 10vh;
    padding: 2vh 1vw 0 1vw;
    justify-content: space-between;
}

.enrich {
    display: flex;
    align-items: center;
    gap: 1vh;
    color: var(--font-color-hover);
    font-weight: 500;
    border-radius: 20px;
    border: 2px solid var(--font-color);
    padding: 1vh;
    font-size: 0.9em;
    cursor: pointer;
    justify-content: center;
}

.enrich:hover {
    scale: 1.05;
    border-color: var(--font-color-hover);
    transition: ease-in-out 100ms;
}

.collaborators {
    transform: scaleX(-1);
    color: var(--font-color);
    font-size: 2.5em;
    font-weight: 300;
    cursor: pointer;
}

.collaborators:hover {
    color: var(--font-color-hover);
}

.btns,
.search-container {
    display: flex;
    align-items: center;
    height: fit-content;
}

.btns {
    gap: 1.5vw;
}

.search-container {
    color: var(--font-color);
    gap: 1vw;
    font-size: 0.9em;
    padding-top: 2vh;
}

.search-container>div {
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
    background-color: #ffffff3d;
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
    padding: 1.5vh 1vw;
    border-bottom: 1px solid #a7a7a730;
    color: var(--font-color);
    font-size: 0.8em;
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
    width: 8vw;
    margin-right: 10vw;
}

.duration {
    margin-right: 5vw;
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