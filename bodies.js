//takes objects as parameters
function nBody(ini, fin) {
  //console.log(ini.vy);
  this.Fg = G * fin.m * ini.m;
  this.num1 = fin.x - ini.x;
  this.num2 = fin.y - ini.y;
  this.theta1 = atan2(this.num2, this.num1);

  this.R = sqrt((this.num1 * this.num1) + (this.num2 * this.num2));
  this.Fg = this.Fg / (this.R * this.R);



  if (cols) {

    if (this.R < (ini.m) / 100 + (fin.m) / 100) {

      ini.vx -= (cos(this.theta1) * repel * this.Fg) / ini.m;
      ini.vy -= (sin(this.theta1) * repel * this.Fg) / ini.m;

      fin.vx += (cos(this.theta1) * repel * this.Fg) / fin.m;
      fin.vy += (sin(this.theta1) * repel * this.Fg) / fin.m;
    } else {

      ini.vx += (cos(this.theta1) * this.Fg) / ini.m;
      ini.vy += (sin(this.theta1) * this.Fg) / ini.m;

      fin.vx -= (cos(this.theta1) * this.Fg) / fin.m;
      fin.vy -= (sin(this.theta1) * this.Fg) / fin.m;
    }

  } else {

    ini.vx += (cos(this.theta1) * this.Fg) / ini.m;
    ini.vy += (sin(this.theta1) * this.Fg) / ini.m;

    fin.vx -= (cos(this.theta1) * this.Fg) / fin.m;
    fin.vy -= (sin(this.theta1) * this.Fg) / fin.m;

  }





  //stroke(255);
  if (showVelocity) {
    stroke(255, 0, 0)

    line(ini.x, ini.y, ini.x + (ini.vx * 10), ini.y + (ini.vy * 10));
  }


}


function Hbody(hx, hy, hvx, hvy, hr, mass) {
  this.x = hx;
  this.y = hy;

  this.vx = hvx;
  this.vy = hvy;

  this.m = mass;

  //this.Ax = 0;
  //this.Ay = 0;

  this.move = function() {


    //this.vx += this.Ax;
    //this.vy += this.Ay;
    this.x += this.vx;
    this.y += this.vy;


    if (ispoint) {
      //stroke(20);
      //point(this.x, this.y);
      noStroke();
      if(trails){
      fill(200, 40, 40, 25);
      ellipse(this.x, this.y, 3, 3);
    }else{
      fill(255, 100);
      ellipse(this.x, this.y, 5, 5);
    }

    } else {
      noStroke();
      ellipse(this.x, this.y, int(this.m / 10), int(this.m / 10));
    }
  }
}
