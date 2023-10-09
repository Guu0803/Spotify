<template>
    <div>
        <playlist playlistName="Mix Indie" artist1="Corella" artist2="Vistas" artist3="Somebody's Child" />
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default {
    name: 'indiePage',
    components:{
        playlist
    }
}
</script>
