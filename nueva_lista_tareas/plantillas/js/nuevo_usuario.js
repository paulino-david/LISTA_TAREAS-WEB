const url = "http://localhost:5000/usuarios/crear"

const usuario = document.getElementById("usuario")
const contrasena = document.getElementById("contrasena")
const cerrar_sesion=document.getElementById("cerrar_sesion")
// cerrar_sesion.addEventListener("click",e=>{
//     e.preventDefault()
//     let respuesta=window.confirm("¿Estas seguro de que quiere cerrar la sesion?")
//     if (respuesta){
//         const henlace=document.createElement("a")
//         henlace.setAttribute("href","./templates/sesion")
//         cerrar_sesion.appendChild(henlace)
//     }
// })

const guardar = document.getElementById("guardar")
guardar.addEventListener("click", e => {
    e.preventDefault()
    if (usuario.value === "") {
        alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
        usuario.style.background = "tomato"
        contrasena.style.background = "white"
        return
    }
    else if (contrasena.value === "") {
        alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
        contrasena.style.background = "tomato"
        usuario.style.background = "white"
        return
    }
    else {
        contrasena.style.background = "white"
        usuario.style.background = "white"
        post( usuario.value, contrasena.value)
        usuario.value = ""
        contrasena.value = ""
        return
    }
    
})


const post = function (usuario, contrasena) {
    const postData = {
        usuario: usuario,
        contrasena: contrasena
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
        body:  JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Has usado el POST correctamente")
        })
        .catch(error => {
            console.error("Error", error);
        })
}


