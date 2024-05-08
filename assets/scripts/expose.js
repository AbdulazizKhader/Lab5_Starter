// expose.js
window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO
  //don't want it to change so use const
  const hornMain = document.getElementById("horn-select"); //input is id
  const hornPic = document.querySelector("img"); //gets the first image
  const volumePic = document.querySelector("div#volume-controls img"); //gets the image inside the div with volume-controls id
  const volumeSoundIcon = document.getElementById("volume");
  const audio = document.querySelector("audio");
  const audioButton = document.querySelector("button"); //need to configure the button

  hornMain.addEventListener("change", () => {
    let hornPicChoice = hornMain.value;
    hornPic.src = "assets/images/" + hornPicChoice + ".svg";
    hornPic.alt = hornPicChoice;
    audio.src = "assets/audio/" + hornPicChoice + ".mp3";
  })

  volumeSoundIcon.addEventListener("change", () => {
    let sound = volumeSoundIcon.value;
    if(sound == 0){
      volumePic.src = "assets/icons/volume-level-0.svg";
      volumePic.alt = "Volume level 0"
    }
    if(sound > 0 && sound < 33){
      volumePic.src = "assets/icons/volume-level-1.svg";
      volumePic.alt = "Volume level 1";
    }
    if(sound >= 33 && sound < 67){
      volumePic.src = "assets/icons/volume-level-2.svg";
      volumePic.alt = "Volume level 2";
    }
    if(sound >= 67){
      volumePic.src = "assets/icons/volume-level-3.svg";
      volumePic.alt = "Volume level 3";
    }
    audio.volume = sound / 100;
  })

  audioButton.addEventListener("click", () => {
    if(hornMain.value === "party-horn"){
      jsConfetti.addConfetti();
    }
    audio.play();
  })
  
}
