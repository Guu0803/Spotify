<template>
    <div>
        <playlist playlistName="Músicas Curtidas" />
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'musicasCurtidasPage',
    components:{
        playlist
    }
}
</script>