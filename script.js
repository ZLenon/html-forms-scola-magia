function agreeToggle(e) {
  const btnSubmit = document.querySelector('#submit-btn');
  const btn = e.target;
  if (btn.value) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

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
  document.querySelector('#submit-btn').disabled = true;
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', validateForm);
  const agree = document.querySelector('#agreement');
  agree.addEventListener('click', agreeToggle);
}

window.addEventListener('load', loadApp);
