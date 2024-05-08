from flask import Blueprint,request,jsonify,render_template
from flask_cors import CORS,cross_origin
import json
from utilidades.db import db
from modelos.tareas import Tareas
from rutas import ruta_usuarios
import time

rutaTareas=Blueprint("tareas",__name__)

@rutaTareas.route("/tareas",methods=["GET"])
@cross_origin()
def mostrarTodo():
    id_tarea=db.session.query(Tareas.id).all()
    nombre=db.session.query(Tareas.nombre_tarea).all()
    tarea=db.session.query(Tareas.descripcion).all()
    fecha=db.session.query(Tareas.fecha).all()
    hora=db.session.query(Tareas.hora).all()

    lista_tareas=[]
    num=0
    while num<len(nombre):
        llaves={"id":id_tarea[num][0],"nombre_tarea":nombre[num][0],"descripcion":tarea[num][0],"fecha":fecha[num][0],"hora":hora[num][0]}
        lista_tareas.append(llaves)
        num=num+1
    return lista_tareas

@rutaTareas.route("/tareas/crear",methods=["POST"])
@cross_origin()
def añadirTareas():
    datos=request.get_json()
    nom_tarea=datos.get("nombreTarea")
    tarea=datos.get("entrada1")
    tarea=Tareas(nom_tarea,tarea,(f"{time.localtime().tm_mday}/{time.localtime().tm_mon}/{time.localtime().tm_year}"),(f"{time.localtime().tm_hour}:{time.localtime().tm_min}:{time.localtime().tm_sec}"))
    db.session.add(tarea)
    db.session.commit()
    # if request.method=="POST":
    #     nombre=request.form
    #     tarea=request.form
    #     print(f"nombre de la tarea:{nombre}")
    #     print(f"Esta es la tarea:{tarea}")
    return {"mensaje":"tarea añadida"}

@rutaTareas.route("/tareas/actualizar",methods=["PUT"])
@cross_origin()
def actualizarTareas():
    datos_actualizados=request.get_json()

    id_tarea=datos_actualizados.get("idTarea")
    nom_tarea=datos_actualizados.get("nombreTarea")
    tarea=datos_actualizados.get("entrada1")

    actualizar=Tareas.query.get_or_404(id_tarea)
    actualizar.nombre_tarea=nom_tarea
    actualizar.descripcion=tarea

    actualizar.fecha=(f"{time.localtime().tm_mday}/{time.localtime().tm_mon}/{time.localtime().tm_year}")
    actualizar.hora=(f"{time.localtime().tm_hour}:{time.localtime().tm_min}:{time.localtime().tm_sec}")

    db.session.commit()

    nombre=db.session.query(Tareas.nombre_tarea).all()
    tarea=db.session.query(Tareas.descripcion).all()
    fecha=db.session.query(Tareas.fecha).all()
    hora=db.session.query(Tareas.hora).all()
    lista_tareas=[]
    num=0
    while num<len(nombre):
        llaves={"nombre_tarea":nombre[num][0],"descripcion":tarea[num][0]}
        lista_tareas.append(llaves)
        num=num+1
    return {"mensaje":"tarea actualizada"}

@rutaTareas.route("/tareas/eliminar",methods=["DELETE"])
@cross_origin()
def eliminarTareas():

    datos_eliminar=request.get_json()

    id_tarea=datos_eliminar.get("idTarea")

    eliminar=Tareas.query.get_or_404(id_tarea)
    db.session.delete(eliminar)
    db.session.commit()

    return {"mensaje":"tarea eliminada"}