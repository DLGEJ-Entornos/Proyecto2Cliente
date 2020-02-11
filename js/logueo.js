/*
 *VARIACIONES:
    Logueado SI -> Habilitar 'Mi Area' , Link: Cerrar Sesion
    NO -> Deshab Mi area, Links Login Registrar 
 */
var logueado = false;
var jsonUsers;
var miAreaLink = document.getElementById('miAreaLink');
var logORnombre = document.getElementById('logORnombre');
var regORlogOut = document.getElementById('regORlogOut');

///////// BACKEND /////
if (localStorage.getItem('Usuarios') == null) {

  let primerUser = {
    "Usuarios": [{
      "nombre": "jon",
      "pass": "doe",
      "foto": "../assets/profilePic/jon.jpg",
      "id": 0
    }]
  };
  localStorage.setItem("Usuarios", JSON.stringify(primerUser));
}
listaUsuarios.volcarDeLS;

function guardarUser(nombre, pass, foto) {
  //para obtener JSON  
  jsonUsers = JSON.parse(localStorage.getItem("Usuarios"));
  //AUTOGEN ID
  let id = jsonUsers.Usuarios[jsonUsers.Usuarios.length - 1].id + 1;
  //ADD NUEVO USER
  nuevo = {
    "nombre": nombre,
    "pass": pass,
    "foto": foto,
    "id": id
  };
  jsonUsers.Usuarios.push(nuevo);
  localStorage.setItem("Usuarios", JSON.stringify(jsonUsers)); //json actualizado
}

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

function loguear() {
  console.log("logueado");
  //si inpNom.value esta en BD, guardar su ID en cookie, logueado TRUE. 
  ////if () {
  ////   
  //// } 

}

function registrar() { //CONTROLAR NOMBRE SIN SIMBOLOS ni VACIO
  console.log("registrado");
}

////////////////////////////////////////////////////////////////
logueado = loguear();

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
