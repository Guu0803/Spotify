<template>
    <div class="window">
        <img :src="artist.artistCover" class="artist-cover">
        <div class="background">
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
                    <div v-on:click="randomBtn()">
                        <img src="@/assets/aleatorio-verde.png" class="playback-icon" v-if="random">
                        <img src="@/assets/aleatorio.png" class="playback-icon" v-else>
                    </div>
                    <div v-on:click="followArtist()" class="follow">
                        <div v-if="follow">
                            Seguindo
                        </div>
                        <div v-else>
                            Seguir
                        </div>
                    </div>
                    <span class="material-symbols-sharp like">
                        more_horiz
                    </span>
                </div>
            </div>
            <div class="music-container">
                Populares
                <div class="music" v-for="(music, index) in musicList" :key="music">
                    <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album" :playlist="music.artist" :reproductions="music.reproductions" :about="music.about" :favorite= "music.favorite"  :albumCover="music.albumCover" :duration="music.duration" />
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import music from '@/components/music.vue'
export default {
    name: 'artistPage',
    components: {
        music
    },
    data() {
        return {
            follow: false,
            play: false,
            random: false,
            artist: {},
            musicList: []
        }
    },
    methods: {
        randomBtn() {
            if (this.random == false) {
                this.random = true
            } else {
                this.random = false
            }
        },
        playPlaylist() {
            if (this.play == false) {
                this.play = true
            } else {
                this.play = false
            }
        },
        followArtist() {
            if (this.follow == false) {
                this.follow = true
            } else {
                this.follow = false
            }
        },
    },
    created() {
        let artist = localStorage.getItem('artist')
        let listOfArtists = this.$store.state.listOfArtists
        if (artist) {
            listOfArtists.forEach(element => {
                if (element.artist == artist) {
                    this.artist = element
                    let musicList = [
                        {
                            name: this.artist.name,
                            artist:this.artist.artist,
                            albumCover: this.artist.albumCover,
                            duration: this.artist.duration,
                            reproductions: this.artist.reproductions,
                            about:this.artist.about
                        },
                        {
                            name: this.artist.name,
                            artist:this.artist.artist,
                            albumCover: this.artist.albumCover,
                            duration: this.artist.duration,
                            reproductions: this.artist.reproductions,
                            about:this.artist.about
                        },
                        {
                            name: this.artist.name,
                            artist:this.artist.artist,
                            albumCover: this.artist.albumCover,
                            duration: this.artist.duration,
                            reproductions: this.artist.reproductions,
                            about:this.artist.about
                        },
                        {
                            name: this.artist.name,
                            artist:this.artist.artist,
                            albumCover: this.artist.albumCover,
                            duration: this.artist.duration,
                            reproductions: this.artist.reproductions,
                            about:this.artist.about
                        },
                        {
                            name: this.artist.name,
                            artist:this.artist.artist,
                            albumCover: this.artist.albumCover,
                            duration: this.artist.duration,
                            reproductions: this.artist.reproductions,
                            about:this.artist.about
                        },
                    ]
                    this.musicList = musicList
                }
            });
        }
    }
}

</script>
<style scoped>
.btn-container {
    display: flex;
    height: 10vh;
    padding: 2vh 1vw 0 1vw;
}

.follow {
    width: 6vw;
    color: var(--font-color-hover);
    font-weight: 500;
    border-radius: 20px;
    border: 1px solid var(--font-color);
    padding: 1vh;
    font-size: 0.9em;
    cursor: pointer;
    margin: 0;
}

.follow>div {
    display: flex;
    gap: 1vh;
    align-items: center;
    justify-content: center;
}

.follow:hover {
    scale: 1.05;
    border-color: var(--font-color-hover);
    transition: ease-in-out 100ms;
}

.btns {
    display: flex;
    align-items: center;
    height: fit-content;
}

.btns {
    gap: 1.5vw;
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

.playback-icon {
    height: 4.5vh;
}

.music-container {
    color: var(--font-color-hover);
    font-size: 1.4em;
    font-weight: 700;
    padding: 0 1vw;
}

.music {
    font-size: 0.5em;
}
</style>