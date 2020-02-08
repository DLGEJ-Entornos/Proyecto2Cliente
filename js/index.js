function openLoginRegis(opcion) {
  $( "#loginReg" ).animate({
    width: "20em",
    height: '20em',
    left: '-80%'
    //background-color: red,
    //opacity: 0.4,
    //marginLeft: "0.6in",
    //fontSize: "3em",
    //borderWidth: "10px"
  }, 500 );

  function create(opcion) { //CREACION DINAMICA DEL DOM
    var inpNom = document.createElement('input');
    var inpPass = document.createElement('input');
    var confirm = document.createElement('button');

    if (opcion == 'log') {
      inpNom.placeholder = 'test';       
      document.getElementById('loginReg').appendChild(inpNom);

    }else{

    }
  }
  
  opcion == 'log' ? create('log') : create('regis');
}

