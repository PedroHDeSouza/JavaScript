let contador = 0;

function adicionartarefa() {
  const input = document.getElementById("tarefa");
  const valor = input.value.trim();

  if (valor !== "") {
    contador++;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "tarefa-" + contador;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = valor;

    li.appendChild(checkbox);
    li.appendChild(label);

    li.addEventListener("click", function (e) {

      if (e.target.tagName.toLowerCase() === "input") return;

     
      const textoAtual = label.textContent;
      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = textoAtual;
      inputEdit.className = "editor-inline";

      li.replaceChild(inputEdit, label);
      inputEdit.focus();

      inputEdit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          salvarEdicao();
        }
      });

      inputEdit.addEventListener("blur", salvarEdicao);

      function salvarEdicao() {
        const novoTexto = inputEdit.value.trim() || textoAtual;
        label.textContent = novoTexto;
        li.replaceChild(label, inputEdit);
      }
    });

    document.getElementById("lista").appendChild(li);
    input.value = "";
  }
}
