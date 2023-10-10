<template>
    <div>
        <playlist playlistName="Daily Mix 1"  artist1="Nothing But Thieves" artist2="Two Door Cinema Club" playlist="daily"
        :playlistImg="require('@/assets/daily-mix.png')"/>
    </div>
</template>]
<script>
import playlist from '@/components/playlist.vue'
export default{
    name:'dailyMixPage',
    components:{
        playlist
    }
}
</script>