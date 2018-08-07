window.onload = inicializarEmployee;
let formEmployee;
let refEmployee;
var CREATE = 'Registrar'
var modo = CREATE;
//Funcion en donde vamos a Ejecutar el registro de usuario
function inicializarEmployee() {
  //Seleccionamos el formulario Usuario.
  formEmployee = document.getElementById('form-employee');
  //Creamos un evento en donde al hacer click ejecutamos la funcion ubmitUsersFirebase
  formEmployee.addEventListener('submit', submitEmployeeFirebase, false);  
  refEmployee = firebase.database().ref().child('Empleados');

}

const submitEmployeeFirebase = (event) => {  
  event.preventDefault();
  switch (modo) {
    case CREATE:
      refEmployee.push({
        employeeName: event.target.employeeName.value,
        employeeEmail: event.target.employeeEmail.value,
        employeeOficina: event.target.employeeOficina.value,      
      });
      break;
    default:
      break;
  } 
  formEmployee.reset();
}




