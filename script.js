const typed=new Typed(".text_js",{
    strings: ["a Full Stack Developer","a Programmer","an Enginner","a Full Stack Developr","a Designer"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true,
})
let a=document.getElementsByClassName("read")[0]
let b=document.getElementsByClassName("more")[0]
let c=document.getElementsByClassName("about")[0]

let count=0;
b.addEventListener('click',function(e){
    if(count%2==0){
        a.style.display='block'
        
    }
    else{
        a.style.display='none'
        // console.log('vamsi'+count)
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

let menuIcon=document.querySelectorAll("#menu")[0];
let navi=document.querySelector(".navbar")
menuIcon.addEventListener('click',function(e){
    menuIcon.classList.toggle('bx-x')
    navi.classList.toggle('act')
})
let home=navbar[0];


window.addEventListener('scroll',()=>  {
   section.forEach(sec=>{
    let top = window.scrollY
    let offset=sec.offsetTop
    let height=sec.offsetHeight
    if(top>=offset-height/3){
    let vd=sec.getAttribute('class')
        navbar.forEach(nav=>{

            nav.classList.remove('ab')
            
            if (nav.getAttribute('href').substring(1) == vd) {
                nav.classList.add('ab');
              }
        })
        
    }
   })
    menuIcon.classList.remove('bx-x')
    navi.classList.remove('act')
})


let ad= document.getElementById('form');
let submitted=document.getElementsByClassName('sendi')[0]
ad.addEventListener('submit',function(e){
  submitted.style.opacity=0.5
  submitted.disabled=true
    e.preventDefault();
    let data = {name:e.target[0].value,
                email:e.target[1].value,
                mobile_number:e.target[2].value,
                email_subject:e.target[3].value,
                message:e.target[4].value}
    
    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      }
    
    const res =fetch('https://backendportfolio-2nt6.onrender.com/',options)

   
    .then((res)=>{
      submitted.style.opacity=1
      submitted.disabled=false
      let f=document.getElementsByClassName('sent')[0];
      function sent(){
        
        f.style.height='1em';
        f.innerHTML='This message has been sent';
      }
      let time=setTimeout(sent,0);
      setTimeout(()=>{
        
        f.style.height='0em';
        f.innerHTML='';
        console.log('Vamsi is king and you cannot stop him')
      },5000)
      for(let k=0;k<5;k++){
        e.target[k].value=''
      }
      console.log(res)
    })
    .catch((err)=>{
      submitted.style.opacity=1
      submitted.disabled=false
      let f=document.getElementsByClassName('sent')[0];
      function sent(){
        
        f.style.height='1em';
        f.style.backgroundColor='red';
        f.innerHTML='This message has not sent, try again';
      }
      let time=setTimeout(sent,0);
      setTimeout(()=>{
        
        f.style.height='0em';
        f.innerHTML='';
        
      },5000)
      console.error(err)
    })
})

let formi=document.getElementsByClassName("formi")[0]




  


