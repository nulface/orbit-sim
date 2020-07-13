function Map(varies, jointly) {
  //y   = K x
  //y/x = K

  var k = varies / jointly;
  //console.log(k);

  this.con = function(inp) {
    return inp * k;
  }
}

function newBody(data) {

  if (data.x >= lowBoundX && data.x <= highBoundX && data.y <= highBoundY && data.y >= lowBoundY) {
    console.log("new body");
    var moons = new Hbody(data.x, data.y, Vix, Viy, Mi, Mi);
    Bodies.push(moons);
  }
}
