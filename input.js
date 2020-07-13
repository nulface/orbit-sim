function mouseDragged() {
if(sweep){
  if (mouseX >= lowBoundX && mouseX <= highBoundX && mouseY <= highBoundY && mouseY >= lowBoundY) {

    var data = {
      x: mouseX,
      y: mouseY
    }
    socket.emit('mouse', data);

    if (mouseX >= lowBoundX && mouseX <= highBoundX && mouseY <= highBoundY && mouseY >= lowBoundY) {
      console.log("new body");
      var moons = new Hbody(mouseX + random(-2, 2), mouseY + random(-2, 2), Vix, Viy, Mi, Mi);
      Bodies.push(moons);
    }
  }
}
}


function mouseClicked() {
if(!sweep){
  if (mouseX >= lowBoundX && mouseX <= highBoundX && mouseY <= highBoundY && mouseY >= lowBoundY) {

    if (triple) {
      var inc = TWO_PI / 3;
      for (var i = 0.1; i <= TWO_PI; i += inc) {
        var moons = new Hbody(mouseX + cos(i) * scl, mouseY + sin(i) * scl, cos(i+ HALF_PI) * Vi, sin (i + HALF_PI) * Vi, Mi, Mi);
        Bodies.push(moons);
        penta = false;
      }

    }
    if (penta) {
      var inc = TWO_PI / 5;
      for (var i = 0.1; i <= TWO_PI; i += inc) {
        var moons = new Hbody(mouseX + cos(i) * scl, mouseY + sin(i) * scl, cos(i+ HALF_PI) * Vi, sin (i + HALF_PI) * Vi, Mi, Mi);
        Bodies.push(moons);
        triple = false;
      }

    }
    if (single) {

      var moons = new Hbody(mouseX, mouseY, Vix, Viy, Mi, Mi);
      Bodies.push(moons);

    }
    if (gmouse) {

    }
  }
}
}



function keyPressed() {

  if (key === 'G') {
    Mi = 1000;
    console.log(Mi);
  }

  if (key === 'T') {
    Mi = 1;
    console.log(Mi);
  }

  if (key === 'Y') {
    console.log(Mi);
    Mi += 100;
    console.log(Mi);

  }
  if (key === 'H') {
    console.log(Mi);
    if (Mi > 0) {
      Mi -= 100;
      if (Mi < 0) {
        Mi = 1;
      }
    }

    if (Mi < 0) {
      Mi = 0.7;
    }
    console.log(Mi);

  }

  if (key === ' ') {
    Bodies = [];
  }
  if (keyCode === RIGHT_ARROW) {
    Vix += 0.1;
    console.log(Vix);
  }
  if (keyCode === LEFT_ARROW) {
    Vix -= 0.1;
    console.log(Vix);
  }
  if (keyCode === UP_ARROW) {
    Viy -= 0.1;
    console.log(Viy);
  }
  if (keyCode === DOWN_ARROW) {
    Viy += 0.1;
    console.log(Viy);

  }

  if (key === 'V') {
    Viy = 0;
    Vix = 0;
  }

}
