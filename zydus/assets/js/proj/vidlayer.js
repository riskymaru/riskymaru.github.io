


function createHTMLObject(_name,_obj,_text,_visible,_class){

    if(_class == undefined){_class = "div"}

    let newObj = document.createElement(_class);
    newObj.id = _name;
    newObj.innerHTML = _text;
    Object.assign(newObj.style, _obj);
    newObj.style.display = (_visible ? "block" :"none");
    document.body.appendChild(newObj);
    return newObj;
}

var AdBar = createHTMLObject(
    "AdBar",
    {
        background:'rgba(0, 0, 0, 0.95)',
        position:"fixed",
        width:'100vw',
        height:"100vh",
        textAlign:"center",
        color:"white",
        fontFamily:"Roboto",
        fontSize:"12px",
        zIndex:99999,
        margin:"0",
        top: 0,
        //borderRadius:"20px",
    },
    "",
    false
);




let btn = document.getElementById("btn");
btn.id = "btn"
btn.style.backgroundColor = '#ffcc00';
btn.style.width = '70px';
btn.style.height = '30px';
btn.style.margin = 'auto';
btn.style.padding = '20px 10px 5px 5px';
btn.style.background = 'rgba(0, 0, 0, 0.75)';
btn.style.textAlign = "center";
btn.style.color = "white";
btn.style.fontFamily = "Roboto";
btn.style.fontSize = "16px";
btn.style.borderRadius = "10px";

$("#btn").click(function(){
    //reload page
    stopVid();
});


let vid = document.getElementById("vidContainer")
vid.style.marginTop = '10vh'
AdBar.appendChild(vid);

const video = document.querySelector("#vidclip");

function stopVid(){
    video.pause();
    video.currentTime = 0;
    AdBar.style.display = 'none';
}

