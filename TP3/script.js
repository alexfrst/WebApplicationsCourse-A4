document.getElementById("2").style.animationPlayState="paused"
document.getElementById("3").style.animationPlayState="paused"
document.getElementById("4").style.animationPlayState="paused"
let counter = 0;
document.getElementById("1").addEventListener("animationiteration",StopAnim)


const LaunchAnim = () => {
    const inputs = document.getElementsByTagName("input");
    const border = inputs[0].value;
    const bg = inputs[1].value;
    const borderEnd = inputs[2].value;
    const bgEnd = inputs[3].value;


    document.styleSheets[0].insertRule(`@keyframes pulse {\n0% { background-color: ${bg};\n border:${border} solid 10px;  }\n100% {background-color: ${bgEnd};\n border:${borderEnd} solid 10px;  }\n}`)
    document.getElementById("1").classList.add("anim")
    document.getElementById("1").getAnimations()[0].currentTime=0;
    console.log(document.styleSheets[0]['cssRules'][12])
    counter = 0
    document.getElementById("1").style.animationPlayState="running"
}

const ZoomToggler = () =>{
    if(document.getElementById("2").style.animationPlayState=="paused"){
        if(!document.getElementById("2").classList.contains("zooming")){
            document.getElementById("2").classList.add("zooming")
        }
        document.getElementById("2").style.animationPlayState="running"
    }else{
        document.getElementById("2").style.animationPlayState="paused"
    }
}

const MoveToggler = () =>{
    if(document.getElementById("3").style.animationPlayState=="paused"){
        if(!document.getElementById("3").classList.contains("moving")){
            document.getElementById("3").classList.add("moving")
        }
        document.getElementById("3").style.animationPlayState="running"
    }else{
        document.getElementById("3").style.animationPlayState="paused"
    }
}

const RotateToggler = () =>{
    if(document.getElementById("4").style.animationPlayState=="paused"){
        if(!document.getElementById("4").classList.contains("rotate")){
            document.getElementById("4").classList.add("rotate")
        }
        document.getElementById("4").style.animationPlayState="running"
    }else{
        document.getElementById("4").style.animationPlayState="paused"
    }
}

const StopAnim = () =>{
    if (counter > 0){
        counter = 0
        document.getElementById("1").style.animationPlayState="paused"

    }else{
        counter = counter +1
        document.getElementById("1").style.animationPlayState="running"
    }
}

 