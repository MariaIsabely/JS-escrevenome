function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
      stroke("rgb(255,1,194)")
      fill("white");
    
      // console.log(mouseIsPressed)
      if(mouseIsPressed){
         rect(mouseX, mouseY, 10, 30)
    }
  
  }