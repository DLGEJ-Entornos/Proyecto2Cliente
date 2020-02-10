/*
 *VARIACIONES:
    Logueado SI -> Habilitar 'Mi Area' , Link: Cerrar Sesion
    NO -> Deshab Mi area, Links Login Registrar 
 */
var logueado = false;
var miAreaLink = document.getElementById('miAreaLink');
var logORnombre = document.getElementById('logORnombre');
var regORlogOut = document.getElementById('regORlogOut');


//Comprueba que esta logueado
//
if (logueado) {
  miAreaLink.setAttribute('class','nav-link');


  let nombre = document.createElement('a');
  nombre.setAttribute('class','nav-link');
  nombre.setAttribute('disabled','');
  nombre.innerText = '<AQUI NOMBRE USER>'; //NOMBRE USER 
  logORnombre.append(nombre);

  let logOut = document.createElement('a');
  logOut.setAttribute('class','nav-link');
  logOut.setAttribute('onclick','logOut()');
  logOut.innerText = 'Cerrar Sesión';
  regORlogOut.append(logOut);





}else{
  miAreaLink.setAttribute('class','nav-link disabled');

  let login = document.createElement('a');
  login.setAttribute('class','nav-link');
  login.setAttribute('onclick','openLoginRegis("log")');
  login.innerText = 'Login';
  let span = document.createElement('span');
  span.setAttribute('class', 'sr-only');
  span.innerText = '(current)';
  login.append(span);
  logORnombre.append(login);

  let registro = document.createElement('a');
  registro.setAttribute('class','nav-link');
  registro.setAttribute('onclick','openLoginRegis("regis")');
  registro.innerText = 'Regístrate';
  regORlogOut.append(registro);
}

