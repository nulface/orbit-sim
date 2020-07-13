function setup() {

  socket = io.connect('http://192.168.1.5:3000');
  socket.on('mouse', newBody);

  lowBoundX = 10;
  lowBoundY = 10;
  highBoundX = windowWidth - 10;
  highBoundY = windowHeight - 120;

  createCanvas(highBoundX + lowBoundX, highBoundY + lowBoundY);

  background(20);

  //frameRate(FR);
}

function draw() {
//frameRate(FR);
  //console.log(Bodies.length);

  //console.log(mouseX - pmouseX);
  Vix = (mouseX - pmouseX) / 10;
  Viy = (mouseY - pmouseY) / 10;
  //line(mouseX, mouseY, pmouseX, pmouseY);


  if (trails) {
    fill(255, 20);
  } else {
    background(20);
  }


  Mip = Mi;

  Mi = gravitySlider.value;
  scl = Tdist.value;
  Vi = Vinit.value;


  if (Mi != Mip) {console.log(Mi);
  }



  for (var i = Bodies.length - 1; i >= 0; i--) {


    Bodies[i].move();

    if (!cols) {
      if (isTorus) {
        if (Bodies[i].x >= highBoundX) {
          Bodies[i].x = lowBoundX;
        }
        if (Bodies[i].x <= lowBoundX) {
          Bodies[i].x = highBoundX;
        }
        if (Bodies[i].y >= highBoundY) {
          Bodies[i].y = lowBoundY;
        }
        if (Bodies[i].y <= lowBoundY) {
          Bodies[i].y = highBoundY;
        }
      } else {
        if (Bodies[i].x > highBoundX ||
          Bodies[i].x < lowBoundX ||
          Bodies[i].y > highBoundY ||
          Bodies[i].y < lowBoundY) {
          Bodies.splice(i, 1);
        }
      }

    } else {
      if (Bodies[i].x >= highBoundX) {
        Bodies[i].vx = -Bodies[i].vx/2;
      }
      if (Bodies[i].x <= lowBoundX) {
        Bodies[i].vx = -Bodies[i].vx/2;

      }
      if (Bodies[i].y >= highBoundY) {
        Bodies[i].vy = -Bodies[i].vy/2;
      }
      if (Bodies[i].y <= lowBoundY) {
        Bodies[i].vy = -Bodies[i].vy/2;
      }
    }

    for (var f = i + 1; f < Bodies.length; f++) {

      stroke(255);
      nBody(Bodies[i], Bodies[f]);
      if (showGraph) {
        fill(40, 120, 60);
        line(Bodies[i].x, Bodies[i].y, Bodies[f].x, Bodies[f].y);
      }
    }
  } // i loop

} ///end of draw loop
