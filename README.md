# TP-Final-Api-Rest-WN
TP Final - Desarrollo de API con Express y MongoDB

Concesionario de Vehículos
Este proyecto tiene como objetivo la gestión de un concesionario de vehículos, permitiendo el control de inventario y administración de usuarios.

Funcionalidades
Gestión de Vehículos
Registro de vehículos: Permite agregar nuevos vehículos al inventario con información basica como marca, modelo, precio, descripcion y stock.
Modificación de datos de vehículos: Permite actualizar la información registrada de los vehículos en el inventario.
Eliminación de vehículos: Permite eliminar vehículos del inventario.
Consulta de inventario: Permite consultar el inventario completo de vehículos disponibles en el concesionario.
Consulta de vehículos por ID: Permite consultar un vehículo específico por su ID.
Gestión de Usuarios
Registro y autenticación de usuarios: Permite el registro de nuevos usuarios (administradores, vendedores) en la base de datos.
Login y autenticación de usuarios: Permite a los usuarios loguearse en el sistema para gestionar el concesionario.
Tecnologías Utilizadas
Backend: [Node.js] con [Express.js]
Base de datos: [MongoDB]
Autenticación: [JWT (JSON Web Tokens)] para la gestión de sesiones y autenticación de usuarios.
Instalación
Requisitos Previos
Node.js y npm instalados en tu máquina.
MongoDB en funcionamiento (puede ser local o un servicio en la nube como MongoDB Atlas).
Dependencies Utilizadas
"bcryptjs": "5.1.1": Hasheo de contraseñas para seguridad en la autenticación de usuarios.
"express": "4.21.2": Framework para habilitar el servidor.
"jsonwebtoken": "8.5.1": Para la gestión de tokens JWT y autenticación de usuarios.
.....
