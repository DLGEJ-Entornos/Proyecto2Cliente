function stUsersExist() {
  //debugger;
  if (localStorage.getItem('Usuarios') != null) {
    return true;
  } else {
    return false;
  }
}

function stInitUsers() {
  debugger;
  let primerUsuario = new Usuario('jon', 'doe',
    '../assets/profilePic/jon.jpg');
  let listaUsers = new ListaUsuarios();

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
  this.lista = JSON.parse(localStorage.getItem("Usuarios"));
}
