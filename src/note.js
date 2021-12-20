const form=document.getElementById("form");
const input=document.getElementById("input");
const todos=document.getElementById("todos");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    todofun();
    

});
function todofun(todo = {})
{
    const todoText=input.value;
    if(todoText)
    {
       
        const todoEl=document.createElement("li");
        if(todo && todoEl.completed)
        {
            todoEl.classList.add("completed");
        }
        todoEl.innerText=todoText;
        
        todoEl.addEventListener("contextmenu",(e)=>
        {
            e.preventDefault();
            todoEl.classList.toggle("completed");
            updateLS(); 

        })
        todoEl.addEventListener("dblclick",(e)=>
        {
             e.preventDefault();
             todoEl.remove();
             updateLS(); 

        })

        todos.appendChild(todoEl);
        input.value="";
        updateLS();
    }
}
function updateLS()
{
    const todosEl=document.querySelectorAll("li");
    const todos=[];

    todosEl.forEach(todoEl =>{
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains("completed")

        })

    })
    localStorage.setItem("todos",JSON.stringify(todos));
}