"use strict";
const inputs = document.querySelectorAll (".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


  emailjs.init('0JPY9L_shz4WsCRIJ');
  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Enviando...';

      const serviceID = 'default_service';
      const templateID = 'template_r8o6peo';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar';
          alert('Mensaje enviado correctamente.');
        }, (err) => {
          btn.value = 'Enviar';
          alert('Error al enviar: ' + JSON.stringify(err));
        });
    });