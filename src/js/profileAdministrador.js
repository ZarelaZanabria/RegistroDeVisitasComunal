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
      myURLPhotoUser = 'photos/'+ snap.val()[element].usersDni +'.jpg';
      var storageRef = firebase.storage().ref(myURLPhotoUser);
      storageRef.getDownloadURL().then(function(url) {
        
        document.getElementById('adminVisitas').innerHTML += `
        <tr>
          <td>${snap.val()[element].userTime}</td>
          <td>${snap.val()[element].usersDni}</td>
          <td>${snap.val()[element].usersEmail}</td>
          <td>${snap.val()[element].usersName}</td>
          <td>${snap.val()[element].usersLastName}</td>
          <td><img src=${url} width='50px' /></td>
        </tr>
        `;
      });

    }
  });
})
