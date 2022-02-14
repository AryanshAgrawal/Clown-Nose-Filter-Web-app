noseX=0;
noseY=0;
function preload() {
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
fill(255,255,255);
stroke(255,0,0);

image(clown_nose,noseX,noseY,30,30);
}

function takesnapshot() {
    save('Myfiterimage.png');
}
function modelloaded() {
    console.log("poseNet is initialized");
}
function gotposes(results) {
    if (results.length > 0) {
        //console.log(results);
        console.log("nosex=" + results[0].pose.nose.x);
        console.log("nosey=" + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-12;
        noseY=results[0].pose.nose.y-7;
    }

}