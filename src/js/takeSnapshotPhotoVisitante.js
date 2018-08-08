document.getElementById('photoSection').style.display = 'none';
document.getElementById('next-Photo').addEventListener('click', ()=>{
  document.getElementById('photoSection').style.display = 'block';
  document.getElementById('mainSection').style.display = 'none';
  var video = document.getElementById('myVideo');
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({ video:true, audio:false}).then(function(stream){
      video.src=window.URL.createObjectURL(stream);
    })
  }
})
document.getElementById('snap').addEventListener('click', function(){
  var myCanvas = document.getElementById('micanvas');
  var video = document.getElementById('myVideo');
  var context = myCanvas.getContext('2d');
  context.drawImage(video,0,0,210,200);
  var blob = video.src;
  var myCanvas = document.getElementById('micanvas');
  myCanvas.toBlob(function(blob) {
    console.log('Este es el blob: ', blob);
    chargeStorage(blob);
  }, 'image/jpeg', 0.8);
});

document.getElementById('generarblob').addEventListener('click', function() {
  chargeDatabase();
})

function chargeStorage(blob) {
  nameOfPhotoUser = (document.getElementById('users-dni').value + '.jpg').toString();
  console.log(nameOfPhotoUser);
  var uploadTask = firebase.storage().ref('photos/');
  uploadTask.child(nameOfPhotoUser).put(blob);
}

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
