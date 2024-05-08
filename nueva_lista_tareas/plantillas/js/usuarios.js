const url = "http://localhost:3000/añadir_usuarios"

const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const usuarios = document.getElementById("usuario")
const contrasena = document.getElementById("contrasena")
const cerrar_sesion=document.getElementById("cerrar_sesion")
cerrar_sesion.addEventListener("click",e=>{
    e.preventDefault()
    let respuesta=window.confirm("¿Estas seguro de que quiere cerrar la sesion?")
    if (respuesta){
        return 
        
    }
})

// const nuevoUsuario_form = document.getElementById("nuevoUsuario_form")
// nuevoUsuario_form.addEventListener("submit", e => {
//     e.preventDefault()
//     if (nombre.value === "") {
//         nombre.style.background = "tomato"
//         alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
//         return
//     }
//     else if (apellidos.value === "") {
//         alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
//         apellidos.style.background = "tomato"
//         nombre.style.background = "white"
//         return
//     }
//     else if (usuario.value === "") {
//         alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
//         usuario.style.background = "tomato"
//         apellidos.style.background = "white"
//         nombre.style.background = "white"
//         return
//     }
//     else if (contrasena.value === "") {
//         alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
//         contrasena.style.background = "tomato"
//         usuario.style.background = "white"
//         apellidos.style.background = "white"
//         nombre.style.background = "white"
//         return
//     }
//     else {
//         contrasena.style.background = "white"
//         usuario.style.background = "white"
//         apellidos.style.background = "white"
//         nombre.style.background = "white"
//         post(nombre.value, apellidos.value, usuario.value, contrasena.value)
//         return
//     }
    
// })


// const post = function (nombre, apellidos, usuario, contrasena) {
//     const postData = {
//         nombre: nombre,
//         apellidos: apellidos,
//         usuario: usuario,
//         contrasena: contrasena
//     }

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
//         body:  JSON.stringify(postData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Has usado el POST correctamente")
//         })
//         .catch(error => {
//             console.error("Error", error);
//         })
// }


