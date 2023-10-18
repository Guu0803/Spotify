<template>
    <div class="window">
        <playlist :playlistName="artist.album" :artist3="artist.artist"  playlist="album" :playlistImg="artist.albumCover" />
        <div class="container-music">
            <div>
                <music :albumCover="artist.albumCover" :name="artist.name" :artist="artist.artist" :duration="artist.duration"
                :explicit="artist.explicit" :playlist="artist.artist"  :songNumber="1" :about="artist.about"  :reproductions="artist.reproductions"
                :pageArtist="false" />
            </div>
        </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default {
    name: "albumPage",
    components: {
        playlist,
        music
    },
    data() {
        return {
            artist: {}
        }
    },
    created() {
        let album = localStorage.getItem('album')
        album = JSON.parse(album)
        let listOfArtists = this.$store.state.listOfArtists
        if (album) {
            listOfArtists.forEach(element => {
                if (element.album == album.albumName) {
                    this.artist = element
                }
            });
        }
    }
}
</script>
<style scoped>
.window {
    display: flex;
    flex-direction: column;
    position: relative;
}

.container-music {
    position: absolute;
    bottom: 15vh;
}
</style>