// explore.js

window.addEventListener('DOMContentLoaded', init);

const voiceSelect = document.getElementById("voice-select");
let voices = [];
const talk = document.querySelector("button");
const face = document.querySelector("img");


function populateVoiceList(){
  voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    voiceSelect.appendChild(option);

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function startTalking(){
  //creating the sentence to say
  const textToSay = document.getElementById("text-to-speak");
  const sentence = new SpeechSynthesisUtterance(textToSay.value);


  //making the synthesizer to say it
  sentence.voice = voices[voiceSelect.selectedIndex - 1];
  sentence.addEventListener("start", (event) => {
    face.src = 'assets/images/smiling-open.png';
  });  
  sentence.addEventListener("end", (event) => {
    face.src = 'assets/images/smiling.png';
  }); 
  speechSynthesis.speak(sentence);
}

function init() {
  // TODO
  talk.onclick = startTalking;
}
