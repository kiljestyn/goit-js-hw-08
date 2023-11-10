import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { getFromLS, saveTolS } from './helpers';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    const name = 'videoplayer-current-time';
    const time = data.seconds;
    saveTolS(name, time);
  }
  const newTime = Number(getFromLS('videoplayer-current-time'));
  player.setCurrentTime(newTime);