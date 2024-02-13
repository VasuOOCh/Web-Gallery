let ss = document.querySelector(".ss");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img = document.querySelectorAll("img")

// ss.scrollTop += 300;
console.log(ss.scrollTop);

prev.addEventListener("click", () => {
    ss.scrollTop -= 300;
    console.log(ss.scrollTop);
})

next.addEventListener("click", () => {
    ss.scrollTop += 300;
    console.log(ss.scrollTop);
})

// ss.addEventListener("scrollend", ()=>{
//     console.log("scrollend")

//     for(let i = 0; i< img.length; i++) {
//         if((ss.scrollTop <= i*300) && (ss.scrollTop >= (i + 1)*300)) {
//             console.log("img no", i)
//             img[i+1].classList.add("focus");
//         } else{
//             console.log("else")
//             img[i+1].classList.remove("focus");
//         }
//     }
// })