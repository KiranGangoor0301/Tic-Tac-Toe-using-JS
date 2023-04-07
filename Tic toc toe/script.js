console.log("WELCOME MY TIC TOC TOE")
let turn ='X';
let isgameOver=false;
let gameover=new Audio('music.mp3')
let Name1=prompt("Name1:--")
let Name2=prompt("Name2:--")
let musicTurn=new Audio('ting.mp3')
setTimeout(()=>{
alert(Name1 +' :--X')
alert(Name2 +' :--0')
}),1000
const changeTurn=()=>
{
    return turn==='X'? "O":"X";
}

//Check for Win
const checkWin=()=>
{
    let boxtext=document.getElementsByClassName('boxtext');
let gamewin=[
    [0,1,2,0,80,0],
    [0,3,6,-170,246,90],
    [3,4,5,0,246,0],
    [6,7,8,0,420,0],
    [1,4,7,1.04,235,90],
    [2,5,8,169.08,225,90],
    [0,4,8,-6.72,240,45],
    [2,4,6,15.28,240,135]
    ]
   gamewin.forEach(e=>
    {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==""))
        {
            if(boxtext[e[0]].innerText==='O')
            {
            document.querySelector('#info').innerText=Name2.toUpperCase()+ ' WON';
            }
            else{
                document.querySelector('#info').innerText=Name1.toUpperCase() + ' WON';
            }
            document.querySelector('#info').style.height='10px';
            isgameOver=true
            document.getElementById('gif').style.width='100px';
            document.querySelector('.line').style.width='33vw';
            document.querySelector('.line').style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
            gameover.play();
            setTimeout(()=>{
                alert("Game Over!!")
            }),1000
        }
    })
 }
//  0,420,0 678   0,246,0   345  169.08,225,90  258  1.04,235,90  147  
//Main part
let box=document.getElementsByClassName('box');
Array.from(box).forEach(element=>
{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
    boxtext.innerText=turn;
    turn=changeTurn();
    musicTurn.play();
    checkWin();
    if(!isgameOver)
    {
    document.getElementById('info').innerHTML="TURN FOR " + turn;
    }
    
    }
})
})
// Reset Button
reset.addEventListener('click',()=>
{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
        document.getElementById('gif').style.width='0px';
        gameover.pause();
        document.querySelector('.line').style.width='0vw';
        document.querySelector('#info').innerText='TURN FOR X';

    })
})

