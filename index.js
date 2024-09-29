const enterButton = document.getElementById("enterbutton");

const validEmailSenha = () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  emailTrue = "tryber@teste.com";
  senhaTrue = 123456;

  if (email === emailTrue && senhaTrue === +senha) {
    alert("Ola Tryber");
  } else {
    alert("Email ou senha inválidos.");
  }
};

enterButton.addEventListener("click", validEmailSenha);
