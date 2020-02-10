if (localStorage.getItem('Usuarios') == null) {

  let primerUser = {
    "Usuarios": [{
      "nombre": "jon",
      "pass": "doe",
      "foto": "../assets/profilePic/jon.jpg",
      "id": 0
    }]
  };
  localStorage.setItem("Usuarios", JSON.stringify(primerUser));
}
var jsonUsers;

function guardarUser(nombre, pass, foto) {
  //para obtener JSON  
  jsonUsers = JSON.parse(localStorage.getItem("Usuarios"));
  //AUTOGEN ID
  let id = jsonUsers.Usuarios[jsonUsers.Usuarios.length - 1].id + 1;
  //ADD NUEVO USER
  nuevo = {
    "nombre": nombre,
    "pass": pass,
    "foto": foto,
    "id": id
  };
  jsonUsers.Usuarios.push(nuevo);
  localStorage.setItem("Usuarios", JSON.stringify(jsonUsers)); //json actualizado
}

function modifUser(id, nombre, pass) { //nom,pass allow ''| null
  try { //CONTROL DE ERRORES
    jsonUsers = JSON.parse(localStorage.getItem("Usuarios"));

    var user, i = 0,indice, encontrado = false;
    console.log(jsonUsers.Usuarios.length);
    while (i < jsonUsers.Usuarios.length && !encontrado) {
      let idUsers = jsonUsers.Usuarios[i].id;
      if (idUsers == id) {
        encontrado = true;
        indice = i;
        user = jsonUsers.Usuarios[i];
      }
      i++;
    }
    if (encontrado) { //MODIFICAR DATOS COMO SE QUIERA
      nombre != '' ? user.nombre = nombre : console.log('nombre pasado null')
      pass != '' ? user.pass = pass : console.log('pass pasado null')
      jsonUsers.Usuarios[indice] = user;
      localStorage.setItem("Usuarios", JSON.stringify(jsonUsers));
    } else {
      console.log("Usuario no encontrado por ID");
    }
  } catch (e) {
    console.error(e);
  }
}
