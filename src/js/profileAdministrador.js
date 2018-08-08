//Saludamos al administrador
firebase.database().ref('Empleados/').on('value', function(snap){
  usersObjects = Object.keys(snap.val());
  usersObjects.forEach(function(element) {
    if(localStorage.currentAdminEmail == snap.val()[element].employeeEmail) {
      document.getElementById('nameAdmin').innerHTML = snap.val()[element].employeeName;
    }
  });
})
//vamos a pintar todas sus visitas
firebase.database().ref('Visitantes/').on('value', function(snap){
  document.getElementById('adminVisitas').innerHTML = '';
  visitObjects = Object.keys(snap.val());
  visitObjects.forEach(function(element) {
    if(localStorage.currentAdminEmail == snap.val()[element].usersAnfitrionEmail) {
      var storageRef = firebase.storage().ref(snap.val()[element].usersAnfitrionEmail +'.jpg');
      storageRef.getDownloadURL().then(function(url) {
        console.log(url);
        // document.getElementById('divImagenesStorage').innerHTML = `<img src=${url} />`;
      });

      document.getElementById('adminVisitas').innerHTML += `
      <tr>
        <td>${snap.val()[element].userTime}</td>
        <td>${snap.val()[element].usersDni}</td>
        <td>${snap.val()[element].usersAnfitrionEmail}</td>
        <td>${snap.val()[element].usersName}</td>
        <td>${snap.val()[element].usersLastName}</td>
        
      </tr>
      `;
    }
  });
})
