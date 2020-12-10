function collideWith(sprite,collideWith){
    if(-sprite.x+collideWith.x < sprite.width/2+collideWith.width/2){
      return true;
    }
}
  
function setColor(x,sprite){
    if(x>10){
        sprite.shapeColor=color(255,0,0);
    }else{
        sprite.shapeColor=color(0,255,0);
    }
}