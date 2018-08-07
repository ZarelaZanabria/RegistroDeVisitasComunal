window.onload = inicializar;
//Inicializamos una variable global.
let formUsers;
let refUsers;
var CREATE = 'Anadir Convalidacion'
var modo = CREATE;

//Funcion en donde vamos a Ejecutar el registro de usuario
function inicializar() {
  //Seleccionamos el formulario Usuario.
  formUsers = document.getElementById('form-users');
  //Creamos un evento en donde al hacer click ejecutamos la funcion ubmitUsersFirebase
  formUsers.addEventListener('submit', submitUsersFirebase, false);  
  refUsers = firebase.database().ref().child('Visitantes');
  tbodyTableUsers = document.getElementById('tbody-table-users');
  showDataVisit();
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
        /* usersPhoto: event.target.usersFoto.value */
      });

      break;

    default:
      break;
  }

  //Para borrar una vez que guarda los archivos
  formUsers.reset();
}

const showDataVisit = () => {

  //Quiero que cada que este en value , me hague algo

  refUsers.on('value', function (snap) {
      //Vamos a obtener los valores de la base de datos User
      let dataUsers = snap.val();
      //Filas iniciliza vacio.
      let toRows = '';
      //vamos a recorrer el arrary Usuarios.
      for (const dataUser in dataUsers) {
          //Generar una filas 
          //toRows es un string con todas los datos a mostrar
          toRows += '<tr>' +
              '<td>' + dataUsers[dataUser].usersName + '</td>' +
              '<td>' + dataUsers[dataUser].usersLastName + '</td>' +
              '<td>' + dataUsers[dataUser].usersDni + '</td>' +
              '<td>' + dataUsers[dataUser].usersOficina + '</td>' +
              '<td>' + dataUsers[dataUser].usersMotivo + '</td>' +
              '<td>' + dataUsers[dataUser].usersAnfitrion + '</td>' +
              '<td>' + dataUsers[dataUser].usersAnfitrion + '</td>' +
              '<td>' +
              '</td>' +
              '<td>' +            
              '</tr>';
      }

      tbodyTableUsers.innerHTML = toRows;
     
  });

}


