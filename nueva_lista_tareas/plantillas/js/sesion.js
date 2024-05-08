const url3 = "http://localhost:5000/usuarios"

const usuario = document.getElementById("usuario")
const contrasena = document.getElementById("contrasena")

const iniciar = document.getElementById("iniciar")
const respuesta=document.getElementById("respuesta")
iniciar.addEventListener("click", e => {
    if (usuario.value === "") {
        e.preventDefault()
        alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
        usuario.style.background = "tomato"
        return
    }
    else if (contrasena.value === "") {
        e.preventDefault()
        alert("Introduzca su nombre porfavor, no debe dejar ningun campo vacillo")
        contrasena.style.background = "tomato"
        usuario.style.background = "white"
        return
    }
    else {
        
        contrasena.style.background = "white"
        usuario.style.background = "white"
        fetch(url3)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // while(num<4){
                //     console.log(data[num])
                //     num++
                // }
                let usuarios_array=[]
                let contrasena_array=[]
                const nombre_usuario=document.getElementById("nombre_usuario")
                data.forEach(item=>{
                    
                    usuarios_array.push(item["usuario"])
                    contrasena_array.push(item["contrasena"])
                    return
                })

                if(usuarios_array.includes(usuario.value) && contrasena_array.includes(contrasena.value)){
                    data.forEach(item=>{
                        if (item["usuario"]==usuario.value && item["contrasena"]==contrasena.value){
                            return
                        }
                        return 
                    })
                    console.log("Están dentro")
                    respuesta.style.display="none"
                    
                    return
                }
                else{
                    respuesta.style.display="block"
                    respuesta.style.color="red"   
                    usuario.value=""
                    contrasena.value=""
                    console.log("No está dentro")
                    
                    return 
                }
                
            })

            .catch(error => {
                console.error("Error", error);
            })
        
    }
})

        

        
