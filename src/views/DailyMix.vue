<template>
    <div class="window">
        <playlist playlistName="Daily Mix 1" artist1="Nothing But Thieves" artist2="Two Door Cinema Club" playlist="daily"
            :playlistImg="require('@/assets/daily-mix.png')" />
        <div class="teste">
            <div v-for="(music, index) in playlistDailyMix" :key="music">
                <music :songNumber=(index+1) :name="music.name" :artist="music.artist" :album="music.album"
                    :albumCover="music.albumCover" :duration="music.duration" :about="music.about" playlist="Daily Mix 1" :pageArtist="false"
                    :added="music.added.toLocaleDateString('pt-br', { year: 'numeric', month: 'short', day: 'numeric' })" />
            </div>
        </div>
    </div>
</template>]
<script>
import playlist from '@/components/playlist.vue'
import music from '@/components/music.vue'
export default {
    name: 'dailyMixPage',
    components: {
        playlist,
        music
    },
    data() {
        return {
            playlistDailyMix: []
        }
    },
    created() {
        this.playlistDailyMix = this.$store.state.playlistDailyMix
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

.teste {
    position: absolute;
    bottom: -20vh;
}
</style>