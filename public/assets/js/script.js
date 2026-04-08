const containerMain = document.querySelector('main');
const containerForm = document.createElement('div');

const form = document.createElement('form');
form.action = 'https://youtube.com';
form.method = 'GET' // POST de préférence
form.classList.add('p-4', 'bg-light');

const emailLabel = document.createElement('label');
emailLabel.for = 'input-email';
emailLabel.textContent = 'Newsletter';
emailLabel.classList.add('form-label');

const wrapper = document.createElement('div');
wrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'gap-2');

const emailInput = document.createElement('input');
emailInput.id = 'input-email';
emailInput.type = 'email';
emailInput.classList.add('form-control');
emailInput.required = true;
emailInput.placeholder = 'Saisissez un email';

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Soumettre';
submitBtn.type = 'submit';
submitBtn.classList.add('btn', 'btn-success');

containerMain.append(containerForm);
containerForm.append(form);
form.append(emailLabel);
form.append(wrapper);
wrapper.append(emailInput);
wrapper.append(submitBtn);