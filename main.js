var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {

document.getElementById("textarea").innerHTML = ""
recognition.start()

}

recognition.onresult=function run(event){

var content=event.results[0][0].transcript
document.getElementById("textarea").innerHTML= content

if(content=="take my selfie")
{
    console.log("takingselfie");
    speak()
}

}

function speak() {

var synth=window.speechSynthesis
speak_data="takinf your selfie in 5 seconds"ś

}