//USUARIOS
function Usuario(nombre, pass, foto) {
  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = genId();
  this.logInSesion = cookUserSave;
  this.loged = false;

  function genId() {
    let res;
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
}

function ListaUsuarios() {
  this.init = stInitUsers;
  this.lista = new Array(); //de objs
  this.volcar = volcarDeSt;
  this.grabar = stGrabar;

  this.killAllSesions = () => {
    for (const user of this.lista) {
      user.loged = false;
    }
  }

  this.add = (objUsuario) => {
    this.lista.push(objUsuario);
    this.grabar(this.lista);
  };

  this.find = function(nombre) {
    let user, encontrado = false;
    let lista = listaUsers.lista;
    for (let i = 0; i < lista.length && !encontrado; i++) {
      if (lista[i].nombre == nombre) {
        encontrado = true;
        user = lista[i];
      }
    }
    if (!encontrado) {
      return null;
    } else {
      return user;
    }
  }

  this.quienLog = function() {
    let usuario = null;
    for (const usr of listaUsers.lista) {
      if (usr.loged) {
        usuario = usr;
      }
    }
    if (usuario === null) {
      console.log('Nadie logueado');
    }
    return usuario;
  }

  this.mostrar = function() {
    console.table(this.lista);
  }
}

//HILOS
function Hilo(lvl, autorId, tags, titulo, txt) {
  this.id = genIdHilo()
  this.lvl = lvl;
  this.autorId = autorId;
  this.timeEstampa = Date.now();
  this.tags = tags; //array
  this.titulo = titulo;
  this.txt = txt,
  this.deleted = false; //recursivo no show hijos

  this.padre = getPadre(); //if lvl0 => NULL.
  //Arrays de objs
  this.hermanos = getHerm(); //herm=0 => [].
  this.hijos = getHijos(); //hijos=0 => [].

  function genIdHilo() {
  }
}

function ListaHilosSup() {
  this.lista = new Array();
  this.init = stInitHilos;
  this.grabar = stGrabarHilos;

  this.add = (objHilo) => {
    this.lista.push(objHilo);
    this.grabar(this.lista);
  };
}


