
function setup() {

canvas = createCanvas(400,400);

canvas.position(500,250);

video = createCapture(VIDEO);

video.hide();

tint_color = ""

}

function draw() {

tint(tint_color);

image(video, 0, 0, 640, 580);

}

function take_snapshot() {

save('Ashwanth.png')

}

function filter_color() {

tint_color = document.getElementById("color_name").value;

}