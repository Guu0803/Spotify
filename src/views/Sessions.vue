<template>
    <div>
        <playlist playlistName="Sessions" />
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'sessionsPage',
    components:{
        playlist
    }
}
</script>