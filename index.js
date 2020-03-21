(function() {
  
  function startSlot() {
    // const left = document.getElementById('left');
    // const center = document.getElementById('center');
    // const right = document.getElementById('right');
    x = Math.floor(Math.random() * 3 + 1);
    y = Math.floor(Math.random() * 3 + 1);
    z = Math.floor(Math.random() * 3 + 1);
    console.log(left);
    switch(x){
      case 1:
        console.log("a");
        left.src = "img/cherry.png";
        break;
      case 2:
        console.log("b");
        left.src = "img/seven.png";
        break; 
      case 3:
        console.log("c");
        left.src = "img/watermelon.png";
        break;
    } 
    switch(y){
      case 1:
        center.src = "img/cherry.png";
        break;
      case 2:
        center.src = "img/seven.png";
        break; 
      case 3:
        center.src = "img/watermelon.png";
        break;
    } 
    switch(x){
      case 1:
        right.src = "img/cherry.png";
        break;
      case 2:
        right.src = "img/seven.png";
        break; 
      case 3:
        right.src = "img/watermelon.png";
        break;
    } 
    let clear = setTimeout(startSlot(), 10000);
  }
  function stopSlot() {
    clearTimeout(clear);
  }
  document.getElementById('start').addEventListener('click',()=>{
    startSlot();
  });
  document.getElementById('stop').addEventListener('click',()=>{
    
  });
})();