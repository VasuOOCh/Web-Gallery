const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const list = document.querySelector('.itemList')
const img = document.querySelectorAll('img');
const body = document.querySelector("body");
const itemWidth = 250;
const padding = 0 ;



prev.addEventListener('click',()=>{
  clearInterval(1);
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  clearInterval(1);
  list.scrollLeft += (itemWidth + padding)
})


img[1].classList.add("focus");

list.addEventListener("scrollend", (e) => {
  // console.log("scrolled left");
  let scroll = list.scrollLeft;
  console.log(scroll)
  for(let i = 0;i<img.length; i++) {
    if((scroll >= 250*i - 30) && (scroll <= 250*i + 30)) {
      console.log(i+1);
      img[i+1].classList.add("focus");
      // console.dir(img[i+1]);
      body.style.background = `url(http://localhost:8080/imagesFull/img${i+2}.jpg)`;
    body.style.backgroundSize = "cover";
      

    } else{
      img[i + 1].classList.remove("focus")
    }
  }
})


let forward = true;
// setInterval(()=>{

//   if(list.scrollLeft < 2500) {
//     list.scrollLeft += 250;
//   } else{
//     clearInterval(1);
//     // list.scrollLeft -= 250;
//     console.log("done");
//   }
// },3000)

if(forward == true) {
  let forw = setInterval(() => {
    list.scrollLeft += 250;
    if(list.scrollLeft >= 2500){
      clearInterval(forw);
      forward = false;
      console.log("cleared");
    }
  },2000);

}

// if(forward == false) {
//   let back = setInterval(() => {
//     list.scrollLeft -= 250;
//     if(list.scrollLeft <10){
//       clearInterval(back);
//       forward = true;
//       console.log("cleared");
//     }
//   },2000);
// }