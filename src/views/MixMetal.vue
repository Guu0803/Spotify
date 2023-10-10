<template>
    <div>
        <playlist playlistName="Mix Metal" artist1=" We're Wolves" artist2="Bring Me The Horizon" artist3="Led by Lanterns" :playlistImg="require('@/assets/mix-metal.png')" playlist="metal"/>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'mixMetalPage',
    components:{
        playlist
    }
}
</script>