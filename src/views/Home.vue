<template>
    <div class="window-home">
        <div class="background-container" :style="background()">
            <div class="nav-btn">
                <div class="btn">
                    <span class="material-symbols-sharp previous">
                        chevron_left
                    </span>
                    <span class="material-symbols-sharp next">
                        chevron_right
                    </span>
                </div>
                <div class="user-btn">
                    <span class="material-symbols-sharp notification">
                        notifications
                    </span>
                    <span class="material-symbols-sharp group">
                        groups
                    </span>
                    <img src="@/assets/img-user.png" class="img-user">
                </div>
            </div>
            <div class="greeting">
                Bom dia
            </div>
            <div class="playlist-container">
                <div class="playlist-collumn">
                    <div class="playlist" v-on:mouseover="curtidas()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/musicas-curtidas.png" class="
                    img-thumb">
                        Músicas Curtidas
                    </div>
                    <div class="playlist" v-on:mouseover="indie()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/thumb-mix-indie.png" class="
                    img-thumb">
                        Mix Indie
                    </div>
                    <div class="playlist" v-on:mouseover="indieVibration()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/indie.png" class="
                    img-thumb">
                        Indie Vibration
                    </div>
                </div>
                <div class="playlist-collumn">
                    <div class="playlist" v-on:mouseover="country()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/country.png" class="
                    img-thumb">
                        Fucking Country Music
                    </div>
                    <div class="playlist" v-on:mouseover="sessions()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/session.png" class="
                    img-thumb">
                        Sessions
                    </div>
                    <div class="playlist" v-on:mouseover="descobertas()" v-on:mouseleave="backgroundOff()">
                        <img src="@/assets/descobertas.png" class="
                    img-thumb">
                        Descobertas da Semana
                    </div>
                </div>
            </div>
        </div>
        <div class="recommendation-for">
            <div>
                Feito Para Gustavo Nogueira
            </div>
            <div class="show-more">
                Mostrar tudo
            </div>
        </div>
        <div class="recommendation">
            <div class="recommendation-card">
                <img src="@/assets/mix-indie.png" class="thumb-recommendation">
                <div class="title">
                    Mix Indie
                    <div class="content">
                        <div>
                            Corella,
                        </div>
                        <div>
                            Vistas,
                        </div>
                        <div>
                            Somebody's Chil...
                        </div>
                    </div>
                </div>
                <div class="play-container">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                </div>
            </div>
            <div class="recommendation-card">
                <img src="@/assets/mix-metal.png" class="thumb-recommendation">
                <div class="title">
                    Mix Metal
                    <div class="content">
                        <div>
                            We're Wolves,
                        </div>
                        <div>
                            Bring Me The Horiz...
                        </div>
                    </div>
                </div>
                <div class="play-container">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                </div>
            </div>
            <div class="recommendation-card">
                <img src="@/assets/daily-mix.png" class="thumb-recommendation">
                <div class="title">
                    Daily Mix 1
                    <div class="content">
                        <div>
                            Nothing But Thieves,
                        </div>
                        <div>
                            Two Door Cinema Cl...
                        </div>
                    </div>
                </div>
                <div class="play-container">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                </div>
            </div>
            <div class="recommendation-card">
                <img src="@/assets/mix-relax.png" class="thumb-recommendation">
                <div class="title">
                    Mix Relax
                    <div class="content">
                        <div>
                            Dennis Lloyd,
                        </div>
                        <div>
                            Frank Ocean...
                        </div>
                    </div>
                </div>
                <div class="play-container">
                    <span class="material-icons play-btn">
                        play_arrow
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homePage',
    data() {
        return {
            playlist: ''
        }
    },
    methods: {
        indie() {
            this.playlist = 'indie'
        },
        curtidas() {
            this.playlist = 'curtidas'
        },
        indieVibration() {
            this.playlist = 'vibration'
        },
        country() {
            this.playlist = 'country'
        },
        sessions() {
            this.playlist = 'sessions'
        },
        descobertas() {
            this.playlist = 'descobertas'
        },
        backgroundOff() {
            this.playlist = ''
        },
        background() {
            if (this.playlist == 'indie') {
                return 'background-image: linear-gradient(to bottom, rgba(255, 20, 147, 0.7), rgba(255, 20, 147, 0.60), rgba(255, 20, 147, 0.50), rgba(255, 20, 147, 0.20), rgba(255, 20, 147, 0.10), var(--div-background));'
            }
            if (this.playlist == 'curtidas') {
                return 'background-image: linear-gradient(to bottom,  rgba(	31, 16, 79), rgba(31, 16, 79, 0.80), rgba(	31, 16, 79, 0.60), rgba(31, 16, 79, 0.30), rgba(31, 16, 79, 0.10), var(--div-background));'
            }
            if (this.playlist == 'country') {
                return 'background-image: linear-gradient(to bottom, rgba(184,20,20, 0.7), rgba(184,20,20, 0.60), rgba(184,20,20, 0.50), rgba(184,20,20, 0.20), rgba(184,20,20, 0.10), var(--div-background));'
            }
            if(this.playlist == 'vibration'){
                return 'background-image: linear-gradient(to bottom, rgba(237, 145, 33, 0.7), rgba(237 , 145 , 33, 0.60), rgba(237 , 145 , 33, 0.50), rgba(237 , 145 , 33, 0.20), rgba(237 , 145 , 33, 0.10), var(--div-background));'
            }
            if(this.playlist == 'sessions'){
                return 'background-image: linear-gradient(to bottom, rgba(114, 49, 114, 0.7), rgba(114, 49, 114, 0.60), rgba(114, 49, 114, 0.50), rgba(114, 49, 114, 0.20), rgba(114, 49, 114, 0.10), var(--div-background));'
            }
            if(this.playlist == 'descobertas'){
                return 'background-image: linear-gradient(to bottom, rgba(255, 72, 0, 0.7), rgba(255, 72, 0, 0.60), rgba(255, 72, 0, 0.50), rgba(255, 72, 0, 0.20), rgba(255, 72, 0, 0.10), var(--div-background));'
            }
        },
    },

}
</script>
<style scoped>
:root {
    --green: #1ed760;
    --font-color: #a7a7a7;
    --font-color-hover: #fff;
    --div-background: #121212;
    --div-background-2: #1a1a1a;
    --background-highlight: #242424;
    --background: #000;
    --background-hover: hsla(0, 0%, 100%, .07);
}

