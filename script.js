let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
// velocidade do jogo variavel 
var velocidadeFinal =500;
var veloci = 0;

function criarBG(){
    context.fillStyle = "rgb(204,255,153)";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
    
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.beginPath();
    context.fillStyle = "red";
    context.arc(food.x,food.y,15,box,Math.PI * 2);
    context.stroke();
    context.fill()
    context.closePath();
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function adicionaVelocidade(velocidade){
    
    veloci=parseInt(document.getElementById("velocidade").innerHTML);
    console.log("variavel veloci na entrada do aumenta = " + veloci);
    console.log("variavel velocidade Final na entrada do aumenta = " + velocidadeFinal);
   // while (veloci < 5){
       
        
        if (veloci == 1) {
            velocidadeFinal = 600;

        }else if (veloci == 2) {
            velocidadeFinal = 750;
            
        }else if (veloci == 3) {
            velocidadeFinal = 850;
            
        } else if (veloci == 4){
            velocidadeFinal = 1000;
            
        /*} else if (veloci == 5){
            velocidadeFinal = 1000;
        */    
        } ;
        if(veloci > 4){
            
            return velocidade;
        };
        veloci++;
        velocidade = veloci;
        
        document.getElementById("velocidade").innerHTML= velocidade;
        document.getElementById("reduz").innerHTML= velocidade;
        let jogo = setInterval(iniciarJogo, velocidadeFinal);
       
        return velocidade;
        
   // } ;  
    
   
   
}

function retiraVelocidade(velocidade){
    
    veloci=parseInt(document.getElementById("reduz").innerHTML);
    console.log("variavel veloci na entrada do reduz = " +veloci);
    console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal);
    
        if (veloci == 1) {
            velocidadeFinal = 500;
           
            console.log("variavel veloci na entrada do reduz = " +veloci);
            console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal);  
        }else if (veloci == 2) {
            velocidadeFinal = 600;
            
            console.log("variavel veloci na entrada do reduz = " +veloci);
            console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal);
        } else if (veloci == 3){
            velocidadeFinal = 750;
           
            console.log("variavel veloci na entrada do reduz = " +veloci);
            console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal);
        } else if (veloci == 4){
            velocidadeFinal = 850;
            
            console.log("variavel veloci na entrada do reduz = " +veloci);
            console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal); 
        } else if (veloci == 5){
            velocidadeFinal = 10000;
            
            console.log("variavel veloci na entrada do reduz = " +veloci);
            console.log("variavel velocidade Final na entrada do reduz = " +velocidadeFinal);     
        };

        if(veloci <= 1){
            
            return velocidade;
        };
        veloci--;
        velocidade = veloci;
        document.getElementById("velocidade").innerHTML= velocidade;
        document.getElementById("reduz").innerHTML= velocidade;
        let jogo = setInterval(iniciarJogo, velocidadeFinal);
       
        return velocidade;
   
    

}

function iniciarJogo(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, velocidadeFinal);