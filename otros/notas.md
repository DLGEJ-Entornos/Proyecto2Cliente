NOTAS PROYECTO 2 CLIENTE 
=======================

##REQUISITOS:

- Eventos Raton (1 onclick + otros 2) TODOS //++ hilos.js  OK!
- Eventos Teclado para validar (2 min) OK!
- 3 RegExp (1 //++ hilos.js fun crearBtnColapsable) OK!
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


## DECLARACIÓN RECUPERACION DE HILOS CON VARIOS NIVELES FUNCIONAL: 

arrSup = [
  {
    data: 'lvl0',
    hijos:[
      {
        data: 'lvl1',
        hijos:[
          {
            data:'lvl2'
          }
          ]
      }
      ]
  },
  {
    data: '2ºlvl0',
    hijos:[
      {
        data: '2ºlvl1',
        hijos:[
      		{
      			data:'lvl2'
      		}
          ]
      }
      ]
  }
  ];
console.table(arrSup);
console.log(arrSup);
localStorage.setItem("ArrSup", JSON.stringify(arrSup));
console.log("recuperado arrSup:");
console.log(JSON.parse(localStorage.getItem("ArrSup")));
##


##Notas sucias
Al crear hilo:
* INPUTS: Titulo,TXT,TAGS

