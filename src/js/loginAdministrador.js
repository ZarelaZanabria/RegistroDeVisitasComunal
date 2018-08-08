document.getElementById('registerAdmin').style.display = 'none';
document.getElementById('btnRegisterAdmin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'block';
  document.getElementById('loginAdmin').style.display = 'none';
});
document.getElementById('Login-Admin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'none';
  document.getElementById('loginAdmin').style.display = 'block';
});
document.getElementById('Registro-Users').addEventListener('click', ()=>{
  adminRegister();
});
document.getElementById('Enviar-Update').addEventListener('click', ()=>{
  loginAdmin();
});

//funcion para loguearse si ya tiene cuenta
function loginAdmin() {
  userLoginName = document.getElementById('usersLoginName').value;
  userLoginPassword = document.getElementById('usersLoginPassword').value;

	firebase.auth().signInWithEmailAndPassword(userLoginName, userLoginPassword)
		.then(() => {
			let user = firebase.auth().currentUser;
			localStorage.setItem("user", JSON.stringify(user));
			console.log("Usuario inició sesión con éxito");
			window.location="profileAdministrador.html";
		})
	.catch((error) => {
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		});
}
//funcion para crearse una cuenta como administrador
function adminRegister() {
  emailAdmin = document.getElementById('usersEmail').value;
  passwordAdmin = document.getElementById('userPassword').value;

  firebase.auth().createUserWithEmailAndPassword(emailAdmin, passwordAdmin)
    .then((usuario) => {
        console.log("El registro de usuario fue exitoso");
        let admin = firebase.auth().currentUser;
        admin.updateProfile({ displayName: nameValue })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
      console.log("Error de firebase > Código > " + error.code);
      console.log("Error de firebase > Mensaje > " + error.message);

    });
  let empleado = {
    employeeEmail : document.getElementById('usersEmail').value,
    employeeName : document.getElementById('usersName').value,
    employeeOficina : document.getElementById('usersOffice').value
  }
  firebase.database().ref('Empleados').push(empleado);
}
