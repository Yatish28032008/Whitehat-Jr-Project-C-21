var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);  
  fill(204, 101, 192, 127);
       sun = createSprite(50,50,100,100);
      sun.scale=0.2;
      sun.shapeColor="yellow";
      sun.setCollider("circle",0,0,200);

     mercury= createSprite(100,100,50,50);
     mercury.shapeColor="grey";

     venus  = createSprite(150,150,50,50);
     venus.shapeColor="grey";

     earth= createSprite(200,200,50,50);
     earth.shapeColor="blue";

     mars= createSprite(250,250,50,50);
     mars.shapeColor="orange";

      jupiter= createSprite(300,300,50,50);
      jupiter.shapeColor="white";

      saturn= createSprite(350,350,50,50);
      saturn.shapeColor="musk";

      uranus= createSprite(400,400,50,50);
      uranus.shapeColor="green";

      neptune= createSprite(450,450,50,50);
      neptune.shapeColor="blue";


    
}

function draw() {
background("black")
 drawSprites();
 if (frameCount%120===0){
  sun.scale=sun.scale+0.1;
  }
  if(sun.collide(mercury)){
    venus.destroy();
  }
  if(sun.collide(venus)){
    venus.destroy();
  }
  if(sun.collide(earth)){
    earth.destroy();
  }
  if(sun.collide(mars)){
    mars.destroy();
  }
  if(sun.collide(jupiter)){
    jupiter.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
    neptune.destroy();
  }
}

