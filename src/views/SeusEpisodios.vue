<template>
    <div class="window">
        <playlist playlistName="Seus episódios" :playlistImg="require('@/assets/episodios.png')" :episode="true"
            playlist="episodios" />
        <div class="container-music">
            <div v-for="episode in episodes" :key="episode">
            <episode :name="episode.name" :episodeName="episode.episodeName" :added="episode.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })" :albumCover="episode.albumCover" :description="episode.description"  />
            
            </div>
        </div>
    </div>
</template>
<script>
import episode from '@/components/episodes.vue';
import playlist from '@/components/playlist.vue';
export default {
    name: 'episodiosPage',
    components: {
        playlist,
        episode
    },
    data(){
        return{
            episodes:[]
        }
    },
    created(){
        this.episodes = this.$store.state.episodes
    }
}
</script>
<style scoped>
.window {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 8vh;
}

.container-music {
    position: absolute;
    bottom: -27vh;
}
</style>