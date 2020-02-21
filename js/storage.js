var listaUsers = null;
var stVacio = localStorage.length == 0 ? true : false;

function stInitUsers() {
  listaUsers = new ListaUsuarios();
  let primerUsuario = new Usuario('jon', 'doe',
    '../assets/profilePic/jon.jpg');

  listaUsers.add(primerUsuario);
  listaUsers.grabar(listaUsers.lista);

}

function stGrabar(lista) { //array 'Jsonizado'
  localStorage.setItem("Usuarios", JSON.stringify(lista));
}


function volcarDeSt() { //asumimos lista= array vacio
  console.log(JSON.parse(localStorage.getItem("Usuarios")));

  let arrObjGenericos = JSON.parse(localStorage.getItem("Usuarios"));
  let arrLista = [];
  for (const obj of arrObjGenericos) {
    let usuario = new Usuario(obj.nombre, obj.pass, obj.foto);
    usuario.id = obj.id;//no puede autogenerar, lista de ListaUsers vacia
    usuario.loged = obj.loged;
    arrLista.push(usuario);
  }
    listaUsers.lista = arrLista;
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

function cookLogOut() {
  document.cookie = 'logueado=0;expires = Thu, 01 Jan 1970 00:00:00 GMT';
  console.log("Cookies: ", document.cookie);
}

function haySesion() {
  let cookies = document.cookie;
  return cookies.includes('logueado') ? true : false
}
