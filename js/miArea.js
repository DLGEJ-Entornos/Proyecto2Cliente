function mod() { 
  let id = $('#idMod')[0].value;
  let nombre = $('#nomMod')[0].value;
  let pass = $('#passMod')[0].value;
  let foto = $('#passMod')[0].value; //TODO: RECOGE URI IMAGEN (CREA EL FRONT)
  modifUser(id, nombre, pass, foto) 
}
