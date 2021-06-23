//create variables here
var dog , happyDog 
var database
var foodS, foodStock

function preload()
{
  //load images here
dogImg = loadImage("images,dogImg.png")
happyDogImg = loadImage("images,dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(100,200);
    happyDog = createSprite(300,200);
  
    dog.addImage("dog",dogImg)
    happyDog.addImage("happyDog",happyDogImg)

    database = firebase.database();

    foodStock=database.ref('Food');
    foodStock.on("value",readStock);

  }

function draw() {  

  drawSprites();
  //add styles here
  background(46, 139, 87);
   if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);
    }
textSize(10);

  }

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
