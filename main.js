moustachex = 0;
moustachey = 0;
function preload(){
moustache = loadImage("moustache.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log('model has loaded');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        moustachex = results[0].pose.moustache.x-15;
        moustachey = results[0].pose.moustache.y-15;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,moustachex,moustachey,30,30);
}
function take_snapshot(){
    save ("filter.png");  
}