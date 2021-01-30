const ChangeBackGround = () =>{
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    document.body.style.background = `rgb(${r},${g},${b})`
}

const ChangeButtonState = () =>{
    const elem = document.getElementsByTagName("a");
    if(elem[0].style.display === "none"){
        elem[0].style.display = "block"
    }else{
        elem[0].style.display = "none"
    }
}

const UpperCaseButtons = () =>{
    for(const elem of document.getElementsByTagName("a")){
        elem.text = elem.text.toUpperCase();
    }
}

const LowerCaseCaseButtons = () =>{
    for(const elem of document.getElementsByTagName("a")){
        elem.text = elem.text.toLowerCase();
    }
}

const PlaySound = () =>{
    const sound = new Audio("./media/Alarm01.wav");
    sound.play();
}

const HideAll = () =>{
    for(const elem of document.getElementsByTagName("a")){
        if(elem.text != "Hover me"){
            elem.style.visibility = "hidden"
        }
    }
}

const HelloWorld = () =>{
    let text = document.getElementsByTagName("h1")[0].innerText
    console.log(text)
    if(text==" "||text=="Hello World"){
        text = "Bye bye"
    }else{
        text = "Hello World"
    }
    document.getElementsByTagName("h1")[0].innerText = text;
}

const ShowAll = () =>{
    for(const elem of document.getElementsByTagName("a")){
        if(elem.text != "Hover me"){
            elem.style.visibility = "visible"
        }
    }
}