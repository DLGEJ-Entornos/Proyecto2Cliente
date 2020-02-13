var logueado = false;
// DECLARAR SIN inicializar? cogeran values null?
var miAreaLink = document.getElementById('miAreaLink');
var logORnombre = document.getElementById('logORnombre');
var regORlogOut = document.getElementById('regORlogOut');
//

var listaUsers = new ListaUsuarios(); 
//!listaUsers.existe
console.log("Shared, valor de stVacio:",stVacio);
if (stVacio) { //quiero usar metodo de obj
  listaUsers.init()
}else{
  listaUsers.volcar();
}
listaUsers.mostrar();

//HEADER///////////////////////////////////
function openLoginRegis(opcion) {
  var divLogReg = $( "#loginReg" );
  divLogReg.animate({
    width: "20em",
    height: '12em',
    left: '-80%'
    //background-color: red,
    //opacity: 0.4,
    //marginLeft: "0.6in",
    //fontSize: "3em",
    //borderWidth: "10px"
  }, 500 );


function loguear() {
  console.log("logueado");
  //si inpNom.value esta en BD, guardar su ID en cookie, logueado TRUE. 
}

function registrar() { //CONTROLAR NOMBRE SIN SIMBOLOS ni VACIO
  console.log("registrado");
}

  function salir() {
    console.log('saliendo login');
    divLogReg.empty();
  divLogReg.animate({
    width: "80%",
    height: '0px',
    left: '-80%'
  }, 500 );
    
  }
  function create(opcion) { //CREACION DINAMICA DEL DOM
    var inpNom = document.createElement('input');
    var inpPass = document.createElement('input');
    var br = document.createElement('br');
    var confirm = document.createElement('button');
    var exit = document.createElement('button');
    confirm.innerHTML= '✔';
    exit.innerHTML= '✘';
      inpNom.placeholder = 'Nombre';       
      inpPass.placeholder = 'Contraseña';       

    if (opcion == 'log') {
      confirm.onclick = loguear;
    }else{
      confirm.onclick = registrar;
    }
      divLogReg.append(inpNom,inpPass,br,confirm,exit);
      exit.onclick = salir;
  }
  opcion == 'log' ? create('log') : create('regis');
}

// MODIFICACIÓN DEL HEADER
if (logueado) {
  miAreaLink.setAttribute('class', 'nav-link');


  let nombre = document.createElement('a');
  nombre.setAttribute('class', 'nav-link');
  nombre.setAttribute('disabled', '');
  nombre.setAttribute('id', 'nomUserTag');
  nombre.innerText = '<AQUI NOMBRE USER>'; //NOMBRE USER 
  logORnombre.append(nombre);

  let logOut = document.createElement('a');
  logOut.setAttribute('class', 'nav-link');
  logOut.setAttribute('onclick', 'logOut()');
  logOut.innerText = 'Cerrar Sesión';
  regORlogOut.append(logOut);

} else {
  miAreaLink.setAttribute('class', 'nav-link disabled');

  let login = document.createElement('a');
  login.setAttribute('class', 'nav-link');
  login.setAttribute('onclick', 'openLoginRegis("log")');
  login.innerText = 'Login';
  let span = document.createElement('span');
  span.setAttribute('class', 'sr-only');
  span.innerText = '(current)';
  login.append(span);
  logORnombre.append(login);

  let registro = document.createElement('a');
  registro.setAttribute('class', 'nav-link');
  registro.setAttribute('onclick', 'openLoginRegis("regis")');
  registro.innerText = 'Regístrate';
  regORlogOut.append(registro);
}

////////////////////////////////////////////
