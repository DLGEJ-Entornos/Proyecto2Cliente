//USUARIOS
function Usuario(nombre,pass,foto) {
  debugger;
  function genId() {
    let res;
    //let listaUsers = new ListaUsuarios(); //inicia vacia 
    let lengthLista = Object.keys(listaUsers.lista).length;
    if (lengthLista == 0) { //siempre va a ser 0
      res = 0;
    }else{
      res = listaUsers.lista[lengthLista-1].id + 1;
    }
    console.log(res);
    return res;
  }

  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = genId();
}

function ListaUsuarios() {
  this.init = stInitUsers; 
  this.lista = new Array(); //de objs 
  this.volcar = volcarDeSt;
  this.grabar = stGrabar;

  this.add = (objUsuario) => {
    this.lista.push(objUsuario);
  };
  this.mostrar = function (){
    console.table(this.lista);
  }
}

//HILOS
