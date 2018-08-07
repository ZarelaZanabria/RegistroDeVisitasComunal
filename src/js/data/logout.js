window.logout =()=> {	
	firebase.auth().signOut()
		.then(() => {
      console.log("El usuario cerro sesión");
      window.location="../index.html"
		})
		.catch((error) => {
			console.log("Hay un error en el codigo" + error.code);
			console.log("Hay un error con firebase" + error.message);
		});
}