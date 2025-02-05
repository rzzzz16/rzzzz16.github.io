
let faceMesh;
let video;
let faces = [];
let filter;
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
  faceMesh = ml5.faceMesh(options);
  const selectedFilter = localStorage.getItem('selectedFilter');
    if (selectedFilter) {
        filter = loadImage(`movingImages/${selectedFilter}.png`);
    }
}

function setup() {
  createCanvas(320, 240);

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // Draw the webcam video
  image(video, 30, 10, width, height);
  if (filter) {
  // Draw the faces' bounding boxes
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    let x = face.box.xMin;
    let y = face.box.yMin;
    let w = face.box.width;
    let h = face.box.height;
    
    image(filter, x+30, y, w,h);

    stroke(0, 255, 0);
    fill(0, 255, 0, 50);
    rect(x+30, y, w, h);
    text(i, x+30, y - 10);

    // Draw the center of the face
    
    
  }
}
}

function gotFaces(results) {
  faces = results;
}
