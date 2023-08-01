let mediaquery=window.matchMedia('(min-width:640px)')
console.log("I love you too")
function blak(mq){
console.log("I love you too")
        console.log("I love you")
        let music=new Audio("ting.mp3")
let finish=new Audio("gameover.mp3")
let turn="X"
console.log('virat is ${turn}')
function changeturn(){
    return turn=="X"?"O":"X"
}
let gameOver=false
let oh=new Audio("oh-my.mp3")
function game(){
    let arr=[[0,1,2,6,6,0,20],[3,4,5,5,16,0,20],[6,7,8,6,26,0,20],[0,3,6,-6,16,90,20],[1,4,7,6,16,90,20],[2,5,8,16,16,90,20],[0,4,8,0,16,45,30],[6,2,4,0,16,135,30]]
    let arr2=[[0,1,2,10,12,0,50],[3,4,5,10,32,0,50],[6,7,8,10,57,0,50],[0,3,6,-15,37,90,50],[1,4,7,8,37,90,50],[2,5,8,28,37,90,50],[0,4,8,0,35,45,63],[6,2,4,0,35,135,63]]
    let boxtext=document.getElementsByClassName("box")
     if(mq.matches){
    Array.from(arr).forEach(element=>{
        // console.log(boxtext[element[0]].innerHTML+boxtext[element[1]].innerHTML+boxtext[element[2]].innerHTML)
        if(boxtext[element[0]].innerHTML==boxtext[element[1]].innerHTML &&boxtext[element[0]].innerHTML==boxtext[element[2]].innerHTML && boxtext[element[0]].innerHTML!='' && boxtext[element[1]].innerHTML!=''){
            console.log("You dont fooled")
            if(turn=='X'){
                console.log(turn)
            document.getElementsByClassName("info")[0].innerHTML="O WON"
            }
            else {
                console.log(turn)
            document.getElementsByClassName("info")[0].innerHTML="X WON"
            }
            document.getElementsByClassName("info")[0].style.textDecoration='underline'
            //document.getElementsByClassName("info")[0].style
            document.getElementsByClassName("imgbox")[0].style.display='flex'
            // document.querySelector("img").style.transition="width 1s ease"
            document.querySelector(".img1").style.width="200px"
            // document.querySelector("img").style.transition="width 1s ease"
            gameOver=true
            finish.play()
            document.querySelectorAll(".line")[0].style.width=`${element[6]}vw`
            console.log(document.querySelectorAll(".line")[0].style.width=`${element[6]}vw`)
            document.querySelectorAll(".line")[0].style.transform=`translate(${element[3]}vw,${element[4]}vw) rotate(${element[5]}deg)`
            console.log(document.querySelectorAll(".line")[0])
        document.getElementsByClassName("game-info")[0].querySelector(".reset").innerHTML="NEW GAME"

        }

        
    })
}
else{
    Array.from(arr2).forEach(element=>{
        // console.log(boxtext[element[0]].innerHTML+boxtext[element[1]].innerHTML+boxtext[element[2]].innerHTML)
        if(boxtext[element[0]].innerHTML==boxtext[element[1]].innerHTML &&boxtext[element[0]].innerHTML==boxtext[element[2]].innerHTML && boxtext[element[0]].innerHTML!='' && boxtext[element[1]].innerHTML!=''){
            console.log("You dont fooled")
            if(turn=='X'){
                console.log(turn)
            document.getElementsByClassName("info")[0].innerHTML="O WON"
            }
            else {
                console.log(turn)
            document.getElementsByClassName("info")[0].innerHTML="X WON"
            }
            document.getElementsByClassName("info")[0].style.textDecoration='underline'
            //document.getElementsByClassName("info")[0].style
            document.getElementsByClassName("imgbox")[0].style.display='flex'
            // document.querySelector("img").style.transition="width 1s ease"
            document.querySelector(".img1").style.width="200px"
            // document.querySelector("img").style.transition="width 1s ease"
            gameOver=true
            finish.play()
            document.querySelectorAll(".line")[0].style.width=`${element[6]}`
            console.log(document.querySelectorAll(".line")[0].style.width=`${element[6]}vw`)
            document.querySelectorAll(".line")[0].style.transform=`translate(${element[3]}vw,${element[4]}vw) rotate(${element[5]}deg)`
            console.log(document.querySelectorAll(".line")[0])
        document.getElementsByClassName("game-info")[0].querySelector(".reset").innerHTML="NEW GAME"

        }

        
    })
}
    if(boxtext[0].innerHTML!='' && boxtext[1].innerHTML!=''&&boxtext[2].innerHTML!=''&&boxtext[3].innerHTML!=''&&boxtext[4].innerHTML!=''&&boxtext[5].innerHTML!=''&&boxtext[6].innerHTML!=''&&boxtext[7].innerHTML!='' && boxtext[8].innerHTML!='' && gameOver==false){
        console.log('you fooled')
         document.getElementsByClassName("info")[0].innerHTML="BOTH LOST"
         document.getElementsByClassName("info")[0].style.textDecoration='underline'
        document.getElementsByClassName("imgbox")[0].style.display='flex'
        // document.querySelector("img").style.transition="width 1s ease"
        document.querySelector(".img2").style.width="220px"
        document.getElementsByClassName("game-info")[0].querySelector(".reset").innerHTML="NEW GAME"
        oh.play()
     }
}

//Game logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
     //let boxtext=element.getElementsByClassName("box")
    element.addEventListener('click',function(e){
        if(element.innerHTML==''){
            //  element.innerHTML=turn
            if(!gameOver){
            element.innerHTML=turn
            turn =changeturn()
            game()
            }
            if(!gameOver && !(boxes[0].innerHTML!='' && boxes[1].innerHTML!=''&&boxes[2].innerHTML!=''&&boxes[3].innerHTML!=''&&boxes[4].innerHTML!=''&&boxes[5].innerHTML!=''&&boxes[6].innerHTML!=''&&boxes[7].innerHTML!='' && boxes[8].innerHTML!='' )){
                music.play()
                let info=document.getElementsByClassName("info")
             info[0].innerHTML="TURN FOR " +turn
             info[0].style.textDecoration='underline'
        
            }
            

            
            
        }
    })
})
let reset=document.getElementsByClassName("game-info")[0].querySelector(".reset")
reset.addEventListener('click',function(e){
    let boxess=document.getElementsByClassName("box")
    Array.from(boxess).forEach(element=>{
        let boxtext=element.getElementsByClassName("box")
        element.innerHTML=''
    })
    turn='X'
    let info=document.getElementsByClassName("info")
    gameOver=false
    info[0].innerHTML="TURN FOR " +turn
    info[0].style.textDecoration='underline'
    //document.getElementsByClassName("imgbox")[0].style.display='none'
            document.querySelector(".img1").style.width="0px"
            document.querySelectorAll(".line")[0].style.width=`0`
        document.getElementsByClassName("game-info")[0].querySelector(".reset").innerHTML="RESTART"
        document.querySelector(".img2").style.width="0px"
})
console.log("vamsi1")
console.log(reset)
console.log(1)
console.log(boxes)
}
blak(mediaquery)