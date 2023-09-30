export default function keyPress(keyCode,animationNmae,actions){
    
  let isKeyPressed = false;
  
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === keyCode && !isKeyPressed) {
        actions['Standing'].fadeOut(0.5)
        isKeyPressed = true;
      actions[animationNmae].reset().fadeIn(1.5).play();
    }
  });
  
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === keyCode) {
        isKeyPressed = false;
      actions[animationNmae].fadeOut(1);
      actions['Standing'].reset().fadeIn(1).play()
    }
  });
}