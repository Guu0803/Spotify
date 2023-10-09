<template>
    <div>
        <playlist playlistName="Mix Relax" artist1="Dennis Lloyd" artist2="Frank Ocean" artist3="Ryan McMullan" />
    </div>
</template>
<script>
import playlist from '@/components/playlist.vue';
export default{
    name:'mixRelaxPage',
    components:{
        playlist
    }
}
</script>