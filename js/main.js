const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");

btnAgregar.onclick = () => {
  const tarea = agregar.value;
  if (tarea) {
    const li = document.createElement("li");
    li.innerText = tarea;
    lista.appendChild(li);
    agregar.value = "";
  }
};

btnEliminar.onclick = () => {
  tarea = eliminar.value;
  if (tarea) {
    const items = lista.getElementsByTagName("li");
    for (i = 0; i < items.length; i++) {
      if (items[i].textContent === tarea) {
        lista.removeChild(items[i]);
        eliminar.value = "";
      }
    }
  }
};
