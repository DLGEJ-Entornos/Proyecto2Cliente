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
  this.getName = function(idUser) {

    let lista = listaUsers.lista;
    for (let i = 0; i < lista.length; i++) {
      let user = lista[i];
      if (user.id == idUser) {
        return user.nombre;
      }
    }
    return '';
  }

  this.mostrar = function() {
    console.table(this.lista);
  }
}

//HILOS
function Hilo(lvl, autorId, tags, titulo, txt) {
  this.lvl = lvl;
  this.id = genIdHilo()
  this.autorId = autorId;
  this.timeEstampa = Date.now();
  this.tags = tags; //array
  this.titulo = titulo;
  this.txt = txt;

  //No implementado
  this.deleted = false; //recursivo no show hijos
  this.htmlTag = null; //el obj Instanciado del dom que guarda su hilo
  this.padre = getPadre();
  this.hijos = new Array();
  //

  function genIdHilo() {
    
    let lengthLista = listaHilos.lista.length;

    if (lengthLista == 0) { //en init
      return '0.0';

    } else if (lvl == 0) { //crear nuevo hilo (no respuesta)

      let lastID = listaHilos.lista[lengthLista - 1].id;
      let lastIDcola = lastID.substr(-1);
      lastIDcola++;
      let newID = '0.' + lastIDcola;
      return newID; 
    }
  }

  function getPadre() {
    
    console.log('lvl en getPadre: ', lvl);
    return lvl == 0 ? null : undefined
  }
}

function ListaHilosSup() {
  this.lista = new Array();
  this.init = stInitHilos;
  this.grabar = stGrabarHilos;
  this.volcar = volcarHilosDeSt;

  this.add = (objHilo) => { 
    this.lista.push(objHilo);
    this.grabar(this.lista);
  };

  this.mostrar = function() {
    console.table(this.lista);
  }
}
