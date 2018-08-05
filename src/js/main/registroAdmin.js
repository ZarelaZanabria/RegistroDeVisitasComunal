function adminRegister() {
  const emailAdmin = usersEmail.value;
  const passwordAdmin = userPassword.value; 

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
}