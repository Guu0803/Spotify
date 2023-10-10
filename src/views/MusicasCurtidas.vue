<template>
    <div>
        <playlist playlistName="Músicas Curtidas" :playlistImg="require('@/assets/musicas-curtidas.png')" playlist="curtidas" />
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