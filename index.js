(function() {

  class Slot {

    startSlot() {
      // const left = document.getElementById('left');
      // const center = document.getElementById('center');
      // const right = document.getElementById('right');
      const x = Math.floor(Math.random() * 3 + 1);
      const y = Math.floor(Math.random() * 3 + 1);
      const z = Math.floor(Math.random() * 3 + 1);
      console.log(x);
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
      switch(z){
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
      this.clear = setTimeout(() => {
        this.startSlot(); }
        , 100);
    }
    stopSlot() {
      clearTimeout(this.clear);
    }
    
  }

  const Slots = [
    new Slot(),
    new Slot(),
    new Slot(),
  ] 

  document.getElementById('start').addEventListener('click',()=>{
    // const left = document.getElementById('left');
    // console.log(left);
    Slots.forEach(slot => {
      slot.startSlot();
    });
  });
  const stop = document.querySelector('.stop > input');
  stop.addEventListener('click',()=>{
    console.log(stop.data('id'));
  });
  
  
})();