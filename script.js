function validateForm(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  if (email !== 'tryber@teste.com' || password !== '123456') {
    alert('Email ou senha inválidos.');
    return;
  }

  alert('Olá, Tryber!');
}

function loadApp() {
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', validateForm);
}

window.addEventListener('load', loadApp);
