const url4 = "http://localhost:5000/tareas/eliminar"

const id_tarea = document.getElementById("eliminar_id")
const borra = document.getElementById("borra")

borra.addEventListener("click", e => {
    e.preventDefault()
    // console.log(id_tarea.value)
    post4(id_tarea.value)
    return
})
const post4 = function (idTarea) {
    // let argumentos=[...arguments]
    const postData4 = {
        idTarea: idTarea,

    }
    console.log(postData4)
    fetch(url4, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
        body: JSON.stringify(postData4),
    })
        .then(response4 => response4.json())
        .then(data4 => {
            console.log(data4)
            console.log("Has usado el DELETE correctamente")
        })
        .catch(error => {
            console.error("Error", error);
        })

    return
}