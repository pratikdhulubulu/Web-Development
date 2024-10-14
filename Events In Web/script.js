let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
      // alert("Button Clicked");
      document.querySelector(".box").innerHTML = "Your were clicked";
})
button.addEventListener("contextmenu", ()=>{
      alert("Dont write click");
})
document.addEventListener("keydown", (e)=>{
      console.log(e.key);
})