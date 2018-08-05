function loginAdmin() {
	const userLoginName = usersLoginName.value;
	const userLoginPassword = usersLoginPassword.value;

	firebase.auth().signInWithEmailAndPassword(userLoginName, userLoginPassword)
		.then(() => {
			let user = firebase.auth().currentUser;
			localStorage.setItem("user", JSON.stringify(user));
			console.log("Usuario inició sesión con éxito");		
		})
	.catch((error) => {
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		}); 
}