// const btn = document.querySelector(".talk");
// const content = document.querySelector(".content");
// const play = document.querySelector("#three");

// const greeting = ["I am fine thank you", "You are my king", "Hey My friend"];
// const date = `The  is ${new Date()} Hope i helped you`;
// const time = `The time is ${}`

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onstart = function () {
//   console.log("voice is activated, you can speak to microphoneee");
// };
// recognition.onresult = function (event) {
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;
//   content.textContent = transcript;
//   readOutLoud(transcript);
// };

// //add the Listener to the btn

// btn.addEventListener("click", () => {
//   recognition.start();
// });

// function readOutLoud(message) {
//   const speech = new SpeechSynthesisUtterance();
//   speech.text = message;
//   speech.volume = 1;
//   speech.rate = 0.8;
//   speech.pitch = 1;
//   window.speechSynthesis.speak(speech);
// }
// document.querySelector("#two").addEventListener("click", function () {
//   content.textContent = "";
// });
// const copyBtn = document.querySelector("#one");
// copyBtn.addEventListener("click", function copy() {
//   let range = document.createRange();
//   console.log(range);
//   range.selectNode(content);
//   window.getSelection().removeAllRanges();
//   window.getSelection().addRange(range);
// });
  
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const play = document.querySelector("#three");

const greeting = ["I am fine thank you", "You are my king", "Hey My friend"];
const now  = new Date();
const date = `${now.getDate()}/${now.getMonth() +1}/${now.getFullYear()}`;
const time = `The time is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
const who = "Srinath created me"
const how = "I was created with HTML CSS and JavaScript"
const answer = "Elon Musk is the owner of tesla"
const answer2 = "Sundar Pichai is the CEO of google"
const ytopen = "Opening youtube"
const ytopenwl = "Opening Your watch later video";
const facebook = "Opening facebook"
const openmy = "Opening your youtube channel"
const openWhatsapp = "Opening whatsapp"
const cjsc  = "Opening the complete Javascript course"
const hry = ['I am fine thank you', 'I am fine how about you', 'Awesome dude!']
const ift = ['So happy to hear that', 'Oh Awesome!', 'Great!']
const darkMode = 'Applying dark mode'
const lightmode  = 'Applying light mode'
const bestfriend = 'Gautham, Pradhip, Bhojaraj, Dharshan, Vaseegaran, Anbu, Surjith, Amirta Ganesh, Muruhavel, Rishanth'

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
  if(message.includes("what's today's date" || "today's date")){
    speech.text = date
  }
    if (message.includes("who created you")) {
      speech.text = who;
    }
  if (message.includes('who are your best friends')){
    speech.text = bestfriend
  }
  message.toLowerCase()
    if (message.includes("how you are built")) {
      speech.text = how;
    }
    if (message.includes("who is the owner of Tesla")) {
      speech.text = answer;
    }
    if (message.includes("who is the CEO of Google")) {
      speech.text = answer2;
    }
    if (message.includes("open YouTube")) {
      window.open("https://youtube.com", "_blank");
      speech.text = ytopen;
    }
    if (message.includes("open my Watch Later video")){
      window.open(
        "https://www.youtube.com/watch?v=377AQ0y6LPA&ab_channel=JavaScriptMastery",
        "_blank"
      );
      speech.text = ytopenwl;
    }
    if (message.includes("open Facebook" || 'open meta')){
      window.open(
        "https://www.facebook.com", "_blank"
      )
      speech.text = facebook;
    }
    if(message.includes("open my YouTube channel")){
      window.open("https://www.youtube.com/channel/UCRBrtTVdswb24WbhMPT7lZQ");
      speech.text = openmy;
    }
        if (message.includes("open WhatsApp")) {
          window.open("https://web.whatsapp.com");
          speech.text = openWhatsapp;
        }
    if(message.includes("open the complete JavaScript course")){
    window.open(
    "https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648747#overview"
    );
    speech.text = cjsc;
    }
  if (message.includes("all my friends are")){
    window.open("https://www.youtube.com/watch?v=5Ns58cF9z68")
  }
    if(message.includes("how are you")){
      speech.text = hry[Math.trunc(Math.random() * hry.length)] 
    }
    if(message.includes('I am fine')){
      speech.text = ift[Math.trunc(Math.random() * ift.length)]
    }
    if(message.includes('apply dark mode')){
      document.body.style.background = "black";
      speech.text = darkMode;
    }
  if(message.includes("search youtube for")){
     window.open(`https://www.youtube.com/results?search_query=${message}`)
   }
  if(message.includes("what is your name")){
       speech.text = 'My Name is DRACX'
     }
    if(message.includes('apply light mode')){
      document.body.style.background = "white";
      speech.text = lightmode;
    }
    if(message.includes('hi' || 'hello' || 'hi Hetosa')){
      speech.text = 'Hello dude'
    }
  if(message.includes('time')){
    speech.text = time;
   }
  speech.volume = 1;
  speech.rate = 1;
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

