var ladrao,diamante,laser1,laser2,paredes
var estadojogo

function setup() {
  createCanvas(400, 400);
montarjogo()
  estadojogo ='parado'
  
}

function draw() {
  background(0);
  
drawSprites()
  
 if(estadojogo == 'parado'){
   
   
   textSize(20)
   fill('white')
   text('Pressione ESPAÇO para inisiar',60,180)
   
   if(keyDown('SPACE')){
     laser1.velocityY = 5
     laser2.velocityY = -5
     estadojogo = 'play'
     
   }
    
 }
  
  if(estadojogo == 'play'){
    
    
  laser1.bounceOff(paredes)
  laser2.bounceOff(paredes)
  
  if(keyDown('left')){
    
    ladrao.x = ladrao.x - 4
    
  }else if(keyDown('right')){
    
    ladrao.x = ladrao.x + 4
  }else if(keyDown('up')){
    
    ladrao.y = ladrao.y -4
    
  }else if(keyDown('down')){
    ladrao.y = ladrao.y + 4
  }
    
    
  ladrao.collide(paredes)
    
    
    if(
    
      ladrao.isTouching(laser1)||
      ladrao.isTouching(laser2)
    ){
      
      
      estadojogo = 'gameOver'
    }
     if(ladrao.isTouching(diamante)){
    
    estadojogo = 'winner'
  }
    
  }  
  
 
  
  
  
  if(estadojogo == 'gameOver'){
    
    fimDejogo()
    fill('white')
    textSize(30)
    text(' O ladrao foi capiturado',50,200)
    
    textSize(15)
    text('Pressione R para reinisiar',100,250)
     
    if(keyDown('r')){
      estadojogo = 'parado'
      montarjogo()
      
    }
  }
  
  if(estadojogo == 'winner'){
    
    fimDejogo()
    textSize(30)
    fill('white')
    text('O diamante foi Roubado',50,200)
    textSize(15)
    text('Pressione R para reinisia',100,250)
    
    if(keyDown('r')){
      
      estadojogo = 'parado'
      montarjogo()
      
      
    }
    
  }
  
  
  
}

function montarjogo(){
  ladrao = createSprite(200,390,20,20)
 diamante = createSprite(360,20,20,20)
  laser1 =  createSprite(100,200,200,10)
  laser1.shapeColor = "red"
  laser2 = createSprite(300,200,200,10)
  laser2.shapeColor = 'red'
  
  diamante.shapeColor = 'blue'
  
  paredes = createEdgeSprites()
  

}


function fimDejogo(){
  ladrao.remove()
  diamante.remove()
  laser1.remove()
  laser2.remove()
}

