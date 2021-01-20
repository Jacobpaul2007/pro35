//Create variables here
var dog,happyDog;
var database;
var foods,foodStock;
var dog_image,happyDog_image;

function preload(){
  dog_image = loadImage("images/dogImg.png");
  happyDog_image = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250);
  dog.addImage("dog",dog_image);
  
  foodStock=database.ref("food");
  foodStock.on("value",realStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage("happyDog",happyDog_image);
  }

  fill("white");
  stroke("black");
  textSize(2);
  text("foodStock");

  drawSprites();
  //add styles here

}

function readStock(data){
  foods = data.val();

}

function writeStock(x){

  if (x<=0){
    x=0;
  }
  else {
    x=x-1;
  }

  database.ref("/").update({
    foods:x
  })
}

