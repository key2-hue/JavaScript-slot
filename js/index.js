'use strict';

{
   class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();
      this.coin = 100;
      this.timeoutId = undefined;
      this.resultImg = ["","",""];
      this.resultImg2 = ["","",""];

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        if(this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        this.imgResult = this.stop.parentNode.childNodes[0].getAttribute('src');

        this.resultImg[this.img.id] = this.imgResult;
        
        console.log(this.resultImg);
        if ( this.imgResult === 'img/cherry.png') {
          console.log('Ok');
        };
          
        panelsLeft--;

        if(panelsLeft === 0) {
          console.log(this.resultImg);
          checkResult();
          spin.classList.remove('inactive');
          panelsLeft = 3;
          this.coinPlus();
          console.log(panels[0]);
        }
      });
      
      section.appendChild(this.img);
      section.appendChild(this.stop);

      
      this.tr = document.createElement('tr');
      this.td = document.createElement('td');
      this.td.appendChild(this.img);
      this.td.appendChild(this.stop);
      this.tr.appendChild(this.td);
      
      const tbody = document.querySelector('tbody');
      tbody.appendChild(this.tr);
      


    }

    coinNum() {
      coin -= 1;
      const h1 = document.querySelector('h1');
      h1.textContent = '残りコイン' + coin + '枚'; 
      console.log(coin);
    }

    imageId(index) {
      this.img.id = index; 
    }

    getRandomImage() {
      const images = [
        'img/cherry.png',
        'img/seven.png',
        'img/watermelon.png',
      ]
      return images[Math.floor(Math.random() * images.length)];
    }
    
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 500);
    }

    isUnmatched(p1,p2) {
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      this.img.classList.add('unmatched');
    }

    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }

    coinPlus() {
      console.log(panels[0]);
      if(panels[0].img.classList.contains('cherry') && panels[1].img.classList.contains('cherry') && panels[2].img.classList.contains('cherry')) {
        console.log("coin+3");
        coin += 7;
        console.log(coin);
      } else if(panels[0].img.classList.contains('cherry') && panels[1].img.classList.contains('cherry')) {
        coin += 5;
      } else if(panels[0].img.classList.contains('cherry')) {
        coin += 3;
      }

      if(panels[0].img.classList.contains('seven') && panels[1].img.classList.contains('seven') && panels[2].img.classList.contains('seven')) {
        coin += 30;
      }

      if(panels[0].img.classList.contains('watermelon') && panels[1].img.classList.contains('watermelon') && panels[2].img.classList.contains('watermelon')) {
        coin += 10;
      }
    }

    cherry() {
      this.img.classList.add('cherry');
    }

    seven() {
      this.img.classList.add('seven');
    }

    watermelon() {
      this.img.classList.add('watermelon');
    }

    removeClass() {
      this.img.classList.remove('cherry');
      this.img.classList.remove('seven');
      this.img.classList.remove('watermelon');
    }
  }

  function checkResult() {
    const cherry = 'img/cherry.png';
    const seven = 'img/seven.png';
    const watermelon = 'img/watermelon.png';
    console.log(panels[0].imgResult);
    switch(panels[0].imgResult) {
      case cherry:
        panels[0].cherry();
        break;
      case seven:
        panels[0].seven();
        break;
      case watermelon:
        panels[0].watermelon();
        break;
    }

    switch(panels[1].imgResult) {
      case cherry:
        panels[1].cherry();
        break;
      case seven:
        panels[1].seven();
        break;
      case watermelon:
        panels[1].watermelon();
        break;
    }

    switch(panels[2].imgResult) {
      case cherry:
        panels[2].cherry();
        break;
      case seven:
        panels[2].seven();
        break;
      case watermelon:
        panels[2].watermelon();
        break;
    }
    
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

 

  let panelsLeft = 3;
  let coin = 100;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', ()=> {
    if(spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    // console.log(panelCoin.coin);
    let flag = 0;
    panels.forEach(function(panel, index){
      panel.activate();
      panel.spin();
      if (flag === 0) {
        flag = 1;
        panel.coinNum();
      }
      panel.imageId(index);
      panel.removeClass();
    });
  });
}