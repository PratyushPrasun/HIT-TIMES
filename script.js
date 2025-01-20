const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

let mode1 = document.querySelector("#mode");
let body = document.querySelector("body"); 
let currentmode = "light";
mode1.addEventListener("click", () =>{
  if(currentmode === "light"){
    currentmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }else{
    currentmode = "light";
    body.classList.add("light");
  }
  console.log(currentmode);
  
})

