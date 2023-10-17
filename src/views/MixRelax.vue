<template>
    <div class="window">
        <playlist playlistName="Mix Relax" artist1="Dennis Lloyd" artist2="Frank Ocean" artist3="Ryan McMullan" 
        :playlistImg="require('@/assets/mix-relax.png')" playlist="relax"/>
        <div class="container-music">
            <div v-for="(music, index) in mixRelax" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album" :about="music.about" :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div>
        </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'mixRelaxPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            mixRelax: [],
        }
    },
    created() {
        this.mixRelax = this.$store.state.playlistMixRelax
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
