from flask import Blueprint,request,jsonify
from modelos.usuarios import Usuarios
from utilidades.db import db
import json

rutasUsuarios=Blueprint("usuarios",__name__)

@rutasUsuarios.route("/usuarios",methods=["GET"])
def mostrarTodo():
    #Para coger datos desde la base de datos
    idUsuario=db.session.query(Usuarios.idUsuarios).all()
    usuario=db.session.query(Usuarios.usuario).all()
    contrasena=db.session.query(Usuarios.contrasena).all()

    #Para Mostrar los datos en forma de json
    lista_usuario=[]
    num=0
    while num<len(usuario):
        llaves={"idUsuario":idUsuario[num][0],"usuario":usuario[num][0],"contrasena":contrasena[num][0]}
        lista_usuario.append(llaves)
        num=num+1
    return lista_usuario

@rutasUsuarios.route("/usuarios/crear",methods=["POST"])
def añadirUsuario():
    #Para coger los datos del usuario en forma de json
    dato=request.get_json()
    #Para insertar los datos cogidos en forma de json en la clase utilizada para crear la tabla
    usuario=dato.get("usuario")
    contrasena=dato.get("contrasena")
    nuevoUsuario=Usuarios(usuario,contrasena)

    #Para insertar los datos que fueron insertados dentro de la clase a la tabla que tenga el mismo nombre que la clase
    db.session.add(nuevoUsuario)
    #Para guardar el proceso
    db.session.commit()
    return {"mensaje":"usuario añadido"}

@rutasUsuarios.route("/usuarios/actualizar",methods=["PUT"])
def actualizarUsuario():
    datos_actualizados=request.get_json()

    id_usuario=datos_actualizados.get("idUsuario")
    nom_usuario=datos_actualizados.get("nombreUsuario")
    contrasena=datos_actualizados.get("contrasena")

    actualizar=Tareas.query.get_or_404(id_usuario)
    actualizar.nombre_usuario=nom_usuario
    actualizar.contrasena=contrasena

    actualizar.fecha=(f"{time.localtime().tm_mday}/{time.localtime().tm_mon}/{time.localtime().tm_year}")
    actualizar.hora=(f"{time.localtime().tm_hour}:{time.localtime().tm_min}:{time.localtime().tm_sec}")

    db.session.commit()

    usuario=db.session.query(Usuarios.usuario).all()
    contrasena=db.session.query(Usuarios.contrasena).all()
    fecha=db.session.query(Usuarios.fecha).all()
    hora=db.session.query(Usuarios.hora).all()
    lista_usuario=[]
    num=0
    while num<len(usuario):
        llaves={"nombre_tarea":usuario[num][0],"contrasena":contrasena[num][0]}
        lista_usuario.append(llaves)
        num=num+1
    return {"mensaje":"tarea actualizada"}

@rutasUsuarios.route("/usuarios/eliminar",methods=["DELETE"])
def eliminarUsuario():
    datos_eliminar=request.get_json()

    usuario=datos_eliminar.get("usuario")

    eliminar=Tareas.query.get_or_404(usuario)
    db.session.delete(eliminar)
    db.session.commit()

    return {"mensaje":"tarea eliminada"}