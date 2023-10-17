<template>
    <div class="music-container">
        <div class="music" v-on:click="playNow()">
            <div class="music-number">
                <div class="number">
                    {{ songNumber }}
                </div>
                <span class="material-icons play-arrow">
                    play_arrow
                </span>
            </div>
            <div class="music-title">
                <img :src="albumCover" class="thumb">
                <div>
                    {{ name }}
                    <div class="music-artist">
                        <span class="material-icons explicit" v-if="explicit">
                            explicit
                        </span>
                        <span class="material-symbols-sharp downloaded" v-if="download">
                            south
                        </span>
                        {{ artist }}
                    </div>
                </div>
            </div>
            <div class="music-album">
                {{ album }}
            </div>
            <div class="add">
                {{ added }}
            </div>
            <div class="favorite-container" v-on:click.stop="showFavorite()">
                <span class="material-icons favorite" v-if="like || favorite">
                    favorite
                </span>
                <span class="material-symbols-sharp not-favorite" v-else>
                    favorite
                </span>
            </div>
            <div class="time">
                {{ duration }}
            </div>
            <span class="material-symbols-sharp horiz">
                more_horiz
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'musicComponent',
    props: ['songNumber', 'albumCover', 'name', 'artist', 'album', 'added', 'duration', 'explicit', 'about'],
    data() {
        return {
            like: false
        }
    },
    methods: {
        showFavorite() {
            if (this.like == false) {
                this.like = true
            } else {
                this.like = false
            }
        },
        playNow() {
            let musicNow = {
                name: this.name,
                artist: this.artist,
                albumCover: this.albumCover,
                duration: this.duration,
                about: this.about
            }
            this.$store.commit('musicNow', musicNow)
        }

    },
    computed: {
        download() {
            return this.$store.state.download
        },
        favorite(){
            return this.$store.state.favorite
        }
    }
}
</script>
<style scoped>
.music-container {
    padding: 0 1vh;
    box-sizing: border-box;
}

.music {
    display: flex;
    align-items: center;
    height: 9vh;
    border-radius: 5px;
    cursor: pointer;
}

.music:hover {
    background-color: #a7a7a730;
    transition: ease-in-out 100ms;
}

.music:hover>.music-album {
    color: var(--font-color-hover);
}

.music:hover>div>div>.music-artist {
    color: var(--font-color-hover);
}

.music:hover>div>.not-favorite,
.music:hover>.horiz {
    opacity: 1;
}

.music:hover>div>.number {
    display: none;
}

.music:hover>div>.play-arrow {
    display: block;
}

.music-number {
    width: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-color);
}

.number {
    display: block;
}

.play-arrow {
    display: none;
}

.thumb {
    height: 6.5vh;
    border-radius: 5px;
}

.music-title {
    color: var(--font-color-hover);
    display: flex;
    gap: 1vw;
    align-items: center;
    font-weight: 500;
    width: 18vw;
    font-size: 0.8em;
}

.music-artist {
    font-size: 0.9em;
    color: var(--font-color);
    font-weight: 500;
    margin-top: 0.5vh;
    display: flex;
    align-items: center;
    gap: 1vh;
}

.explicit {
    font-size: 1.5em;
    font-weight: 500;
}

.downloaded {
    border-radius: 50%;
    padding: 2px;
    font-size: 0.9em;
    background-color: var(--green);
    color: #000;
    cursor: pointer;
    font-weight: 700;
}

.music-album {
    color: var(--font-color);
    font-weight: 500;
    width: 11vw;
    margin-right: 2.5vw;
    font-size: 0.8em;
    text-wrap: nowrap;
    overflow-x: hidden;
    max-height: 3vh;
}

.music-album:hover,
.music-artist:hover {
    text-decoration: underline 1px;
}

.add {
    width: 9vw;
    color: var(--font-color);
    font-size: 0.8em;
    font-weight: 500;
    padding-left: 1vh;
}

.favorite-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7vw;
}

.not-favorite {
    color: var(--font-color);
    box-sizing: border-box;
    opacity: 0;
}

.favorite {
    color: var(--green);
}

.not-favorite:hover,
.horiz:hover {
    cursor: pointer;
    color: var(--font-color-hover);
}

.time {
    color: var(--font-color);
    margin: 0 1vw;
    width: 3vw;
    font-size: 0.9em;
    font-weight: 500;
}

.horiz {
    color: var(--font-color);
    opacity: 0;
    margin-right: 1vh;
}</style>