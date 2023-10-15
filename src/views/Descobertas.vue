<template>
    <div class="window">
       <playlist playlistName="Descobertas da Semana" :playlistImg="require('@/assets/descobertas.png')" 
       playlistDescription="Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra voçê. Atualizada toda segunda." playlist="descobertas"/>
       <div class="container-music">
        <div v-for="(music, index) in descobertas" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album" :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div>
       </div>
    </div>
</template>
<script>
import  playlist  from "@/components/playlist.vue";
import music from '@/components/music.vue'

export default {
    name: 'descobertasPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            descobertas: [],
        }
    },
    created() {
        this.descobertas = this.$store.state.playlistDescobertas
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

