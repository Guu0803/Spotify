<template>
    <div class="window">
        <playlist playlistName="Indie Vibration" :playlistImg="require('@/assets/indie.png')" playlist="vibration"/>
        <div class="container-music">
            <div v-for="(music, index) in indieVibration" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album"  :about="music.about" :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div>
        </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'indieVibrationPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            indieVibration: [],
        }
    },
    created() {
        this.indieVibration = this.$store.state.playlistIndieVibration
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