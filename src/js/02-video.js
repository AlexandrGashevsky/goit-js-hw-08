import Player from '@vimeo/player';
import throttle from "lodash/throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on("timeupdate", throttle(() => {
    player.getCurrentTime().then((time) => {
        console.log(time);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
    });
}, 1000));

const start = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
player.setCurrentTime(start);
