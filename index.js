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

// Seleciona o textarea e o contador
const textarea = document.getElementById("comment");
// Adiciona um evento de input que atualiza o contador conforme o usuário digita
textarea.addEventListener("input", function () {
  const charCount = document.getElementById("charCount");
  const maxTextArea = 500;
  // Atualiza o contador com o número de caracteres
  charCount.textContent = maxTextArea - textarea.value.length;
});

// Seleciona o formulário e o campo de saída
const form = document.getElementById("evaluation-form");
const output = document.getElementById("output");

// Adiciona um ouvinte para o evento de submit
form.addEventListener("submit", function (event) {
  // Evita que o formulário seja enviado automaticamente (comportamento padrão)
  event.preventDefault();

  // Captura os valores dos campos
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;
  const sobreNome = document.getElementById("input-lastname").value;
  const casa = document.getElementById("house").value;
  const familias = document.getElementsByName("family");
  let selectedValue = null;
  // Percorrer a lista e verificar qual está marcado
  for (const radio of familias) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  // Capturar todos os checkbox com a classe "subject"
  const aprender = document.querySelectorAll(".subject");
  const selectedSubjects = [];

  // Percorrer os checkbox e verificar quais estão marcados
  aprender.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedSubjects.push(checkbox.value);
    }
  });

  // Capturar o valor do input radio selecionado
  const selectedRate = document.querySelector(
    'input[name="rate"]:checked'
  ).value;
  const comment = document.getElementById("comment").value;

  // Armazenar no localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("sobrenome", sobreNome);
  localStorage.setItem("casa", casa);
  localStorage.setItem("familia", selectedValue);
  // --
  localStorage.setItem("aprender", JSON.stringify(selectedSubjects));
  localStorage.setItem("avaliacao", selectedRate);
  localStorage.setItem("commentario", comment);

  // Redirecionar para a segunda página
  window.location.href = "form.html";
});
