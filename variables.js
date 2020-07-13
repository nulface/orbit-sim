var btn;

var G = 6.67 / 100

var g = -9.8;

var Re = 6.371; //x10^3 km
var Rm = 1.737; //x10^3 km

var Me = 597.2; // x10^22 kg
var Mm = 7.3476; // x10^22 kg

var FR = 10;
//initial mass
var Mip;
var Mi = 475;

var Vix = 0;
var Viy = 0;

var Vi = 3;

var gridSpace = 100;

var Bodies = [];

var scl = 5.6;

var repel = 0.1;

var lowBoundX;
var lowBoundY;
var highBoundX;
var highBoundY;

var isTorus = false;
var showGraph = false;
var showVelocity = false;
var cols = true;
var triple = false;
var penta = true;
var single = false;
var gmouse = false;
var sweep = false;

var socket;

var trails = true;
var ispoint = true;
