const enterButton = document.getElementById("enterbutton");

const validEmailSenha = () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  emailTrue = "tryber@teste.com";
  senhaTrue = 123456;

  if (email === emailTrue && senhaTrue === +senha) {
    console.log("Ola Tryber");
  } else {
    console.log("Email ou senha inválidos.");
  }
};

enterButton.addEventListener("click", validEmailSenha);
