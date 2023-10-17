<template>
    <div class="window">
        <img :src="cover" class="artist-cover">
        <div class="btn-container">
            Play
        </div>
        <div class="music-container">
            Populares
        </div>

    </div>
</template>
<script>
// import episode from '@/components/episodes.vue';
export default {
    name: 'testePage',
    components: {
        // episode
    },
    data(){
        return{
            cover:  undefined,
        }
    },
    created(){
        let artist = localStorage.getItem('artist')
        let listOfArtists = this.$store.state.listOfArtists
        if(artist){
            listOfArtists.forEach(element => {
                if(element.artist == artist){
                    this.cover = element.artistCover
                }
            });
        }
    }

}

</script>