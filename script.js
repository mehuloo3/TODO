//acces the element of the html
const todoList=document.getElementById("todoList");
const newToDoInput=document.getElementById("newToDoInput");
const addTodoBtn=document.getElementById("addTodoBtn");

//btn control
addTodoBtn.addEventListener("click",()=>
    {
     const newTodotext=newToDoInput.value;
     if(newTodotext!=="")
        {
//element banava
const newTodoitem=document.createElement("li");
newTodoitem.innerText=newTodotext;
//deleting button
const deleteTodoBtn=document.createElement("button")
deleteTodoBtn.innerText="X";

deleteTodoBtn.classList.add("delete-todo-btn");
//removing the content
deleteTodoBtn.addEventListener("click",function()
{
    newTodoitem.remove();
});
//maintain the all append element
newTodoitem.appendChild(deleteTodoBtn);
todoList.appendChild(newTodoitem);
newToDoInput.value="";
        }
     
    });


