
var isPlaying = true;
function togglePlay() {
    let myAudio = document.getElementById("song");
    let ButtonIcon = document.getElementById("button-song");
    isPlaying?myAudio.pause():myAudio.play();
    isPlaying?ButtonIcon.setAttribute("class","fa fa-volume-off sound-control fa-2x"):ButtonIcon.setAttribute("class","fa fa-volume-up sound-control fa-2x");

    isPlaying?isPlaying=false:isPlaying=true;
    console.log(myAudio);
};