const inputBox=document.getElementById("input-place");
const lists=document.getElementById("lists");
function addTask(){
    if(inputBox.value===''){
        alert("please add a list before you add");
    }else{
        const li=document.createElement('li')
        li.textContent=inputBox.value;
        lists.appendChild(li);
        const cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    inputBox.value='';
    savedata();
}
/*   */ 
lists.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('list1');

    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    savedata();
},false);
/* lets wright a code to save changes */
function savedata(){
    localStorage.setItem("myTodoListApp2",lists.innerHTML);
}
function showData(){
    lists.innerHTML=localStorage.getItem("myTodoListApp2");
}


showData();




