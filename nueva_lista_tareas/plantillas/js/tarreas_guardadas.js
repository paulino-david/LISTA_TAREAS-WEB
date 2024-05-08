const url = "http://localhost:5000/tareas"

const url4 = "http://localhost:5000/tareas/eliminar"

fetch(url, {
  method: "GET",
}).then(response => response.json())
  .then(data => {
    console.log("Estos son los datos:", data)
    const tabla_tareas = document.getElementById("tabla")
    data.forEach(item => {
      
      const filas = document.createElement("tr")
      // const boton = document.createElement("button")
      // boton.id = "borrar"
      // boton.className = "botones_gt"
      // const texto = document.createTextNode("Borrar")
      // boton.appendChild(texto)
      filas.innerHTML = `<td>${item["id"]}</td><td>${item["nombre_tarea"]}</td><td>${item["descripcion"]}</td><td>${item["hora"]}</td><td>${item["fecha"]}</td>`
      // filas.appendChild(boton)
      tabla_tareas.appendChild(filas)
      
// const borrar = document.getElementById("borrar")
// borrar.addEventListener("click", e => {
//   e.preventDefault()
//   console.log(data)
//   // post4(id_tarea.value)
// })
      // fetch(url4, {
      //   method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
      //   body: JSON.stringify(postData4),
      // })
      //   .then(response4 => response4.json())
      //   .then(data4 => {
      //     console.log(data4)
      //     console.log("Has usado el DELETE correctamente")
      //   })
      //   .catch(error => {
      //     console.error("Error", error);
      //   })

      
    })
  })
  .catch(error => {
    console.error("Error en el uso del GET", error)
  });








// const id_tarea = document.getElementById("eliminar_id")
// const borra = document.getElementById("borrar")

// borra.addEventListener("click", e => {
//     e.preventDefault()
//     // console.log(id_tarea.value)
//     post4(id_tarea.value)
//     return
// })
// const post4 = function (idTarea) {
//     // let argumentos=[...arguments]
//     const postData4 = {
//         idTarea: idTarea,

//     }
//     console.log(postData4)
//     fetch(url4, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
//         body: JSON.stringify(postData4),
//     })
//         .then(response4 => response4.json())
//         .then(data4 => {
//             console.log(data4)
//             console.log("Has usado el DELETE correctamente")
//         })
//         .catch(error => {
//             console.error("Error", error);
//         })

//     return
// }