<template>
    <div class="window">
        <playlist playlistName="Mix Indie" artist1="Corella" artist2="Vistas" artist3="Somebody's Child"
            :playlistImg="require('@/assets/mix-indie.png')" playlist="indie" />
        <div class="container-music">
            <div v-for="(music, index) in mixIndie" :key="music">
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
    name: 'indiePage',
    components: {
        playlist,
        music
    },
    data() {
        return {
            mixIndie: [],
        }
    },
    created() {
        this.mixIndie = this.$store.state.playlistMixIndie
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