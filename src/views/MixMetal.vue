<template>
    <div class="window">
        <playlist playlistName="Mix Metal" artist1=" We're Wolves" artist2="Bring Me The Horizon" artist3="Led by Lanterns" :playlistImg="require('@/assets/mix-metal.png')" playlist="metal"/>
       <div class="container-music">
         <div v-for="(music, index) in mixMetal" :key="music">
            <music  :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album"  :about="music.about" :explicit="music.explicit"  :albumCover="music.albumCover" :duration="music.duration" :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })"/>
        </div></div>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
import music from '@/components/music.vue'
export default{
    name:'mixMetalPage',
    components:{
        playlist,
        music
    },
    data() {
        return {
            mixMetal: [],
        }
    },
    created() {
        this.mixMetal = this.$store.state.playlistMixMetal
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
