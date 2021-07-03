const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const play = document.querySelector("#three");

const greeting = ["I am fine thank you", "Hey i am fine dude];
const date = `The  is ${new Date()} Hope i helped you`;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated, you can speak to microphoneee");
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add the Listener to the btn

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
   speech.text = message;
  if(message.includes("today's date")){
    speech.text = date;
  }
  if(message.includes("How are you")){
  const result = greetings[Math.floor(Math.random() * greetings.length)];
  speech.text = result;
 }
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
document.querySelector("#two").addEventListener("click", function () {
  content.textContent = "";
});
const copyBtn = document.querySelector("#one");
copyBtn.addEventListener("click", function copy() {
  let range = document.createRange();
  console.log(range);
  range.selectNode(content);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
});
