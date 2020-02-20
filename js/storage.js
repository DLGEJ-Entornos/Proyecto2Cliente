var listaUsers = null;
//debugger;
var stVacio = localStorage.length == 0 ? true : false;

function stInitUsers() {
  listaUsers = new ListaUsuarios();
  //debugger;
  let primerUsuario = new Usuario('jon', 'doe',
    '../assets/profilePic/jon.jpg');

  listaUsers.add(primerUsuario);
  listaUsers.grabar(listaUsers.lista);

}

function stGrabar(lista) { //array 'Jsonizado'
  localStorage.setItem("Usuarios", JSON.stringify(lista));
}

function volcarDeSt() {
  console.log(JSON.parse(localStorage.getItem("Usuarios")));
  listaUsers.lista = JSON.parse(localStorage.getItem("Usuarios"));
}

var jsonUsers; //REVISA ESTA FUNC Y ESTA VAR, LO HAGO CON OTROS metodos 
function modifUser(id, nombre, pass, foto) { //nom,pass allow ''| null
  try { //CONTROL DE ERRORES
    jsonUsers = JSON.parse(localStorage.getItem("Usuarios"));

    var user, i = 0,
      indice, encontrado = false;
    console.log(jsonUsers.Usuarios.length);
    while (i < jsonUsers.Usuarios.length && !encontrado) {
      let idUsers = jsonUsers.Usuarios[i].id;
      if (idUsers == id) {
        encontrado = true;
        indice = i;
        user = jsonUsers.Usuarios[i];
      }
      i++;
    }
    if (encontrado) { //MODIFICAR DATOS COMO SE QUIERA
      nombre != '' ? user.nombre = nombre : console.log('nombre pasado null')
      pass != '' ? user.pass = pass : console.log('pass pasado null')
      foto != '' ? user.foto = foto : console.log('foto pasado null')
      jsonUsers.Usuarios[indice] = user;
      localStorage.setItem("Usuarios", JSON.stringify(jsonUsers));
    } else {
      console.log("Usuario no encontrado por ID");
    }
  } catch (e) {
    console.error(e);
  }
}


//COOKIES
function cookUserSave(id) {
  document.cookie = 'logueado=' + id + ';';
  console.log("Cookie Guardada: ", document.cookie);
}
