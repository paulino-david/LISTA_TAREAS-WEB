
from utilidades.db import db

#El "db.Model" es para hace saber a la clase Tareas(que sera el nombre de la tabla) que se ah creado para crear tablas de la base de datos con sus columnas, que serán las propiedades de la clase Trarea/ que se usará para etructurar la tabla de la base de datos 
class Tareas(db.Model):
    id=db.Column(db.Integer,nullable=False,primary_key=True)
    nombre_tarea=db.Column(db.String(45),nullable=False)
    descripcion=db.Column(db.String(150),nullable=False)
    fecha=db.Column(db.String(45),nullable=False)
    hora=db.Column(db.String(45),nullable=False)
    idUsuario=db.Column(db.Integer(),db.ForeignKey("usuarios.idUsuarios"))
    # idUsuario=db.Column(db.String(100),nullable=False,foreign_keys=True)

    def __init__(self,nombre_tarea,descripcion,fecha,hora,idUsuario):
        self.nombre_tarea=nombre_tarea
        self.descripcion=descripcion
        self.fecha=fecha
        self.hora=hora
        self.idUsuario