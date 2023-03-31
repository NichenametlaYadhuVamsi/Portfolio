const typed=new Typed(".text_js",{
    strings: ["a Frontend Developer","a Programmer","an Enginner"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true,
})
let a=document.getElementsByClassName("read")[0]
let b=document.getElementsByClassName("more")[0]
let c=document.getElementsByClassName("about")[0]
// console.log(c)
let count=0;
b.addEventListener('click',function(e){
    if(count%2==0){
        a.style.display='block'
        console.log(count+'virat')
    }
    else{
        a.style.display='none'
        console.log('vamsi'+count)
    }
    count++;
    console.log(c.scrollIntoView({behavior:"smooth"}))

})

function scrollToSection() {
    
   console.log(c.scrollIntoView({ behavior: "smooth" }))
 }
 function scrollTosection() {
    let section = document.getElementsByClassName("home")[0];
   console.log(section)
  console.log(section.scrollIntoView({ behavior: "smooth" }))
}
 function scrollToSection1() {
     let section = document.getElementsByClassName("skills")[0];
    console.log(section)
   console.log(section.scrollIntoView({ behavior: "smooth" }))
 }
 function scrollToSection2() {
    let section = document.getElementsByClassName("project")[0];
   console.log(section)
  console.log(section.scrollIntoView({ behavior: "smooth" }))
}
function scrollToSection3() {
    let section = document.getElementsByClassName("contact")[0];
   console.log(section)
  console.log(section.scrollIntoView({ behavior: "smooth" }))
}
let section=document.querySelectorAll("section");
let navbar=document.querySelectorAll("nav a");
console.log(navbar)
// window.onscroll=()=>{
//     let top=window.scrollY;
// }
window.addEventListener('scroll',()=>  {
   section.forEach(sec=>{
    let top = window.scrollY;
    let offset=sec.offsetTop;
    let height=sec.offsetHeight
    if(top>=offset-height/3){
    let vd=sec.getAttribute('class')
    console.log(vd)
        navbar.forEach(nav=>{
            nav.classList.remove('ab')
            console.log(nav)
            console.log(nav.getAttribute('href'))
            // document.querySelector('nav a[href*='+vd+']').classList.add('ab')
            if (nav.getAttribute('href').substring(1) == vd) {
                nav.classList.add('ab');
                console.log('vamsi')
              }
        })
        // console.log(sec)
    }
   })
    menuIcon.classList.remove('bx-x')
    navi.classList.remove('act')
})
let menuIcon=document.querySelectorAll("#menu")[0];
let navi=document.querySelector(".navbar")
console.log(navi)
menuIcon.addEventListener('click',function(e){
    menuIcon.classList.toggle('bx-x')
    console.log('virat run machine')
    navi.classList.toggle('act')
})
menuIcon.classList.remove('bx-x')
navi.classList.remove('act')
  


