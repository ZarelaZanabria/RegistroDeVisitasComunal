window.onload = inicializar;
//Inicializamos una variable global.
let formUsers;
let refUsers;
var CREATE = 'Anadir Convalidacion'
var modo = CREATE;
let refUsersUpdate;
//Funcion en donde vamos a Ejecutar el registro de usuario
function inicializar() {
  //Seleccionamos el formulario Usuario.
  formUsers = document.getElementById('form-users');
  //Creamos un evento en donde al hacer click ejecutamos la funcion ubmitUsersFirebase
  formUsers.addEventListener('submit', submitUsersFirebase, false);
  refUsers = firebase.database().ref().child('Visitantes');
}


const submitUsersFirebase = (event) => {
  event.preventDefault();
  switch (modo) {
    case CREATE:
      refUsers.push({
        usersName: event.target.usersName.value,
        usersLastName: event.target.usersLastName.value,
        usersDni: event.target.usersDni.value,
        usersOficina: event.target.usersOficina.value,
        usersMotivo: event.target.usersMotivo.value,
        usersAnfitrion: event.target.usersAnfitrion.value,
        usersPhoto: event.target.usersFoto.value
      });

      break;

    default:
      break;
  }

  //Para borrar una vez que guarda los archivos
  formUsers.reset();
}





