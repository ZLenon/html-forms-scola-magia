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

const submitbtn = document.querySelector("#submit-btn");
const agreement = document.querySelector("#agreement");

agreement.addEventListener("change", function () {
  // Verifica se o checkbox está marcado
  if (agreement.checked) {
    // Habilita o botão
    submitbtn.disabled = false;
  } else {
    // Desabilita o botão se o checkbox não estiver marcado
    submitbtn.disabled = true;
  }
});
