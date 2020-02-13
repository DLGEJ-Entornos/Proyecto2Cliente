//USUARIOS
function Usuario(nombre,pass,foto) {
  function genId() {
    let res;
    //let listaUsers = new ListaUsuarios(); //inicia vacia 
        //CAMBIAR POR METODO LENGTH DE LISTA
    let lengthLista = Object.keys(listaUsers.lista).length;
    if (lengthLista == 0) { 
      res = 0;
    }else{
      res = listaUsers.lista[lengthLista-1].id + 1;
    }
    console.log("ID Autogenerado:",res);
    return res;
  }

  this.nombre = nombre;
  this.pass = pass;
  this.foto = foto;
  this.id = genId();
  this.logInSesion = cookUserSave;
}

function ListaUsuarios() {
  this.init = stInitUsers; 
  this.lista = new Array(); //de objs (ME GUARDA OBJETO)
  this.volcar = volcarDeSt;
  this.grabar = stGrabar;
  this.length = Object.keys(this.lista).length;

  this.add = (objUsuario) => {
    this.lista.push(objUsuario); //no hace push xq no es array!
  };
  //this.find = function(id){
  //  let user;
  //  for(let i = 0; i < )
  //  listaUsers.lista[0].id
  //  return user;
  //}
  this.mostrar = function (){ //porque no va? //siendo array SI(en INIT)!
    console.table(this.lista);
  }
}
//HILOS
