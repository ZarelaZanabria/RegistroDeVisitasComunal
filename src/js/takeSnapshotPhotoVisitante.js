document.getElementById('photoSection').style.display = 'none';
document.getElementById('next-Photo').addEventListener('click', ()=>{
  document.getElementById('photoSection').style.display = 'block';
  document.getElementById('mainSection').style.display = 'none';
  var dataImages = firebase.storage().ref('userPhotos');
  var video = document.getElementById('myVideo');
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({ video:true, audio:false}).then(function(stream){
      video.src=window.URL.createObjectURL(stream);
    })
  }
  var myCanvas = document.getElementById('micanvas');
  var context = myCanvas.getContext('2d');
  document.getElementById('snap').addEventListener('click', function(){
    context.drawImage(video,0,0,210,200);
    var blob = video.src;
  });

  document.getElementById('generarblob').addEventListener('click', function() {
    //genero un blob del canvas
    myCanvas.toBlob(function(blob) {
      console.log('Este es el blob: ', blob);
      chargeStorage(blob);
      chargeDatabase();
    }, 'image/jpeg', 0.8);
  })
  function chargeStorage(blob) {
    nameOfPhotoUser = document.getElementById('users-dni').value + '.jpg';
    console.log(nameOfPhotoUser);
    var uploadTask = firebase.storage().ref();
    uploadTask.child(nameOfPhotoUser).put(blob);
  }
})

function chargeDatabase() {
  let dateTime = new Date();
  let nowDateTime = dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear() +
    ' ' + dateTime.getHours() + ':' + dateTime.getMinutes();
  refUsers = firebase.database().ref('Visitantes/');
  refUsers.push({
    usersName: document.getElementById('users-name').value,
    usersLastName: document.getElementById('users-last-name').value,
    usersDni: document.getElementById('users-dni').value,
    usersOficina: document.getElementById('users-oficina').value,
    usersAnfitrionEmail: document.getElementById('users-anfitrion').value,
    usersEmail: document.getElementById('users-email').value,
    userTime: nowDateTime,
  });
  alert('Se registro tu visita :)')
  window.location = "../index.html";
}
