<template>
    <div>
        <playlist playlistName="Sessions" :playlistImg="require('@/assets/session.png')" playlistDescription="Um Match de músicas feito para Gustavo, Victor e Dry. Atualizado todos os dias" playlist="session"/>
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