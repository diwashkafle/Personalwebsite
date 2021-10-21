let home = document.getElementById("home");
let about = document.getElementById("about")
let homePage = document.querySelector(".inside-box")
let aboutPage = document.querySelector(".inside-box2")

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
home.addEventListener("click",()=>{
    console.log("home")
    if(homePage.style.display==="none"){
        homePage.style.animationName="forHomePage";
    
    }
    homePage.style.display="flex";
    aboutPage.style.display="none";
   
})
about.addEventListener("click",()=>{
    console.log("about")
    aboutPage.style.display="flex";
    homePage.style.display="none";
    aboutPage.style.animationName="forAboutPage";
    
})


})