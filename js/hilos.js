//debugger;
var listaHilos = new ListaHilosSup();

if (stNoHilos()) {
  listaHilos.init()
} else {
  console.log('en volcado d hilo');
  listaHilos.volcar();
}
listaHilos.mostrar();
