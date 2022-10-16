// typeof
function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}

//truthiness
const el = document.getElementById('idk'); // const el: HTMLElement | null
if (el) {
  el; //HTMLElement
} else {
  el; // null
}

function printLetter(word?: string) {
  //word: string | undefined
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('You did not pass in a word!');
  }
}

// equaltiy
//x,y가 서로 같아지려면 타입이 string일 경우밖에 없음. => 타입 좁히기
function thisDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

//in
interface TVShow {
  title: string;
  numEpisode: number;
  episodeDuration: number;
}

interface Movie {
  title: string;
  duration: number;
}

function getDuration(media: TVShow | Movie) {
  if ('duration' in media) {
    return media.duration;
  }
  return media.numEpisode * media.episodeDuration;
}

console.log(getDuration({ title: 'getOut', duration: 140 }));
console.log(getDuration({ title: 'spongeBob', numEpisode: 80, episodeDuration: 10 }));
