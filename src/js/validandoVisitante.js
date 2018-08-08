//valida la dirección de correo electrónico y la contraseña
const emailValidator = (string) => {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    emailRegex.test(string) ? answer = true : answer = false;
    return answer;
}
const dniValidator = (string) => {
    nameRegex = /^.{8,8}$/;
    nameRegex.test(string) ? answer = true : answer = false;
    return answer;
}
window.emailValidator = emailValidator;
window.dniValidator = dniValidator;

document.getElementById('users-email').addEventListener('input', () =>{
  let myInput = document.getElementById('users-email').value;
  valido = document.getElementById('emailOK');
  emailValidator(myInput) ? valido.innerHTML = "\u2714" : valido.innerHTML ="\u2718";
});
document.getElementById('users-dni').addEventListener('input', () =>{
  let myInput = document.getElementById('users-dni').value;
  valido = document.getElementById('dniOK');
  dniValidator(myInput) ? valido.innerHTML = "\u2714" : valido.innerHTML ="\u2718";
});
