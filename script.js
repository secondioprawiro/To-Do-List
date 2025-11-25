document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list  = document.getElementById("todo-list");

    const STORAGE_KEY = "todos";

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const text = input.value.trim();

        if(!text) return;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Hapus";
        btnDelete.classList.add("delete-btn");

        li.appendChild(span);
        li.appendChild(btnDelete);

        list.appendChild(li);

        input.value = "";
    })

    

    list.addEventListener("click", function (event){
        if(event.target.classList.contains("delete-btn")){
            const li = event.target.closest("li");
            if(li){
                li.remove();
            }
        }
    })
})

