<template>
    <div class="window">
        <playlist playlistName="Sessions" :playlistImg="require('@/assets/session.png')" playlistDescription="Um Match de músicas feito para Gustavo, Victor e Dry. Atualizado todos os dias" playlist="session"/>
        <div class="container-music">
            <div v-for="(music, index) in sessions" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :pageArtist="false" :album="music.album" playlist="Sessions" :about="music.about" :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div>
        </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'sessionsPage',
    components:{
        playlist, 
        music
    },
    data() {
        return {
            sessions: [],
        }
    },
    created() {
        this.sessions = this.$store.state.playlistSessions
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