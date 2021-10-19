let home = document.getElementById("home");
let about = document.getElementById("about")

window.addEventListener("load",function(){
home.addEventListener("mouseover",function(){
    home.src="./images/home2.svg"
    

})
home.addEventListener("mouseout",function(){
    home.src="./images/home1.svg"
   

})
about.addEventListener("mouseover",function(){
    about.src="./images/about2.svg"
    
})
about.addEventListener("mouseout",function(){
    about.src="./images/about1.svg"
   

})

})