const btnMusic = document.getElementById('btn-music');
const text = document.getElementById('text')
/* Setting the audio file and setting the loop */
const audio = new Audio('bg-music.mp3')
audio.loop = true;

if (localStorage.getItem('audioCurrentTime' === null)) {
  localStorage.setItem('audioCurrentTime', '0')
} else {
  audio.currentTime = getCurrentTime();
}

setInterval(() => {
  setCurrentTime(audio.currentTime)
}, 1000)



function getCurrentTime(){
  return localStorage.getItem('audioCurrentTime')
}


function setCurrentTime(currentTime){
  localStorage.setItem('audioCurrentTime', currentTime)
}
/* Do what the button says */

function playMusic(buttonText){
  if (buttonText === "Reproducir Música") {
    audio.currentTime = getCurrentTime()
    audio.play();
    btnMusic.innerText = 'Pausar Música'
    text.innerHTML = 'Reproduciendo: ¿Qué paso con el fantasma del descenso? - PinoVersiona'
  }
  if (buttonText === "Pausar Música") {
    audio.pause();
    btnMusic.innerHTML = 'Reproducir Música';
    text.innerText = 'No se está reproduciendo nada';
    setCurrentTime(audio.currentTime)
  }
}

/* Listening to the click */

btnMusic.addEventListener('click', () => {
  playMusic(btnMusic.innerText)
})