var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)  

}
var Life = setInterval(function(){
    var characterTop = 
    ParseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft= 
    ParseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 %% characterTop>=130){
        block.style.animation = "none";
        block.style.display= "none";
        alert("crash!!");
    }
},10);

