// Handle form submission
(function(){
  const contactForm = document.querySelector('#ContactForm form');
  const messageField = document.querySelector('.zymo-contact-form__message');
  const requiredMessage = 'This field is required';
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;
    [ "FirstName", "LastName", "Company", "Role"].forEach(field => {
      const input = contactForm.querySelector(`#ContactForm-${field}`);
      const note = input.nextElementSibling;
      input.closest('.zymo-form__field').classList.toggle('zymo-form__field--has-error', !input.value);
      note.textContent = !input.value ? requiredMessage : '';
      hasError = !input.value;
    })

    if (!hasError) {
      messageField.classList.remove('d-none')
    }
  })
})();