.window-home {
    width: 66vw;
    height: 84vh;
    border-radius: 10px;
    background-color: var(--div-background);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
}

.background-container {
    padding: 1vw 1vw 0 1vw;
    border-radius: 10px 10px 0 0;
    
}

.nav-btn {
    display: flex;
    color: var(--font-color);
    justify-content: space-between;
    align-items: center;
}

.btn {
    display: flex;
    gap: 1vw;
    height: 5vh;
    align-items: center;
}

.next,
.previous {
    background-color: #00000050;
    border-radius: 50%;
    font-size: 2.1em;
    cursor: pointer;
}

.next:hover,
.previous:hover {
    color: var(--font-color-hover);
}

.user-btn {
    display: flex;
    gap: 1vw;
    align-items: center;
}

.img-user,
.notification,
.group {
    height: 4vh;
    background-color: #000;
    border-radius: 50%;
    padding: 0.4vh;
    cursor: pointer;
}

.group {
    width: 3.8vh;
}

.group:hover,
.notification:hover {
    color: var(--font-color-hover);
}

.img-user:hover {
    scale: 1.1;
}

.greeting {
    color: var(--font-color-hover);
    font-size: 2em;
    font-weight: 700;
    letter-spacing: -2px;
    margin: 2vh 1vw 2vh 0;
}

.playlist-container {
    display: flex;
    width: 100%;
    gap: 1vw;
}

.playlist-collumn {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 100%;
}

.playlist {
    height: 10vh;
    border-radius: 5px;
    color: var(--font-color-hover);
    font-weight: 600;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    gap: 1vw;
    background: #a7a7a730;
}

.playlist:hover {
    background: #a7a7a760;
    cursor: pointer;
}

.img-thumb {
    height: 100%;
    border-radius: 5px;
}

.recommendation-for {
    font-size: 1.4em;
    color: var(--font-color-hover);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4vh 1vw;
}

.show-more {
    color: var(--font-color);
    font-size: 0.5em;
}

.recommendation-for>div:hover {
    text-decoration: underline 2px;
    cursor: pointer;
}

.recommendation {
    display: flex;
    gap: 1.5vw;
    align-items: center;
    margin: 0 1vw;
}

.recommendation-card {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    height: 40vh;
    width: 20vw;
    border-radius: 5px;
    background-color: var(--div-background-2);
    align-items: center;
}

.recommendation-card:hover {
    background-color: var(--background-highlight);
    transition: ease-in-out;

}

.play-btn {
    padding: 1vh;
    background-color: #1ed760;
    border-radius: 50%;
    font-size: 2em;
    cursor: pointer;
    position: absolute;
    top: 16vh;
    right: 2vw;
    z-index: 2;
    display: none;
}

.play-btn:hover {
    scale: 1.2;
    transition: ease-in-out;
}

.play-container {
    position: absolute;
    width: 100%;
    height: 98%;
    z-index: 0;
}

.play-container:hover>.play-btn {
    display: block;
}

.thumb-recommendation {
    height: 23vh;
    width: 11vw;
    margin: 1vw 0;
    border-radius: 5px;
}

.title {
    color: var(--font-color-hover);
    font-weight: 700;
    width: 11vw;
}

.content {
    font-size: 0.8em;
    font-weight: 600;
    color: var(--font-color);
    margin-top: 1vh;
    line-height: 3vh;
    display: flex;
    flex-wrap: wrap;
}
</style>
