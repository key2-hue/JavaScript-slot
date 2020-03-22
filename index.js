(function() {

  class Slot {

    constructor() {
      
    }

    startSlot() {
      const x = Math.floor(Math.random() * 3 + 1);
      const y = Math.floor(Math.random() * 3 + 1);
      const z = Math.floor(Math.random() * 3 + 1);
      // console.log(x);
      switch(x){
        case 1:
          // console.log("a");
          left.src = "img/cherry.png";
          break;
        case 2:
          // console.log("b");
          left.src = "img/seven.png";
          break; 
        case 3:
          // console.log("c");
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
  ];

  let slotStart = [];

  

  document.getElementById('start').addEventListener('click',()=>{
    Slots.forEach(function(slot, index)  {
      slot.startSlot();
      console.log(slot);
      // // slot.classList.add('start');
      // slotStart.push(slot);
    });
  });
  const stopZero = document.querySelector('.stop0 > input');
  stopZero.addEventListener('click',()=>{
    Slots.forEach(function(slot, index)  {
      slot[0].stopSlot();
      console.log(slot);
      // // slot.classList.add('start');
      // slotStart.push(slot);
    });
  });

  const stopOne = document.querySelector('.stop1 > input');
  stopOne.addEventListener('click',()=>{
    console.log(stopOne.dataset.id);
  });
  

  const stopTwo = document.querySelector('.stop2 > input');
  stopTwo.addEventListener('click',()=>{
    console.log(stopTwo.dataset.id);
  });
  
  
  
})();