const button = document.getElementById("button");
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
let temp = null;
let keyLog = [];
let isPlaying = false;

let Game = class {
  snakePos = [[c.width/3 - 19, c.height/2 + 1]];
  foodPos = [c.width/3 * 2, c.height/2];
  translation = [20, 0]
  score = 0

  drawSnake = () => {
    this.snakePos.forEach(snakePos => {
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.fillRect(snakePos[0], snakePos[1], 18, 18)
      ctx.stroke()
    });
  }

  drawFood = () => {
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.fillRect(this.foodPos[0], this.foodPos[1], 20, 20)
    ctx.stroke()
  }

  checkTranslation = () => {
    if (keyLog[0] != null) {
      temp = keyLog.splice(0, 1)
      if (temp == keyLog[0]) {
        this.checkTranslation()
        return
      }
      switch (temp[0]) {
        case "ArrowLeft":
          this.translation = [-20, 0];
          break;
        
        case "ArrowRight":
          this.translation = [20, 0];
          break;
    
        case "ArrowUp":
          this.translation = [0, -20];
          break;
    
        case "ArrowDown":
          this.translation = [0, 20];
          break;
          
        default:
          break;
      }
    }
  }
  
  setUpGame = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    this.drawFood()
    this.drawSnake()
  }

  startGame = () => {
    isPlaying = true
    this.drawFood()
    this.drawSnake()
    const checkMove = setInterval(() => {
      this.checkTranslation()
      this.snakePos.unshift([this.snakePos[0][0] + this.translation[0], this.snakePos[0][1] + this.translation[1]])
      this.snakePos.forEach(snakePos => {
        let i = 0
        this.snakePos.forEach(otherSnakePartPos => {
          if ((otherSnakePartPos[0] == snakePos[0]) && (otherSnakePartPos[1] == snakePos[1])) {
            i++
            if (i == 2){
              clearInterval(checkMove)
              document.getElementById("score").innerText = "Score: " + this.score + " Game Over"
              isPlaying = false
            }
          }
        });
        if ((snakePos[0] > 480) || (snakePos[0] < 0) || (snakePos[1] < 0) || (snakePos[1] > 360)) {
          clearInterval(checkMove)
          document.getElementById("score").innerText = "Score: " + this.score + " Game Over"
          isPlaying = false
        }
        if ((snakePos[0] - 1 == this.foodPos[0]) && (snakePos[1]-1 == this.foodPos[1])) {
          this.score++
          this.foodPos = [Math.floor(Math.random() * c.width/20) * 20, Math.floor(Math.random() * c.height/20) * 20]
          document.getElementById("score").innerText = "Score: " + this.score
        }
      if (this.score < this.snakePos.length) {
        this.snakePos.splice(this.score + 1, 1)
      }
      
      });
      ctx.clearRect(0, 0, c.width, c.height);
      this.drawFood()
      this.drawSnake()
    }, 100);
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (temp == "ArrowLeft" || temp == "ArrowRight") {
        break;
      } else keyLog.push(event.key);
      break;
    
    case "ArrowRight":
      if (temp == "ArrowLeft" || temp == "ArrowRight") {
        break;
      } else keyLog.push(event.key);
      break;

    case "ArrowUp":
      if (temp == "ArrowUp" || temp == "ArrowDown") {
        break;
      } else keyLog.push(event.key);
      break;

    case "ArrowDown":
      if (temp == "ArrowUp" || temp == "ArrowDown") {
        break;
      } else keyLog.push(event.key);
      break;
      
    default:
      break;
  }
}, false);

button.addEventListener('click', () => {
  if (!isPlaying) {
    const Snake = new Game()
    Snake.startGame()
  }
  
})