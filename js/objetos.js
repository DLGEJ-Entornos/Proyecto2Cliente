//USUARIOS
function Usuario(nombre, pass, foto) {
  function genId() {
    let res;
    //let listaUsers = new ListaUsuarios(); //inicia vacia 
    //CAMBIAR POR METODO LENGTH DE LISTA
    let lengthLista = listaUsers.lista.length;
    if (lengthLista == 0) {
      res = 0;
    } else {
      res = listaUsers.lista[lengthLista - 1].id + 1;
    }
    console.log("ID Autogenerado:", res);
    return res;
  }

  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = genId();
  this.logInSesion = cookUserSave;
  this.loged = false;
}

function ListaUsuarios() {

  this.init = stInitUsers;
  this.lista = new Array(); //de objs (ME GUARDA OBJETO)
  this.volcar = volcarDeSt;
  this.grabar = stGrabar;

  this.add = (objUsuario) => {
    this.lista.push(objUsuario);
    this.grabar(this.lista);
  };

  this.find = function(nombre){
    let user, encontrado = false;
    let lista = listaUsers.lista;
    for(let i = 0; i < lista.length && !encontrado; i++) {
      if (listaUsers.lista[i].nombre == nombre) {
        encontrado = true;
      }
    }
    
    if (!encontrado) {
      return null;
    }else{
      return user;
    }
  }

  this.mostrar = function () { //porque no va? //siendo array SI(en INIT)!
    console.table(this.lista);
  }
}
//HILOS
