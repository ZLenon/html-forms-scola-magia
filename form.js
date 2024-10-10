// Obter os dados do localStorage
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

const sobreNome = localStorage.getItem("sobrenome");
const casa = localStorage.getItem("casa");
const familia = localStorage.getItem("familia");
const aprender = localStorage.getItem("aprender");
const avaliacao = localStorage.getItem("avaliacao");
const comentario = localStorage.getItem("commentario");

// Exibir os dados capturados na página
document.getElementById("name").textContent = `Nome: ${name}`;
document.getElementById("email").textContent = `Email: ${email}`;
document.getElementById("sobreNome").textContent = `Sobrenome: ${sobreNome}`;
document.getElementById("casa").textContent = `Casa: ${casa}`;
document.getElementById("familia").textContent = `Familia: ${familia}`;
document.getElementById("aprender").textContent = `Aprender: ${aprender}`;
document.getElementById("avaliacao").textContent = `Avaliacao: ${avaliacao}`;
document.getElementById("comentario").textContent = `Comentario: ${comentario}`;
