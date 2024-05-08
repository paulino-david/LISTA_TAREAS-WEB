from flask import Flask
from utilidades.db import db
from rutas.ruta_tareas import rutaTareas
from rutas.ruta_usuarios import rutasUsuarios
from flask_cors import CORS,cross_origin


app=Flask("__name__")
cors=CORS(app)
#Para configurar la coneccion de la base de datos con la que me quiero conectar
app.config["SQLALCHEMY_DATABASE_URI"]="mysql://root:paulino2005@localhost/lista_tareas"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
app.config["CORS_HEADERS"]="Content-Type"

#Para inicializar el proceso configurado con "db" que es el objeto de SQLAlchemy
db.init_app(app)

#Crear Tablas
with app.app_context():
    db.create_all()

#Creacion de rutas
#El register_blueprint(ruta) ayuda al servidor que vaya al archivo que tiene rutas y que esté atento a las rutas que el cliente entre y que coincidan con las rutas de aquel archivo
app.register_blueprint(rutaTareas)
app.register_blueprint(rutasUsuarios)

if __name__=="__main__":
    app.run(debug=True)