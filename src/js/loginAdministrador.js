document.getElementById('registerAdmin').style.display = 'none';
document.getElementById('btnRegisterAdmin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'block';
  document.getElementById('loginAdmin').style.display = 'none';
});
document.getElementById('Login-Admin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'none';
  document.getElementById('loginAdmin').style.display = 'block';
});

//funcion para loguearse si ya tiene cuenta
function loginAdmin() {
  userLoginName = document.getElementById('userLoginName').value;
  userLoginPassword = document.getElementById('userLoginPassword').value;

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
