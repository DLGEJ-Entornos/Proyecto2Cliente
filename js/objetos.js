//USUARIOS
function Usuario(nombre,pass,foto) {
  function genID() {
    if (this.lista.length == 0) {
      return 0; 
    }else{
      return this.lista[this.lista.length-1].id + 1;
    }
  }

  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = genId;
}

function ListaUsuarios() {
  this.existe = stUsersExist; 
  this.init = stInitUsers; 
  this.lista = new Array(); //de objs 
  this.volcar = volcarDeSt;
  this.grabar = stGrabar;

  this.add = (objUsuario) => {
    this.lista.push(objUsuario);
  };
  this.mostrar = console.table(this.lista);
}

//HILOS
