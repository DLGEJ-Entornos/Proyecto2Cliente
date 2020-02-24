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
    Cont HILOS level 2 = <div class(H2)> : cH2
    Cont hilo level 2 = <div class(h2)> : ch2
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
    let boton = crearBtnColapsable(1,hiloL0.id);
    //let boton = $("<button></button>").text('RESPONDER'); //le falta onclick
    let span = $("<span></span>");
    let br = $("<br></br>");
    ch0.append(titulo[0],autor[0],texto[0],boton,span[0],br[0]);
    //debugger;
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

function crearBtnColapsable(level,hiloID) {
    let link = document.createElement("a");
    link.setAttribute('class',"btn btn-primary");
    link.setAttribute('data-toggle',"collapse");
    link.setAttribute('href',"#multiCollapse"+hiloID.replace(/\./g, '-')); //REGEXP USADA!
    link.setAttribute('role',"button");
    link.setAttribute('aria-expanded',"false");
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
    divs[2].setAttribute('id', "multiCollapse"+hiloID.replace(/\./g, '-')); 
    divs[3].setAttribute('class', "card card-body input-group mb-3"); 
      //dentro de div3
      let input = $("<input></input>");
      input[0].setAttribute('class', "tbTitulo"+level+ " class form-control"); 
      input[0].setAttribute('type', "text"); 
      input[0].setAttribute('placeholder', "Título"); 
      let textA = $("<textarea></textarea>");
      textA[0].setAttribute('class', "tbTxt"+level+ " form-control"); 
      textA[0].setAttribute('placeholder', "Texto"); 
      textA[0].setAttribute('rows', "4"); 
      let boton = $("<button></button>");
      boton[0].setAttribute('class', "btnCreaResp"+level+ " btn btn-info"); 
      boton[0].setAttribute('onclick', "crearRespuestaLvl"+level+"()"); 
      boton.text("Enviar"); 

      //debugger;
      divs[3].append(input[0],textA[0],boton[0]);
      divs[2].append(divs[3]);
      divs[1].append(divs[2]);
      divs[0].append(divs[1]);

      let divTodo = document.createElement('div');
      divTodo.append(p[0],divs[0]);
      return divTodo;
}