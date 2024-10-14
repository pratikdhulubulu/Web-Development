document.querySelector(".child").addEventListener("click", (e) => {
      e.stopPropagation();
      alert("Child container was clicked");
})
document.querySelector(".container").addEventListener("click", (e) => {
      e.stopPropagation();
      alert("container was clicked");
})
 
function getRandomColor() {
      let val3 = Math.ceil(Math.random() * 255);
      let val1 = Math.ceil(Math.random() * 255);
      let val2 = Math.ceil(Math.random() * 255);
      return `rgb(${val1}, ${val2}, ${val3})`;  
}
setInterval(() => {
      document.querySelector(".child").style.backgroundColor = getRandomColor();
      document.querySelector(".container").style.backgroundColor = getRandomColor();
}, 500);

//clearInterval

// let a =setTimeout(() => {
//       document.querySelector(".child").style.backgroundColor = getRandomColor();
//       document.querySelector(".container").style.backgroundColor = getRandomColor();
// }, 500);

//clearTimeout

