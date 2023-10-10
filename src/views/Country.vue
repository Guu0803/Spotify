<template>
    <div>
        <playlist playlistName="Fucking Country Music" :playlistImg="require('@/assets/country.png')" playlist="country"/>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'countryPage',
    components:{
        playlist
    }
}
</script>