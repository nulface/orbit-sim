function pageBtn(s) {
  switch (s) {
    case 'b1':
      console.log(s);
      Bodies = [];
      //background(20);
      break;
    case 'b2':
      console.log(s);
      Mi = 1;
      break;
    case 'b3':
      console.log(s);
      Mi = 1000;
      break;
    case 'b4':
      console.log(s);
      Vix = 0;
      Viy = 0;
      break;

      case 'penta':
      triple = false;
      penta = true;

      gmouse = false;
      sweep = false;
      break;

    case 'cl':
      background(20);
      break;

      case 'single':
      triple = false;
      penta = false;
      single = !single;
      gmouse = false;
      sweep = false;
      break

      case 'gmouse':
      triple = false;
      penta = false;
      single = false;
      gmouse = true;
      sweep = false;
      break;

      case 'sweep':
      triple = false;
      penta = false;
      single = false;
      gmouse = false;
      sweep = true;
      break;

    case 'trails':

      trails = !trails;

      break;

    case 'cols':
      cols = !cols;
      break;

    case 'triple':
    triple = true;
    penta = false;
    single = false;
    gmouse = false;
    sweep = false;
      break;


    case 'point':
      ispoint = !ispoint;
      break;


    case 'b5':
      for (var x = gridSpace; x < highBoundX; x += gridSpace) {
        for (var y = gridSpace; y < highBoundY; y += gridSpace) {
          var moons = new Hbody(x, y, 0, 0, 5097.2, 10);
          Bodies.push(moons);
        }
      }
      break;

    case 'b6':
      if (showGraph) {
        showGraph = false;
      } else {
        showGraph = true;
      }

      break;

    case 'b7':
      if (showVelocity) {
        showVelocity = false;
      } else {
        showVelocity = true;
      }

      break;

    case 'b8':
      if (isTorus) {
        isTorus = false;
      } else {
        isTorus = true;
      }
      break;

    case "x++":
      Vix += 0.1;
      break;

    case "x--":
      Vix -= 0.1;
      break;

    case "y++":
      Viy += 0.1;
      break;

    case "y--":
      Viy -= 0.1;
      break;

  }


}
