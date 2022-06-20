let generateColor = function () {
   let color = Math.floor(Math.random() * 256);
   return color;
}

let generateBlocks = function () {
   for (let i = 1; i <= 25; i++) {
      let body = document.querySelector('.block1')
      let newSquare = document.createElement('div');
      newSquare.classList.add('square')
      newSquare.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`
      body.append(newSquare)
   };
}

function generateBlocksInterval() {
   for (let i = 1; i <= 25; i++) {
      let body = document.querySelector('.block2')
      let newSquare = document.createElement('div');
      newSquare.classList.add('square')
      setInterval(() => {
         newSquare.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`
      }, 1000)
      body.append(newSquare)
   };
}

let btn1 = document.querySelector('.btn1');
btn1.onclick = generateBlocks;


let btn2 = document.querySelector('.btn2');
btn2.onclick = generateBlocksInterval;