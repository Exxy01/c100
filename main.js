var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();
function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    speak();
if(Content=="take my selfie"){
    console.log("taking selfie-----");
    speak();
};
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text_box").value;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this)
    Webcam.attach(camera);
    setTimeOut(function(){
        take_snapshot();
    })
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
var camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src ="'+data_uri+'">';
    })
}

function setTimeoutButton(){
    setTimeout(
    function(){
        alert("set TimeOut Button");
    }, 3000);
    
}

