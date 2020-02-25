/////USUARIOS////
var listaUsers = null;
var stVacio = localStorage.length == 0 ? true : false;

function stInitUsers() {
  listaUsers = new ListaUsuarios();
  let primerUsuario = new Usuario('Jon', 'doe',
    '../assets/profilePic/jon.jpg');

  listaUsers.add(primerUsuario);
  listaUsers.grabar(listaUsers.lista); //inneces. ya en add?

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
    usuario.id = obj.id; //no puede autogenerar, lista de ListaUsers vacia
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

//// DEV TOOLS ///
function wipe() {
  cookLogOut();
  localStorage.clear();
}

/////////////////////////////////////////
///////////////// HILOS ////////////////
/////////////////////////////////////////
var listaHilos = null;
var stNoHilos = function() {
  return localStorage.getItem('Hilos') === null ? true : false;
}
//COOKIES
//

function stInitHilos() {
  listaHilos = new ListaHilosSup(); 
  let tags = ['dev', 'admin', 'info'];
  let titulo = 'LOREM IPSUM';
  let txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  let primerHilo = new Hilo(0, 0, tags, titulo, txt);

  listaHilos.add(primerHilo);
  //listaHilos.grabar(listaHilos.lista); //inneces. ya en add?
}

function stGrabarHilos(lista) {
  localStorage.setItem("Hilos", JSON.stringify(lista));
}

function volcarHilosDeSt() {
  console.log(JSON.parse(localStorage.getItem("Hilos")));

  let arrObjGenericos = JSON.parse(localStorage.getItem("Hilos"));
  let arrLista = [];

  for (const obj of arrObjGenericos) {
    let hilo = new Hilo(obj.lvl, obj.autorId, obj.tags, obj.titulo, obj.txt);
    hilo.id = obj.id; //no puede autogenerar?, lista de ListaUsers vacia
    hilo.timeEstampa = obj.timeEstampa;
    hilo.deleted = obj.deleted;
    hilo.htmlTag = obj.htmlTag;

    var arrHijos = [];
    for (let i = 0; i < obj.hijos.length; i++) {
      let res = obj.hijos[i]; //respuesta
      let subHilo = new Hilo(res.lvl, res.autorId, res.tags, res.titulo, res.txt);
      subHilo.id = res.id; //no puede autogenerar?, lista de ListaUsers vacia
      subHilo.timeEstampa = res.timeEstampa;
      subHilo.deleted = res.deleted;
      arrHijos.push(subHilo);
    }
    hilo.hijos = arrHijos;
    arrLista.push(hilo);
  }
  listaHilos.lista = arrLista;
}
