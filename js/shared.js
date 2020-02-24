//debugger;
var logueado = haySesion();
console.log("valor var logueado en shared: " + logueado);
// DECLARAR SIN inicializar? cogeran values null?
var miAreaLink = document.getElementById('miAreaLink');
var logORnombre = document.getElementById('logORnombre');
var regORlogOut = document.getElementById('regORlogOut');
//

var listaUsers = new ListaUsuarios();
console.log("Shared, valor de stVacio:", stVacio);
if (stVacio) {
  listaUsers.init();
} else {
  console.log("volcando");
  listaUsers.volcar();
  //renderHeader();
  //logOut('noRend');
}
listaUsers.mostrar();

//HEADER///login///registro////////////////
var userLogged = listaUsers.quienLog();
renderHeader();

function logOut(modo) {
  cookLogOut();
  listaUsers.killAllSesions();
  listaUsers.grabar(listaUsers.lista);
  renderHeader()
  //if (modo != 'noRend') {
  //  renderHeader();
  //}
}

function openLoginRegis(selector) {
  var divLogReg = $("#loginReg");
  divLogReg.animate({
    width: "20em",
    height: '12em',
    left: '-80%'
  }, 500);

  function loguear() { //grabar para persistencia entre paginas?
    //debugger;
    let user = listaUsers.find(inpNom.value);
    if (user != null) {
      listaUsers.killAllSesions();
      user.loged = true;
      user.logInSesion(user.id); //GUARDA COOKIE
      listaUsers.grabar(listaUsers.lista);
      renderHeader();
      //location.reload();
    } else {
      console.log("usuario no encontrado no hecho login");
    }
  }

  function registrar() {
    //VALIDACIÓN!
    let newUser = new Usuario(inpNom.value, inpPass.value, null);
    //REGISTRAR Y LOGUEAR RECIEN CREADO
    listaUsers.killAllSesions();
    newUser.loged = true;
    listaUsers.add(newUser);
    newUser.logInSesion(newUser.id); //GUARDA COOKIE
    listaUsers.grabar(listaUsers.lista);
    renderHeader();
    //location.reload();
  }

  function salir() {
    console.log('saliendo login');
    divLogReg.empty();
    divLogReg.animate({
      width: "80%",
      height: '0px',
      left: '-80%'
    }, 500);

  }
  var inpNom, inpPass;

  function create(opcion) { //CREACION DINAMICA DEL DOM
    inpNom = document.createElement('input');
    inpPass = document.createElement('input');
    var br = document.createElement('br');
    var confirm = document.createElement('button');
    var exit = document.createElement('button');
    confirm.innerHTML = '✔';
    exit.innerHTML = '✘';
    inpNom.placeholder = 'Nombre';
    inpPass.placeholder = 'Contraseña';

    if (opcion == 'log') {
      confirm.onclick = loguear;
    } else {
      confirm.onclick = registrar;
    }
    divLogReg.append(inpNom, inpPass, br, confirm, exit);
    exit.onclick = salir;
  }
  selector == 'log' ? create('log') : create('regis');
}



// MODIFICACIÓN DEL HEADER if LOGUEADO
//en func para hacer a cada refresco de pagina?
//comprueba cookies
function renderHeader() {
  logueado = haySesion();
  userLogged = listaUsers.quienLog();
  $('#nomUserTag').remove();
  $('#logOut').remove();
  $('#login').remove();
  $('#registro').remove();
   
  if (logueado) {
    miAreaLink.setAttribute('class', 'nav-link');


    let nombre = document.createElement('a');
    nombre.setAttribute('class', 'nav-link');
    nombre.setAttribute('disabled', '');
    nombre.setAttribute('id', 'nomUserTag');
    nombre.innerText = 'Hola ' + userLogged.nombre + '!';
    logORnombre.append(nombre);

    let logOut = document.createElement('a');
    logOut.setAttribute('class', 'nav-link');
    logOut.setAttribute('id', 'logOut');
    logOut.setAttribute('onclick', 'logOut()');
    logOut.innerText = 'Cerrar Sesión';
    regORlogOut.append(logOut);

  } else {
    miAreaLink.setAttribute('class', 'nav-link disabled');

    let login = document.createElement('a');
    login.setAttribute('class', 'nav-link');
    login.setAttribute('onclick', 'openLoginRegis("log")');
    login.setAttribute('id', 'login');
    login.innerText = 'Login';
    let span = document.createElement('span');
    span.setAttribute('class', 'sr-only');
    span.innerText = '(current)';
    login.append(span);
    logORnombre.append(login);

    let registro = document.createElement('a');
    registro.setAttribute('class', 'nav-link');
    registro.setAttribute('onclick', 'openLoginRegis("regis")');
    registro.setAttribute('id', 'registro');
    registro.innerText = 'Regístrate';
    regORlogOut.append(registro);
  }
  console.log('header renderizado');
  listaUsers.mostrar();
}
////////////////////////////////////////////
