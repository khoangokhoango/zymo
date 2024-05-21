// Handle form submission
(function(){
  const contactForm = document.querySelector('#ContactForm form');
  const requiredMessage = 'This field is required';
  contactForm.addEventListener('submit', (e) => {
    [
      "FirstName", "LastName", "Company", "Role"
    ].forEach(field => {
      e.preventDefault();
      const input = contactForm.querySelector(`#ContactForm-${field}`);
      const note = input.nextElementSibling;
      input.closest('.zymo-form__field').classList.toggle('zymo-form__field--has-error', !input.value);
      note.textContent = !input.value ? requiredMessage : '';
    })
  })
})();