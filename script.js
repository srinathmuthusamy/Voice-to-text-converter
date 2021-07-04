const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const play = document.querySelector("#three");

const greeting = ["I am fine thank you", "You are my king", "Hey My friend"];
const date = `The  is ${new Date()} Hope i helped you`;
const who = "Srinath created me"
const how = "I was created with HTML CSS and JavaScript"
const answer = "Elon Musk is the owner of tesla"
const answer2 = "Sundar Pichai is the CEO of google"

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
  if(message.includes("who created you")){
    speech.text = who;
  }
  if(message.includes("how you are built")){
    speech.text = how;
  }
  if(message.includes("who is the owner of Tesla")){
    speech.text = answer;
  }
  if(message.includes("who is the CEO of Google")){
    speech.text = answer2;
  }
  if(message.includes("open YouTube")){
    window.open("https://youtube.com", "_blank")
  }
  if(message.includes("hi")){
    recognition.start();
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
//Done by Srinath.Muthusamy 
