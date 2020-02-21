NOTAS PROYECTO 2 CLIENTE 
=======================

##REQUISITOS:

- Eventos Raton (1 onclick + otros 2) [Onclick OK!] 
- Eventos Teclado para validar (2 min)
- 3 RegExp
- Uso de cookies OK!
- Creación dinámica del DOM [OK!]
- Carpeta ./js con scripts  [OK!]

- Memoria pdf:
   
   * Titulo App 
   * Nombre apell.
   * Indice
   * Objetivo app
   * Explicar funcionamiento y requisitos cumplidos con capturas.
   * Referencia de los archivos html o js donde esta codificado cada requerimiento.
   * Conclusiones.


- se Valora:

   * Limpieza claridad codigo (coments, justificación parr)
   * Diseño y presentación y originalidad.
   * Funcionamiento correcto, manejo de errores.
   * Ubicar en codigo con comments Requisitos: 
	 ///////////////// EVENTO RATON ////////////////
   * Requerimientos deben tener funcionalidad dentro de la app.

##POSIBLES PROYECTOS:

- FORO (Registro, Login, crear post, responder post, mencionar, puntuar, eliminar, Inserción IMGS, Links(navegables).
   * Filtrado, Ordenado Post
   * Salas

##TAREAS:

- 'Backend'
   * Login, Manipular Hilos-Posts(crear,borrar,mencionar..), puntuar,links.
   *Tags en hilos

-'Frontend'
   * Inicio (LandingPage)
      *PopUp -IniciarSesion,Registrar
   * Mis datos
   * Hilos
      *HILO
      *Subcategorias?
      *Tags

PARA GUARDAR OBJETOS JSON EN LOCALSTORAGE:
https://www.competa.com/blog/storing-javascript-object-localstorage/

## IMPLICANCIAS AL CAMBIAR DE PAGINA
- Se vuelven a ejecutar los scripts(shared.js , luego volcado, luego user.loged = false)!
  * Solucion: graba estado lista users (con login user) a LS
- Var logueado = false; 
- COOKIE LOGING PERMANECE!
