document.getElementById('users-oficina').addEventListener("change", changeOffice);
function changeOffice(){
  let employeeOptions = document.getElementById('users-anfitrion');
  employeeOptions.innerText = '';
  let officeSelect = document.getElementById('users-oficina');
  let officeName = officeSelect.options[officeSelect.selectedIndex].value;
  firebase.database().ref('Empleados/').on('value', function(snap){
    let employeeUIDs = Object.keys(snap.val());
    employeeUIDs.forEach(function(element) {
      if(snap.val()[element].employeeOficina == officeName) {
        console.log(snap.val()[element].employeeName);
        let nameOfEmployee = document.createElement('option');
        nameOfEmployee.value = snap.val()[element].employeeEmail;
        nameOfEmployee.innerText = snap.val()[element].employeeName;
        employeeOptions.appendChild(nameOfEmployee);
      }
    });
  })
}
changeOffice();
document.getElementById('users-anfitrion').addEventListener("change", ()=>{
  let employeeSelect = document.getElementById('users-anfitrion');
  let employeeName = employeeSelect.options[employeeSelect.selectedIndex].value;
  console.log(employeeName);
});
