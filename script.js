console.log("Welcome to Spotify")
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Salame-e-Ishq", filePath: "song/10.mp3", coverPath: "covers/1.jpg"},
    {songName:"Salame-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/2.jpg"},
    {songName:"Salame-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/3.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/4.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/5.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/6.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/7.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/8.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/9.jpg"},
    {songName:"Salame-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/10.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }
})
//Listen to events
myProgressBar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    //update Seekbar
    
})