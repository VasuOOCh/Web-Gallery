AOS.init();

let body = document.querySelector("body");
let navlist = document.querySelector(".navlist");
let webText = document.getElementById("webText");
let form = document.querySelector("form");
let bar = document.querySelector(".progress")

window.addEventListener("scroll", function (event) {
 
    let scroll_y = this.scrollY;
    let scroll_x = this.scrollX;
    console.log(scroll_y);
    if(scroll_y > 80) {
        navlist.classList.add("navAfter")
    } else if (scroll_y == 0){
        navlist.classList.remove("navAfter")
    }

    // if(scroll_y >= 285) {
    //     // console.log("yesss");
    //     webText.classList.add("webTextAfter")
    // } else{
    //     webText.classList.remove("webTextAfter")
    // }

    if(scroll_y < 603){
        navlist.children[0].classList.add("current");        
        navlist.children[1].classList.remove("current");        
        navlist.children[2].classList.remove("current");        

    }
    else if( scroll_y >= 603 && scroll_y< 1300) {
        navlist.children[0].classList.remove("current");        
        navlist.children[1].classList.add("current");        
        navlist.children[2].classList.remove("current");
    }
    else if( scroll_y >= 1300) {
        // console.log("reached")
        navlist.children[0].classList.remove("current");        
        navlist.children[1].classList.remove("current");        
        navlist.children[2].classList.add("current");
    }
    let width = (scroll_y/1312)*100
    bar.style.width = `${width}%`;
});

navlist.children[0].addEventListener("click", (e)=> {
    console.log("cliked")
    const home  = document.querySelector(".home")
    home.scrollIntoView({
        behavior : "smooth"
    });

})
navlist.children[1].addEventListener("click", (e)=> {
    console.log("cliked")
    const about  = document.querySelector(".about")
    about.scrollIntoView({
        behavior : "smooth"
    });

})

navlist.children[2].addEventListener("click", (e)=> {
    console.log("cliked")
    const about  = document.querySelector(".contactText")
    about.scrollIntoView({
        behavior : "smooth"
    });

})

form.addEventListener("submit", ()=>{
    alert("Response has been submitted")
})


