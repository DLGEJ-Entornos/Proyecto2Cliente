var listaUsers;
var stVacio = localStorage.length == 0 ? true : false ;

function stInitUsers() {
  listaUsers = new ListaUsuarios();
  //debugger;
  let primerUsuario = new Usuario('jon', 'doe',
    '../assets/profilePic/jon.jpg');

  listaUsers.add(primerUsuario);
  listaUsers.grabar(listaUsers.lista);

}

function stGrabar(lista) { //array 'Jsonizado'
  let jsonizado = {
    ...lista
  };
  localStorage.setItem("Usuarios", JSON.stringify(jsonizado));
}

function volcarDeSt() {
  console.log(JSON.parse(localStorage.getItem("Usuarios")));
  listaUsers.lista = JSON.parse(localStorage.getItem("Usuarios"));
}
