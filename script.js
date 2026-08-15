const tareas = [
    { id: 1, descripcion: "Hacer mercado", completado: false },
    { id: 2, descripcion: "Estudiar para la prueba", completado: false },
    { id: 3, descripcion: "Sacar a pasear a Tobby", completado: false }
]

let ultimoId = 3

const inputTarea = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#btnAgregar")
const listaTareas = document.querySelector("#listaTareas")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

function renderTareas() {
    let html = ""

    for (let tarea of tareas) {
        html += `
            <div class="tarea">
                <span>${tarea.id}</span>

                <span class="${tarea.completado ? "tarea-realizada" : ""}">
                    ${tarea.descripcion}
                </span>

                <input
                    class="checkbox"
                    type="checkbox"
                    ${tarea.completado ? "checked" : ""}
                    onchange="cambiarEstado(${tarea.id})"
                >

                <button
                    class="btn-eliminar"
                    onclick="borrarTarea(${tarea.id})"
                >
                    ❌
                </button>
            </div>
        `
    }

    listaTareas.innerHTML = html
    totalTareas.innerHTML = tareas.length

    const realizadas = tareas.filter(tarea => tarea.completado === true)
    tareasRealizadas.innerHTML = realizadas.length
}

btnAgregar.addEventListener("click", () => {
    const descripcion = inputTarea.value.trim()

    if (descripcion === "") {
        alert("Debes escribir una tarea")
        return
    }

    ultimoId++

    const nuevaTarea = {
        id: ultimoId,
        descripcion: descripcion,
        completado: false
    }

    tareas.push(nuevaTarea)
    inputTarea.value = ""

    renderTareas()
})

function borrarTarea(id) {
    const indice = tareas.findIndex(tarea => tarea.id === id)

    tareas.splice(indice, 1)

    renderTareas()
}

function cambiarEstado(id) {
    const tareaEncontrada = tareas.find(tarea => tarea.id === id)

    tareaEncontrada.completado = !tareaEncontrada.completado

    renderTareas()
}

renderTareas()