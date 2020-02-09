if (localStorage.getItem('Usuarios') == null) {

  let primerUser = {
    "Usuarios": [{
      "nombre": "jon",
      "pass": "doe",
      "id": 0
    }]
  };
  localStorage.setItem("Usuarios", JSON.stringify(primerUser));
}

function guardarUser(nombre, pass) {
  //para obtener JSON  
  jsonUsers = JSON.parse(localStorage.getItem("Usuarios"));
  //AUTOGEN ID
  let id = jsonUsers.Usuarios[jsonUsers.Usuarios.length - 1].id + 1;
  //ADD NUEVO USER
  nuevo = {
    "nombre": nombre,
    "pass": pass,
    "id": id
  };
  jsonUsers.Usuarios.push(nuevo);
  localStorage.setItem("Usuarios", JSON.stringify(jsonUsers)); //json actualizado
}
