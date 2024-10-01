let container=document.querySelector("#container");
let mainGame=document.querySelector("#mainGame");
let boxes=document.querySelectorAll(".boxes");
let heading=document.querySelector("#heading");
let primaryBox=document.querySelector("#primaryBox");
let radios=document.querySelectorAll('input[name="selectbox"]');
let reset=document.querySelector("#reset");
let firstVALUE="";
let gamestart=false;
let i=0;

heading.innerText="";
radios.forEach((radio)=>{radio.addEventListener("change",()=>{if(!gamestart){
    firstVALUE=radio.value;
    heading.innerText=`Turn of Player-1(${firstVALUE})`;
    gamestart=true;
    primaryBox.style.display="none";

}});});

let winValues=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{box.addEventListener("click",()=>{if(gamestart){
        if(firstVALUE=="O"){box.innerText="O";firstVALUE="X";i+=1}
        else{box.innerText="X";firstVALUE="O";i+=1};
        box.disabled=true;
        if(i%2!=0){heading.innerText=`Turn of Player-2(${firstVALUE})`}
        else{heading.innerText=`Turn of Player-1(${firstVALUE})`};
        winCheaker();
}});});




let winCheaker=()=>{winValues.forEach((value)=>{
    let pos0=boxes[value[0]].innerText;
    let pos1=boxes[value[1]].innerText;
    let pos2=boxes[value[2]].innerText;
    if(pos0!= "" && pos0===pos1 && pos1===pos2){
       if (heading.innerText==`Turn of Player-2(${firstVALUE})`){heading.innerText="PLAYER-1 WIN"}
        else{heading.innerText="PLAYER-2 WIN"};
        boxes.forEach((box)=>box.disabled=true);
        reset.innerText="New Game";
    }

reset.addEventListener("click",()=>{location.reload();
})

});};