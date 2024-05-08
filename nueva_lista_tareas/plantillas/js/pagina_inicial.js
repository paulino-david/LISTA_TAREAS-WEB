const url_usuario = "http://localhost:5000/usuarios"

fetch(url_usuario, {
    method: "GET",
}).then(response_usuario => response_usuario.json())
    .then(data_usuario => {
        console.log("Estos son los datos:", data_usuario)
        const url2 = "http://localhost:5000/tareas/crear"
        
        const nombre_tarrea = document.getElementById("nombre_tarrea")
        
        const tarrea = document.getElementById("tarea")
        const lista_tareas = document.getElementById("lista_tareas")
        const guardar = document.getElementById("guardar")
        const cerrar_sesion = document.getElementById("cerrar_sesion")
        
        cerrar_sesion.addEventListener("click", e => {
            e.preventDefault()
            let respuesta = window.confirm("¿Estas seguro de que quiere cerrar la sesion?")
            if (respuesta) {
                return window.close()
            }
        })
        
        let nombre = Array(nombre_tarrea.value)
        console.log(nombre)
        
        guardar.addEventListener("click", e => {
            e.preventDefault()
            if (tarrea.value == "") {
                tarrea.style.backgroundColor = "tomato"
                return alert("Debe imprimir alguna tarea antes de añdir")
            }
            else if (nombre_tarrea.value == "") {
                nombre_tarrea.style.backgroundColor = "tomato"
                return alert("La tarea debe tener un nombre")
            }
            else {
                post2()
                let lista = document.createElement("li")
                lista.style.listStyle = "none"
                lista.style.display = "flex"
                lista.style.justifyContent = "flex-start"
                lista.style.fontSize = "x-large"
                lista.style.marginTop = "30px"
                let texto = document.createTextNode(tarrea.value)
                let check = document.createElement("input")
                check.setAttribute("type", "checkbox")
                check.id = "check"
                lista.appendChild(check)
                lista.appendChild(texto)
                lista_tareas.appendChild(lista)
            }
        }
        )
        
        const post2 = function () {
            // let argumentos=[...arguments]
            const postData = {
                nombreTarea: nombre_tarrea.value,
                entrada1: tarrea.value,
                
        
        
        
            }
            console.log(postData)
            fetch(url2, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                //Para convertir el objeto de JS en un JSON y pasarlo dentro del body de la url especificada
                body: JSON.stringify(postData),
            })
                .then(response2 => response2.json())
                .then(data2 => {
                    console.log(data2)
                    console.log("Has usado el POST correctamente")
                })
                .catch(error => {
                    console.error("Error", error);
                })
        
            return
        }
    })
    .catch(error => {
        console.error("Error", error);
    })



