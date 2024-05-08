const url3 = "http://localhost:5000/tareas/actualizar"

const id_tarea = document.getElementById("id_tarea")
const Nnombre = document.getElementById("Nnombre_tarea")
const Ntarea = document.getElementById("Ntarea")
const actualizar = document.getElementById("actualizar")

actualizar.addEventListener("click", e => {
    e.preventDefault()
    console.log(id_tarea.value)
    console.log(Nnombre.value)
    console.log(Ntarea.value)
    post3(id_tarea.value,Nnombre.value,Ntarea.value)
    return
})
const post3 = function (idTarea, nombreTarea, entrada1) {
    // let argumentos=[...arguments]
    const postData3 = {
        idTarea: idTarea,
        nombreTarea: nombreTarea,
        entrada1: entrada1


    }
    console.log(postData3)
    fetch(url3, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
        body: JSON.stringify(postData3),
    })
        .then(response3 => response3.json())
        .then(data3 => {
            console.log(data3)
            console.log("Has usado el POST correctamente")
        })
        .catch(error => {
            console.error("Error", error);
        })

    return
}