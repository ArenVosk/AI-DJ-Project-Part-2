song = "";

function preLoad(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(520, 300);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function play()
{
    song.play();
}