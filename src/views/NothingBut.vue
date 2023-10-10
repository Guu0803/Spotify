<template>
    <div>
        <playlist playlistName="This is Nothing but Thieves" :playlistImg="require('@/assets/nothing.png')" playlist="nothing"/>
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'nothingPage',
    components:{
        playlist
    }
}
</script>