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
   ////if () {
   ////   
   //// } 
    
  }
  function registrar() {//CONTROLAR NOMBRE SIN SIMBOLOS ni VACIO
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
function mod() { // ESTO VA EN MI AREA
  let id = $('#idMod')[0].value;
  let nombre = $('#nomMod')[0].value;
  let pass = $('#passMod')[0].value;
  let foto = $('#passMod')[0].value; //TODO: RECOGE URI IMAGEN (CREA EL FRONT)
  modifUser(id, nombre, pass, foto) 
}
