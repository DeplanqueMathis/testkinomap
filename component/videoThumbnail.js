export default {
    props: {
        video: Object,
        index: Number,
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        distanceConversion: function (distance) {
            try {
                return (parseFloat(distance) / 1000).toFixed(2) + 'km';
            }
            catch (e){
                console.log(e);
                return 'Distance indéterminée';
            }
        },
        durationConversion: function (duration) {
            try {
                return Math.round(parseFloat(duration) / 60) + ' min';
            }
            catch (e){
                console.log(e);
                return 'Durée indéterminée';
            }
        },
        keyDown: function (event) {
            if(event.keyCode === 13){
                this.$root.playVideo(event.currentTarget.dataset.video);
            }
        },
        click: function (event) {
            this.$root.playVideo(event.currentTarget.dataset.video);
        },
    },
    template: `
    <div :data-video="index" class="video-item" @keydown="(event) => { this.keyDown(event) }" @click="(event) => { click(event) }">
        <div class="video-thumbnail">
            <img v-if="!video.imgError" :src="video.data.thumbnails.medium" @error="video.imgError = true">
            <img v-else src="media/placeholder.png">
            <div class="video-informations">
                <div class="video-informations-container">
                    <h5 class="video-title" v-html="video.data.name"></h5>
                    <span class="video-distance" v-html="distanceConversion(video.data.distance)"></span>
                    <span class="video-duration" v-html="durationConversion(video.data.duration)"></span>
                </div>
            </div>
        </div>
    </div>`
}