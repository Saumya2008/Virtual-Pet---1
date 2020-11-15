//Create variables here
var dog,happyDog ,dogImg , dogImg1 ;
var database;
var foodS,foodStock;
var database;

function preload()
{
  dogImg = loadImage ("images/dogImg.png");
  dogHappy= loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(250,300,30,30);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  foodStock  = database.ref("Food");  
   foodStock.on("value",readStock);  
   textSize(20);

}

function draw() {  
   background(46,139,87);
       
   if (keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);
   }

  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("Black");
  text("Food remaining : " , +foodS,170,200);
  textSize(13);
  text("Note: press UP_ARROW key to feed drago the milk!",130,10,300,20);

}

//function to read values from DB.
function readStock(data){
  foodS=data.val();
}

//function to write values from DB.
function writeStock(x){
if(x<=0){
    x=0;
 } else {
   x=x-1;
 }  

  database.ref("/").update({
    Food:x
  })
}



