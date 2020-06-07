class Bars { 
        constructor(){
            this.x = 600 ;
            this.y = random(0 , 600) ; 
            this.w = 200 ;
            this.h =  20 ;  
            this.velocityX = 0 ;  
            this.lifetime = 300;  
            }

              //Bars which move horizontally ; 

              display(){
                rect(200,200 , this.w , this.h);
              }

    
        }       



      

