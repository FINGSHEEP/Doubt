var hypnoticBall, database;
var position;

 
var x = 0 ; 
var z = 0;
var y = 600;
var l = 100 ;
var o = 100 ;

var bars , bars1 ;

var score ;  

var image1 ;

var speed =  3;
var speed1 = -3; 

function preload() {
  image1 = loadImage("Player.png") ;   
} 


function setup(){  
  database = firebase.database();
  console.log(database);
  createCanvas(600,600);      
   
  hypnoticBall = createSprite(200 , 200 , 10 , 10) ; 
  hypnoticBall.scale = 0.1 ;
  hypnoticBall.addImage("Player" , image1 ); 
  bars = new Bars() ;
  bars1 = new Bars(l ,o  , 20 ,20) ;
   
 // paddle = createSprite(200,200,200,20) ;
  
  //hypnoticBall.shapeColor = "red"; 


 
  // var paddlePosition = database.ref('paddle/position');
  // paddlePosition.on("value", readPosition , showError);

  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("orange");

  // hypnoticBall.x = hypnoticBallPosition ; 

  // if( hypnoticBall.x - bars.x < bars.width/2 + hypnoticBall.width/2) { 
  //     console.log("Hi");
  // }
  

    // We can increase the velocity of the player.  
    if(keyDown(LEFT_ARROW)){
        writePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(2,0);
    }                           
    else if(keyDown(UP_ARROW)){
        writePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+2);
    } 
 
    bars.display(); 
    bars1.display();
  
    // if(hypnoticBall > bars.w){
    //     console.log("hi");
    // }

     
    // scoring();
     
    drawSprites();

    fill(250, 0, 0);
    textSize(18);
    text("Score: "+ score, 0 , 100);  
    

    //SpawnBars();
    
    }



function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
} 


// function writePosition1(x1,y1) {
//   database.ref('paddle/position').set({
//     'x' : position.x1 + x ,
//     'y' : position.y1 + y 
//   })
// }

function readPosition(data){
  position = data.val();
  //console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
  // paddle.x  = position.x1 ;
  // paddle.y = position.y1 ;

}

function showError(){
  console.log("Error in writing to the database");
}   




      //    Spawnbars() {  
      //     if(frameCount % 60 === 0) {
        
          
      //          bars = createSprite(this.x , this.y , this.w , this.h) ;  
      //         bars.shapeColor = "blue";  
      //          bars1 = createSprite(this.x , this.y , this.w , this.h); 
      //         bars1.shapeColor = "red";   
              
      //         bars2 = createSprite(this.x , this.y , this.w , this.h) ;
      //         bars2.shapeColor = "purple"; 
        
      //         bars3 = createSprite(this.x , this.y , this.w , this.h);     
      //         bars3.shapeColor = "yellow"; 
        

        
        //   bars4 = createSprite(random(0,600) , 0 , random(2 , 20) , 200);
        
            //   bars5 = createSprite(random(0,600) , 0 , random(2 , 20) , 200); 
        
            //  bars6 = createSprite(random(0,600) , 0 , random(2 , 20) , 200); 
        
            //  bars7 = createSprite(random(0,600) , 600 , random(2 , 20) , 200);
             
            //  bars8 = createSprite(random(0,600) , 600 , random(2 , 20) , 200);
             
            //  bars9 = createSprite(random(0,600) , 600 , random(2 , 20) , 200);
        
            //  bars10 = createSprite(random(0,600) , 600 , random(2 , 20) , 200); 
        
            //  bars10.shapeColor = "green" ;
            
            //  bars11 = createSprite(600,random(0, 600), 200 , random( 2 , 20 ));
        
            //  bars11.shapeColor = "green" ; 

                          // bars4.velocityY = 5 ;  
              // bars5.velocityY = 4.5 ;
              // bars6.velocityY = 5.8 ;
              //  bars7.velocityY = -5 ;
              //  bars8.velocityY = -4.5 ;
              //  bars9.velocityY = -5.8 ;
              //  bars10.velocityY = -4 ;
              //  bars11.velocityX = -4 ;
        
        
              // this.bars.lifetime = 300;
              // this.bars1.lifetime = 300;
              // this.bars2.lifetime = 300 ; 
              // this.bars3.lifetime = 300 ; 
              // bars4.lifetime = 300 ;
              // bars5.lifetime = 300 ;
              // bars6.lifetime = 300 ; 
              // bars7.lifetime = 300 ; 
              // bars8.lifetime = 300 ; 
              // bars9.lifetime = 300 ; 

      // } 



