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
                            2 episódios
                        </div>
                        <div v-else>
                            5 músicas,
                        </div>
                    </div>
                    {{ playlistDuration() }}
                </div>
            </div>
        </div>
        <div class="playlist-header" :style="backgroundPlaylistHeader()">
            <div class="btn-container">
                <div class="btns">
                    <div class="container-play-playlist" v-on:click="playPlaylist()">
                        <span class="material-icons  play-btn" v-if="play">
                            pause
                        </span>
                        <span class="material-icons play-btn" v-else>
                            play_arrow
                        </span>
                    </div>
                    <div v-if="playlist == 'country' || playlist == 'vibration'" v-on:click="enrichPlaylist()"
                        class="enrich">
                        <div v-if="enrich">
                            <img src="@/assets/brilho.png">
                            Enriquecida
                        </div>
                        <div v-else>
                            Enriquecer
                        </div>
                    </div>
                    <div class="favorite-container"
                        v-if="playlist != 'episodios' && playlist != 'curtidas' && playlist != 'country' && playlist != 'vibration'"
                        v-on:click="likePlaylist()">
                        <span class="material-icons liked" v-if="like">
                            favorite
                        </span>
                        <span class="material-symbols-sharp like" v-else>
                            favorite
                        </span>
                    </div>
                    <div class="download-container" v-if="playlist != 'episodios'" v-on:click="downloadPlaylist()">
                        <span class="material-symbols-sharp downloaded" v-if="download">
                            south
                        </span>
                        <span class="material-symbols-sharp download" v-else>
                            south
                        </span>
                    </div>
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
                <div class="columns" v-if="playlist != 'episodios'">
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
                <div class="columns" v-else>
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
            enrich: false,
            download: false,
            like: false,
            play:false
        }
    },
    methods: {
        playPlaylist(){
            if (this.play == false) {
                this.play = true
            } else {
                this.play = false
            }
        },
        enrichPlaylist() {
            if (this.enrich == false) {
                this.enrich = true
            } else {
                this.enrich = false
            }
        },
        likePlaylist() {
            if (this.like == false) {
                this.like = true
            } else {
                this.like = false
            }
            this.$store.commit('favorite', this.like)
        },
        downloadPlaylist() {
            if (this.download == false) {
                this.download = true
            } else {
                this.download = false
            }
            this.$store.commit('download', this.download)
        },
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
                return 'background-image: linear-gradient(to bottom, rgb(66, 27, 66) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'country') {
                return 'background-image: linear-gradient(to bottom, rgb(141, 14, 14) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'descobertas') {
                return 'background-image: linear-gradient(to bottom, rgb(24, 69, 105) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'curtidas') {
                return 'background-image: linear-gradient(to bottom, rgb(22, 12, 56) 10%, var(--div-background) 50%)'
            }
            if (this.playlist == 'episodios') {
                return 'background-image: linear-gradient(to bottom, rgb(5, 104, 79) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'vibration') {
                return 'background-image: linear-gradient(to bottom, rgba(173, 105, 22, 0.8) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'nothing') {
                return 'background-image: linear-gradient(to bottom, rgb(71, 70, 70) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'indie') {
                return 'background-image: linear-gradient(to bottom, rgb(148, 13, 85) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'relax') {
                return 'background-image: linear-gradient(to bottom, rgb(71, 110, 101) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'metal') {
                return 'background-image: linear-gradient(to bottom, rgb(6, 43, 85) 10%, var(--div-background) 50%);'
            }
            if (this.playlist == 'daily') {
                return 'background-image: linear-gradient(to bottom, rgb(50, 78, 34) 10%, var(--div-background) 50%);'
            }
        },
        playlistDuration() {
            if (this.playlist == 'session') {
                return "14min 59 s"
            }
            if (this.playlist == 'country') {
                return "16min 2 s"
            }
            if (this.playlist == 'descobertas') {
                return "16min 46 s"
            }
            if (this.playlist == 'curtidas') {
                return " 16min 11 s"
            }
            if (this.playlist == 'vibration') {
                return " 19min 29 s"
            }
            if (this.playlist == 'nothing') {
                return " 18min 10 s"
            }
            if (this.playlist == 'indie') {
                return "18min 5 s"
            }
            if (this.playlist == 'relax') {
                return " 15min 37 s"
            }
            if (this.playlist == 'metal') {
                return " 18min 23 s"
            }
            if (this.playlist == 'daily') {
                return " 16min 53 s"
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
    height: 60vh;
}

.btn-container {
    display: flex;
    height: 10vh;
    padding: 2vh 1vw 0 1vw;
    justify-content: space-between;
}

.enrich {
    width: 8vw;
    color: var(--font-color-hover);
    font-weight: 500;
    border-radius: 20px;
    border: 2px solid var(--font-color);
    padding: 1vh;
    font-size: 0.9em;
    cursor: pointer;
}

.enrich>div {
    display: flex;
    gap: 1vh;
    align-items: center;
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

.liked {
    font-size: 2.5em;
    font-weight: 300;
    color: var(--green);
    cursor: pointer;
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

.downloaded {
    border-radius: 50%;
    padding: 2px;
    font-size: 1.3em;
    background-color: var(--green);
    color: #000;
    border: 2px solid var(--green);
    cursor: pointer;
    font-weight: 700;
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