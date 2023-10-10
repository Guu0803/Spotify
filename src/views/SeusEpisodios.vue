<template>
    <div>
        <playlist playlistName="Seus episódios" :playlistImg="require('@/assets/episodios.png')" :episode="true"  playlist="episodios"/>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'episodiosPage',
    components:{
        playlist
    }
}
</script>