'use strict';
'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  // 2. Прив’язуємо label до input через id
  label.setAttribute('for', input.id);

  const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = text;

  input.placeholder = text;

  input.parentElement.prepend(label);
});
