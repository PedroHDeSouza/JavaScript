let contador = 0;

function adicionartarefa(){
    const input = document.getElementById("tarefa");
    const valor = input.value.trim();

    if (valor !== ""){
        contador++; 

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        checkbox.id = "tarefa-" + contador;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = valor;

        li.appendChild(checkbox);
        li.appendChild(label);

        document.getElementById("lista").appendChild(li);
        input.value=""
    }
}