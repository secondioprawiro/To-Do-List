document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list  = document.getElementById("todo-list");

    const STORAGE_KEY = "todos";
    let todos = [];
    
    // load data
    function loadTodos(){
        const data = localStorage.getItem(STORAGE_KEY);
        if(data){
            todos = JSON.parse(data);
        }else{
            todos = [];
        }
    }

    //save data
    function saveTodos(){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }

    //render data
    function renderTodos(){
        list.innerHTML = "";

        todos.forEach(function (todo){
            const li = document.createElement("li");
            li.dataset.id = todo.id;

            const span = document.createElement("span");
            span.textContent = todo.text;

            const btnDelete = document.createElement("button");
            btnDelete.textContent = "hapus";
            btnDelete.classList.add("delete-btn");

            li.appendChild(span);
            li.appendChild(btnDelete);
            list.appendChild(li);
        })
    }
    

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const text = input.value.trim();
        if(!text) return;

        const newTodo = {
            id: Date.now(),
            text: text
        };

        todos.push(newTodo);
        saveTodos();
        renderTodos();

        input.value = "";
    });

    

    list.addEventListener("click", function (event){
        if(event.target.classList.contains("delete-btn")){
            const li = event.target.closest("li");
            const id = Number(li.dataset.id);

            todos = todos.filter(function(todo){
                return todo.id !== id;
            });
            
            saveTodos();
            renderTodos();
        }
    });

    loadTodos();
    renderTodos();
})

