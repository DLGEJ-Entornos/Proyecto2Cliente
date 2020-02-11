//USUARIOS
var listaUsuarios = [];
function ListaUsuarios() {

  this.lista = new Array(); 
  //vuelca de LS a lista (Array)
  this.volcarDeLS = () => {this.lista = JSON.parse(localStorage.getItem("Usuarios"));}; 


  this.add = (objUsuario) => {
    this.lista.push(objUsuario);
  };
  this.mostrar = console.table(this.lista);
}

function Usuario(nombre,pass,foto,id) {
  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = id;
  
}

//HILOS
