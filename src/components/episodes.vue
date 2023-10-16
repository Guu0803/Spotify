<template>
    <div class="container">
        <div class="episode-container">
            <img :src="albumCover" class="thumb">
            <div>
                <div class="title">
                    {{ episodeName }}
                </div>
                {{ name }}
                <div class="description">
                    {{ description }}
                </div>
            </div>
        </div>
        <div class="info">
            <div class="btn-container">
                <span class="material-icons play" v-if="play">
                    pause
                </span>
                <span class="material-icons play " v-else>
                    play_arrow
                </span>
            </div>
            <div class="added">
                {{ added }}
                <span class="material-icons dot">
                    fiber_manual_record
                </span>
                Já ouvi
                <span class="material-icons">
                    done
                </span>
            </div>
            <span class="material-symbols-sharp share">
                ios_share
            </span>
            <span class="material-icons download">
                south
            </span>
            <span class="material-icons done">
                done
            </span>
            <span class="material-symbols-sharp horiz">
                more_horiz
            </span>
        </div>

    </div>
</template>
<script>
export default {
    name: 'episodeComponent',
    props:['episodeName', 'name', 'albumCover', 'added', 'description']

}
</script>
<style scoped>
.container {
    padding: 1vw;
    border-radius: 5px;
    cursor: pointer;
}
.container:hover {
    background-color: #a7a7a730;
}
.thumb {
    height: 15vh;
    border-radius: 5px;
}

.episode-container {
    display: flex;
    align-items: center;
    gap: 1vw;
    color: var(--font-color-hover);
    font-weight: 500;
    margin-bottom: 1vh;
}

.episode-container>div {
    font-size: 0.8em;
    font-weight: 700;
}

.title {
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 1vh;
}

.description {
    color: var(--font-color);
    font-weight: 500;
    padding: 0;
    margin-top: 1vh;
    line-height: 2.5vh;
}

.info {
    display: flex;
    align-items: center;
    gap: 1vw;
    margin: 1vw 0 0 8.5vw;
    width: 90%;
}
.container:hover>.info>.share, .container:hover>.info>.download, .container:hover>.info>.horiz{
    opacity: 1;
}
.btn-container {
    color: #000;
    background-color: white;
    border-radius: 50%;
}

.play {
    font-size: 1.5em;
    padding: 0.3vh;
    font-size: 1.7em;
}

.added {
    display: flex;
    gap: 1vh;
    align-items: center;
    color: var(--font-color);
    font-size: 0.8em;
    font-weight: 500;
    margin-left: 2vw;
}

.dot {
    font-size: 0.1em;
}

.share {
    color: var(--font-color);
    cursor: pointer;
    margin-left: 15vw;
    opacity: 0;

}

.download {
    border: 2px solid var(--font-color);
    border-radius: 50%;
    padding: 0.3vh;
    cursor: pointer;
    color: var(--font-color);
    font-size: 1em;
    margin: 0 1vw;
    opacity: 0;

}

.share:hover,
.download:hover {
    color: var(--font-color-hover);
    border-color: var(--font-color-hover);
}

.done {
    background-color: var(--green);
    border-radius: 50%;
    font-weight: 700;
    padding: 0.3vh;
    font-size: 1.3em;
    color: #000;
    cursor: pointer;
}

.horiz {
    color: var(--font-color);
    cursor: pointer;
    margin-left: 1vw;
    opacity: 0;
}</style>