function createUser(){
  let name = document.getElementById("newName").value
  let email = document.getElementById("newEmail").value
  let password = document.getElementById("newPassword").value

  if (name == "" || name.trim().length < 2){
    alert("Preencha o seu nome corretamente.");
  } else if (email == "") {
    alert("Preencha o seu e-mail corretamente.");
  } else if( password.trim().length < 4 ){
    alert("Sua senha precisa ter pelo menos 4 caracteres");
  } else {
    window.location = "list.html";
  }
}
