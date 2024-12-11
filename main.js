for ( let i=1;i<50;i++ ){
    let star=document.createElement("div");
    star.classList.add('star');
let size = Math.random()*20;
star.style.fontSize = 10 +size+'px';
star.style.left= Math.random()* +innerWidth+'px';
star.style.top= Math.random()* +innerHeight+'px';
star.style.bottom= Math.random()* +innerHeight+'px';
star.style.right= Math.random()* +innerWidth+'px';
star.style.filter =`hue-rotate(${i*5}deg)`

    document.querySelector(".bg-star").appendChild(star);
}

function animateStar (){
  let    allstar= document.querySelectorAll(".star");




let num = Math.floor( Math.random()*allstar.length);
allstar[num].classList.toggle('animate');
}
setInterval(animateStar, 50);







    // Dynamic button data
    const buttonData = [
        { text: 'Passionate about creating dynamic, responsive websites and applications.'

         },
        { text: 'Skilled in HTML, CSS, JavaScript, and modern web frameworks like React' },
        { text: 'Dedicated to delivering efficient, user-friendly, and visually appealing web solutions.' },
        { text: 'Creative thinker with strong problem-solving skills.' }
    ];

    

function renderButtons() {
  const buttonContainer = document.getElementById('button-container');
  buttonContainer.innerHTML = ''; // Clear existing buttons
  buttonData.forEach(button => {
      const buttonElement = `
          <div class="button">
             <div  id= 'project' > <p>${button.text}</p></div>
              <button class="mini-button"></button>
          </div>
      `;
      buttonContainer.innerHTML += buttonElement;
  });
}

// Initial render
renderButtons();








let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
        
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;

      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }

      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })

    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return; 
      this.holdingPaper = true;
      
      paper.style.zIndex = highestZ;
      highestZ += 1;
      
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});







