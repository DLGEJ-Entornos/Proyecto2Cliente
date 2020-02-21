var listaHilos = new ListaHilosSup();

if (stNoHilos()) {
  listaHilos.init()
} else {
  listaHilos.volcar();
}
listaHilos.mostrar();
