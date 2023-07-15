class Component{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen=gameScreen
        this.left=left
        this.top=top
        this.width=width
        this.height=height
        this.element = document.createElement("img")
        this.element.src=imgSrc
        this.element.style.position="absolute"
        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
        this.gameScreen.appendChild(this.element);
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

}


class Player extends Component{
    constructor(gameScreen,left,top,width,height,imageURL){
  super(gameScreen,left,top,width,height,imageURL)
    this.directionX=0
    this.directionY=0
  }
    
    move(){
        this.left+=this.directionX
        this.top+=this.directionY
        debugger
        if (this.left < 10) {
            this.left = 10
          }
      
          if (this.top < 10) {
            this.top = 10
          }
      
          if (this.left > this.gameScreen.offsetWidth - this.width ) {
            this.left = this.gameScreen.offsetWidth - this.width 
          }
      
          if (this.top > this.gameScreen.offsetHeight - this.height ) {
            this.top = this.gameScreen.offsetHeight - this.height
          }
        this.updatePosition()
    }
    didCollide(obstacle){
        // return this.left===obstacle.left && this.top===obstacle.top
      const playerPlace=this.element.getBoundingClientRect()
      const obstaclePlace=obstacle.element.getBoundingClientRect()
      if (
        playerPlace.left < obstaclePlace.right &&
        playerPlace.right > obstaclePlace.left &&
        playerPlace.top < obstaclePlace.bottom &&
        playerPlace.bottom > obstaclePlace.top) {
        return true
      }
    }
  
  }



class Obstacle extends Component{
    constructor(gameScreen){
super(
    gameScreen,
    Math.floor(Math.random() * 300 + 70),
    0,
    100,
    150,
    "./images/redCar.png"
  );
    }
    move(){
        this.top += 3;
        this.updatePosition();

    }


}