const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b_img;
var player;
var p_img;
var gameState=0;
var score=0;
var arrow1,arrow2,arrow3,arrow4,arrow5
var arrows=[]

function preload(){
b_img=loadImage("background page.png")
p_img=loadImage("player.png")
}

function setup(){
  var canvas=createCanvas(displayWidth-20,displayHeight-30);
  background(b_img);
  engine=Engine.create();
  world=engine.world
  form=new Form();
  arrow1=new Arrow()
  arrow2=new Arrow()
  arrow3=new Arrow()
  arrow4=new Arrow()
  arrow5=new Arrow()
  

}
function draw(){
form.display();
}