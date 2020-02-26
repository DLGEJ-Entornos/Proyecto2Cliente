;
var listaHilos = new ListaHilosSup();

//RUTINAS de inicio en funcion de datos almacenados
if (stNoHilos()) {
  listaHilos.init()
} else {
  console.log('en volcado d hilo');
 
  listaHilos.volcar();
}
listaHilos.mostrar(); //info obj hilos creados

renderHilos();

function renderHilos() {
  $('section').empty();
  /*
    Contenedor HILOS superiores = <section> : cHS *ESTATICO EN DOM*
    Cont hilo level 0 = <article> : ch0
      - RESPUESTAS - 
      Cont HILOS level 1 = <div class(H1)> : cH1
      Cont hilo level 1 = <div class(h1)> : ch1

              --NO IMPLEMENTADO--
        Cont HILOS level 2 = <div class(H2)> : cH2 
        Cont hilo level 2 = <div class(h2)> : ch2  
  */

  // Creando Hilos level0 (articles) (ch0) ////////////////
  var cHS = $('section')[0];
  var listaHS = listaHilos.lista;
  var ch0;

  listaHS.forEach(hiloL0 => {
   
    ch0 = document.createElement("article");
    ch0.setAttribute('id', hiloL0.id);
    ch0.setAttribute('class', 'lvl' + hiloL0.lvl);
    let titulo = $("<h2></h2>").text(hiloL0.titulo);
    let autor = $("<b></b>").text(listaUsers.getName(hiloL0.autorId));
    let texto = $("<p></p>").text(hiloL0.txt);
    let boton = crearBtnColapsable(1, hiloL0.id);
    //let boton = $("<button></button>").text('RESPONDER'); //le falta onclick
    let br = $("<br></br>");
    var span = $("<span></span>");
    ch0.append(titulo[0], autor[0], texto[0], boton, br[0], span[0]);
    cHS.append(ch0);

    //////////////////////////////////////////////////////
    // Creando Hilos level1 (div) (cH0) ////////////////
    var cH1 = document.createElement("div");
    hiloL0.hijos.forEach(hiloL1 => {
      let ch1 = document.createElement("article");
      ch1.setAttribute('id', hiloL1.id);
      ch1.setAttribute('class', 'lvl' + hiloL1.lvl);
      let titulo = $("<h2></h2>").text(hiloL1.titulo);
      let autor = $("<b></b>").text(listaUsers.getName(hiloL1.autorId));
      let texto = $("<p></p>").text(hiloL1.txt);
      let br = $("<br></br>");
      ch1.append(titulo[0], autor[0], texto[0], br[0]);
      cH1.append(ch1);
    })
    span[0].append(cH1);
  });

}

function crearHiloSup() { //al accionar onclick

  //////EXPRESION REGULAR 2 ////
  let tbTxt = document.getElementById('tbTxt');
  let regXpTabSusp = /;/g;
  if (regXpTabSusp.test(tbTxt.value)) {
    alert('Tu texto no puede tener punto y coma.');
  } else {
    //CREA BOTON
    let titulo = document.getElementById('tbTitulo').value;
    let txt = document.getElementById('tbTxt').value;
    //userLogged.id
    let newHilo = new Hilo(0, userLogged.id, tags = null, titulo, txt);
    listaHilos.add(newHilo);
    renderHilos();
  }
}
function crearRespuesta(lvlHiloID) { //lvl1
  let level = lvlHiloID.substr(0, 1); // al que pertenecera el prox hilo
  let idHiloPadre = lvlHiloID.substr(2).replace(/\-/g, '.'); //0.1 ()

 
  let titulo = document.getElementsByClassName('tbTitulo' + lvlHiloID)[0].value;
  let txt = document.getElementsByClassName('tbTxt' + lvlHiloID)[0].value;
  let newHilo = new Hilo(level, userLogged.id, tags = null, titulo, txt);

  let nPadre = idHiloPadre.substr(-1);
  listaHilos.lista[nPadre].hijos.push(newHilo); //INSERCION DE RESPUESTAS!!!!
  listaHilos.grabar(listaHilos.lista);
  renderHilos();

}

