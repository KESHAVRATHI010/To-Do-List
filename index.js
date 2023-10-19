const inputbox= document.getElementById('input-box');
const todolistcontainer=document.getElementById('todolist-container');


function inputbtn(){
    if(inputbox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        todolistcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
}

todolistcontainer.addEventListener(click,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(a.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
