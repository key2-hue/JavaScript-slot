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
      

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        if(this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        let imgResult = this.stop.parentNode.childNodes[0].getAttribute('src');

        this.resultImg[this.img.id] = imgResult;
        console.log(this.resultImg);
        if ( imgResult === 'img/cherry.png') {
          console.log('Ok');
        };
          
        panelsLeft--;

        if(panelsLeft === 0) {
          console.log(this.resultImg);
          checkResult();
          spin.classList.remove('inactive');
          panelsLeft = 3;
          this.resultImg = ["","",""];
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
      const h1 = document.querySelector('h1');
      h1.textContent = '残りコイン' + this.coin + '枚'; 
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
  }

  function checkResult() {
    if(panels[0].isUnmatched(panels[1],panels[2])) {
      panels[0].unmatch();
    }

    if(panels[1].isUnmatched(panels[0],panels[2])) {
      panels[1].unmatch();
    }

    if(panels[2].isUnmatched(panels[0],panels[1])) {
      panels[2].unmatch();
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

 

  let panelsLeft = 3;

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
        panel.coin --;
        console.log(panel.coin);
        flag = 1;
        panel.coinNum();
      }
      panel.imageId(index);
    });
  });
}