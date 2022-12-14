
setTimeout(function(){
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking your selfie in 10 seconds";
    utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
},5000);

function take_snapshot() {
    console.log(img_id)
    Webcam.snap(function(data_uri) {
     if(img_id=="selfie1") {
        document.getElementById("result1").innerHTML = '<image id="selfie1" src="'+data_uri+'"/>'
     }

     if(img_id=="selfie2") {
        document.getElementById("result2").innerHTML = '<image id="selfie2" src="'+data_uri+'"/>'
     }

     if(img_id=="selfie3") {
        document.getElementById("result3").innerHTML = '<image id="selfie3" src="'+data_uri+'"/>'
     } 
    });
}


