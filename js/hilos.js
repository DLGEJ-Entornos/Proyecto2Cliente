//debugger;
var listaHilos = new ListaHilosSup();

//RUTINAS de inicio en funcion de datos almacenados
if (stNoHilos()) {
  listaHilos.init()
} else {
  console.log('en volcado d hilo');
  listaHilos.volcar();
}
listaHilos.mostrar(); //info obj hilos creados

///// RENDER HILOS ///// por ahora lvl 0
renderHilos();

function renderHilos() {
  /*
    Contenedor HILOS superiores = <section> : cHS
    Cont hilo level 0 = <article> : ch0
           - RESPUESTAS - 
    Cont HILOS level 1 = <div class(H1)> : cH1
    Cont hilo level 1 = <div class(h1)> : ch1
    Cont HILOS level 2 = <div class(H2)> : cH1
    Cont hilo level 2 = <div class(h2)> : ch1
  */ 
  var cHS = $('section')[0];
  var listaHS = listaHilos.lista;
  
  // Creando Hilos level0 (articles) (ch0)
  var ch0;
  listaHS.forEach(hiloL0 => {
    //debugger;
    ch0 = document.createElement("article"); 
    ch0.setAttribute('id',hiloL0.id);
    ch0.setAttribute('class','lvl'+hiloL0.lvl);
    let titulo = $("<h2></h2>").text(hiloL0.titulo);
    let autor = $("<b></b>").text(listaUsers.getName(hiloL0.autorId));
    let texto = $("<p></p>").text(hiloL0.txt);
    let boton = $("<button></button>").text('RESPONDER'); //le falta onclick
    let span = $("<span></span>");
    let br = $("<br></br>");
    ch0.append(titulo[0],autor[0],texto[0],boton[0],span[0],br[0]);
  });
  cHS.append(ch0);
}

function crearHiloSup(){ //al accionar onclick
  let titulo = document.getElementById('tbTitulo').value;
  let txt = document.getElementById('tbTxt').value;
  userLogged.id
  let newHilo = new Hilo(0,userLogged.id,tags=null,titulo,txt);
  listaHilos.add(newHilo);

  renderHilos();
}