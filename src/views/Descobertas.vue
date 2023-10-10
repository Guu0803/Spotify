<template>
    <div>
       <playlist playlistName="Descobertas da Semana" :playlistImg="require('@/assets/descobertas.png')" 
       playlistDescription="Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra voçê. Atualizada toda segunda." playlist="descobertas"/>
    </div>
</template>
<script>
import  playlist  from "@/components/playlist.vue";
export default {
    name: 'descobertasPage',
    components:{
        playlist
    }
}
</script>