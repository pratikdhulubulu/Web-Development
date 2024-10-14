// let boxes = document.getElementsByClassName("box");
//OR
let boxes = document.querySelector(".container").children;
console.log(boxes);


function getRandomColor() {
      let val3 = Math.ceil(Math.random() * 255);
      let val1 = Math.ceil(Math.random() * 255);
      let val2 = Math.ceil(Math.random() * 255);
      return `rgb(${val1}, ${val2}, ${val3})`;  
}


Array.from(boxes).forEach(e => {
      e.style.color = getRandomColor();
      e.style.backgroundColor = getRandomColor();
})