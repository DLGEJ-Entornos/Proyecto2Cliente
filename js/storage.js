var stUsersExist => {
  localStorage.getItem('Usuarios') != null ?
    true : false
}
function stInitUsers() {
  let primerUsuario = new Usuario('jon','doe',
    '../assets/profilePic/jon.jpg');
  let listaUsers = new ListaUsuarios();

  listaUsers.add(primerUsuario);
  listaUsers.grabar(this.lista);

}
function stGrabar(lista) {//array 'Jsonizado'
  let jsonizado = {...lista};
  localStorage.setItem("Usuarios", JSON.stringify(jsonizado)); 
}

function volcarDeSt() {
  this.lista = JSON.parse(localStorage.getItem("Usuarios")).Usuarios;
}
