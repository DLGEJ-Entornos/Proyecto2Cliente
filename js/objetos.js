//USUARIOS
function Usuario(nombre,pass,foto) {
  function genId() {
    let res;
    let listaUsers = new ListaUsuarios();
    if (listaUsers.lista.length == 0) {
      res = 0;
    }else{
      res = listaUsers.lista[listaUsers.lista.length-1].id + 1;
    }
    console.log(res);
    return res;
  }

  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = 0;
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
  this.mostrar = () => {
  let lUsers= new ListaUsuarios();
    console.table(lUsers.lista);
  }
}

//HILOS
