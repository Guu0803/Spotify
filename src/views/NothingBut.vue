<template>
    <div class="window">
        <playlist playlistName="This is Nothing but Thieves" :playlistImg="require('@/assets/nothing.png')" playlist="nothing"/>
       <div class="container-music">
        <div v-for="(music, index) in thisIs" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :pageArtist="false" :album="music.album"  playlist="This is Nothing but Thieves" :about="music.about" :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div>
       </div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'nothingPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            thisIs: [],
        }
    },
    created() {
        this.thisIs = this.$store.state.thisIsNothingBut
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
