const listConatiner = document.getElementById("list-container");
const inputBox= document.getElementById("input-box");


function addTask(){
    if(inputBox.value===''){
        alert("Enter Some Data");
    }else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "&#x2717";
        li.appendChild(span);
    }

    inputBox.value="";
    saveTask();

    
}

listConatiner.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveTask();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveTask();
        }
});


function saveTask(){
    localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}

showTask();