function crearBtnColapsable(level, hiloID) {

  //////// EXPRESION REGULAR 1 ///////
  let hiloIDclean = hiloID.replace(/\./g, '-');
  let link = document.createElement("a");
  link.setAttribute('class', "btn btn-primary");
  link.setAttribute('data-toggle', "collapse");
  link.setAttribute('href', "#multiCollapse" + hiloIDclean);
  link.setAttribute('role', "button");
  link.setAttribute('aria-expanded', "false");
  //link.setAttribute('aria-controls',"multiCollapseExample1");
  link.innerText = 'RESPONDER';
  let p = $("<p></p>");
  p[0].append(link);

  var divs = [];
  for (let i = 0; i <= 3; i++) {
    let div = $("<div></div>");
    divs[i] = div[0];
  }
  divs[0].setAttribute('class', "row");
  divs[1].setAttribute('class', "col");
  divs[2].setAttribute('class', "collapse multi-collapse");
  divs[2].setAttribute('id', "multiCollapse" + hiloIDclean);
  divs[3].setAttribute('class', "card card-body input-group mb-3");
  //dentro de div3
  let idRespuesta = level + '-' + hiloIDclean;
  idRespuesta = String(idRespuesta);

  let input = $("<input></input>");
  input[0].setAttribute('class', "tbTitulo" + idRespuesta + " form-control");
  input[0].setAttribute('type', "text");
  input[0].setAttribute('placeholder', "Título");
  let textA = $("<textarea></textarea>");
  textA[0].setAttribute('class', "tbTxt" + idRespuesta + " form-control");
  textA[0].setAttribute('placeholder', "Texto");
  textA[0].setAttribute('rows', "4");
  let boton = $("<button></button>");
  boton[0].setAttribute('class', "btnCreaResp" + idRespuesta + " btn btn-info");

  //// EVENTOS DE RATON 1,2 Y 3 /////

  boton[0].setAttribute('onclick', "crearRespuesta('" + idRespuesta + "')"); //VINCULACION 
  boton[0].addEventListener("mouseover", alertarSesion);
  boton[0].addEventListener("mouseout", quitAlertarSesion);
  boton.text("Enviar");

 
  divs[3].append(input[0], textA[0], boton[0]);
  divs[2].append(divs[3]);
  divs[1].append(divs[2]);
  divs[0].append(divs[1]);

  let divTodo = document.createElement('div');
  divTodo.append(p[0], divs[0]);
  return divTodo;
}


////MISCELÁNEA

var btnsEnviar = document.getElementsByClassName('btn-info');
$('.btn-success').hover(alertarSesion, quitAlertarSesion);

function alertarSesion() {

  if (userLogged === null) {
    $('.btn-success').css("background-color", "tomato");
    $('.btn-success')[0].disabled = true;

    Array.from(btnsEnviar).map(b => { b.disabled = true; });
    Array.from(btnsEnviar).forEach(btn => {
      btn.style = "background-color:tomato";
    })

    setTimeout(function () {
      alert("Loguéate primero!");
    }, 300);
  }
}
function quitAlertarSesion() {

  $('.btn-success').css("background-color", "rgb(34, 141, 58)");
  $('.btn-success')[0].disabled = false;

  Array.from(btnsEnviar).map(b => { b.disabled = false; });
  Array.from(btnsEnviar).forEach(btn => {
    btn.style = "background-color:rgb(21, 146, 166);";
  })
}


///EVENTO TECLADO 2/// 
document.getElementById('tbTitulo').addEventListener('keypress', function (ev) {

  let esLetra = function (letra) {

    if (letra != letra.toUpperCase() || letra != letra.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
  console.log(ev.key)
  let l = ev.key;
  if ((esLetra(l) && l.toUpperCase() == l) || l == ' ') {
    console.log("valida ES MAYS");
  } else
    ev.preventDefault();

});
