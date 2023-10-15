<template>
    <div class="window">
        <playlist playlistName="Fucking Country Music" :playlistImg="require('@/assets/country.png')" playlist="country" />
        <div class="container-music">
            <div v-for="(music, index) in countryMusic" :key="music">
                <music :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album"
                    :albumCover="music.albumCover" :duration="music.duration"
                    :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })" />
            </div>
        </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default {
    name: 'countryPage',
    components: {
        playlist,
        music
    },
    data() {
        return {
            countryMusic: [],
        }
    },
    created() {
        this.countryMusic = this.$store.state.playlistCountry
    }
}
</script>
<style scoped>
.window {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 5vh;
}

.container-music {
    position: absolute;
    bottom: -20vh;
}
</style>