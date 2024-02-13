const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const list = document.querySelector('.itemList')
const img = document.querySelectorAll('img')
const itemWidth = 300;
const padding = 10;

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})


img[1].classList.add("focus");

list.addEventListener("scrollend", (e) => {
  // console.log("scrolled left");
  console.log(list.scrollLeft);
  for(let i = 0;i<img.length; i++) {
    if((list.scrollLeft >= 350*i) && (list.scrollLeft <= 350*(i + 1))) {
      img[i+1].classList.add("focus");
    } else{
      img[i + 1].classList.remove("focus")
    }
  }
})


