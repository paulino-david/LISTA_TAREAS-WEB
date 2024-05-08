from utilidades.db import db

class Usuarios(db.Model):
    
    idUsuarios=db.Column(db.Integer(),nullable=False,primary_key=True)
    usuario=db.Column(db.String(45),nullable=False,unique=True)
    contrasena=db.Column(db.String(100),nullable=False)
    relacion=db.relationship("Tareas",lazy="select")

    def __init__(self,usuario,contrasena):
        self.usuario=usuario
        self.contrasena=contrasena