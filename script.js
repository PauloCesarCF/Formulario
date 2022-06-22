const form = document.querySelector('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

form.addEventListener('submit', (e) => {
  e.preventDefault();//para não recarregar a página

  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;

  if(usernameValue === "") {
    error(username, "O nome do usuario é obrigatorio");
  } else{
    sucess(username);
  };

  if(emailValue === "") {
    error(email, "O email é obrigatorio");
  } else if(!checkEmail(emailValue)){
    error(email, "Por favor, insira um email valído");
  } else{
    sucess(email);
  }

  if(passwordValue === ""){
    error(password, "Coloque uma senha");
  } else if(passwordValue.length < 7){
    error(password, "A senha deve ter no minimo 7 caracteres");
  } else{
    sucess(password);
  }

  if(passwordConfirmValue === ""){
    error(passwordConfirm, "É necessario confirma a senha");
  } else if(passwordConfirmValue != passwordValue){
    error(passwordConfirm, "As senha não são iguais");
  } else{
    sucess(passwordConfirm);
  }

  const formControls = form.querySelectorAll(".input-data");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function sucess(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "input-data success";
}

function error(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "input-data error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }