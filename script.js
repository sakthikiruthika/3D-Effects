const card=document.querySelector(".card");
const container=document.querySelector("#cardwrapper");
const pic=document.querySelector(".image");

console.log(window.pageXOffset);

container.addEventListener('mousemove',(e) =>{
    //console.log(e.pageY);
    let Xaxis=(window.innerWidth/2 - e.pageX)/10;
    let Yaxis=(window.innerHeight/2 - e.pageY)/10;
    card.style.transform=(`rotateY(${Yaxis}deg) rotateX(${Xaxis}deg)`);
    pic.style.transform=`translateZ(150px) rotateZ(-45deg)`;
});


container.addEventListener('mouseenter',(e=>{

card.style.transform="none";
pic.style.transform="none";
}))

container.addEventListener('mouseleave',(e)=>{
    card.style.transition="all 0.5s ease";
    pic.style.transition="all 0.5s ease";
    card.style.transform=(`rotateY(0deg) rotateX(0deg)`);
    pic.style.transform=`translateZ(0px) rotateZ(0)`;
})



