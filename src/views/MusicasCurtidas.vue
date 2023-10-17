<template>
    <div class="window">
        <playlist playlistName="Músicas Curtidas" :playlistImg="require('@/assets/musicas-curtidas.png')" playlist="curtidas" />
       <div class="container-music"> 
        <div v-for="(music, index) in musicasCurtidas" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :pageArtist="false" :album="music.album" playlist="Músicas Curtidas" :about="music.about" :favorite= "music.favorite"  :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div></div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'musicasCurtidasPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            musicasCurtidas: [],
        }
    },
    created() {
        this.musicasCurtidas = this.$store.state.playlistMusicasCurtidas
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
