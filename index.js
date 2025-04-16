document.getElementById('signup-form').addEventListener('submit' , function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('Email');
    const errorMessage = document.getElementById('error-message');

    if(emailInput.value === '') {
        errorMessage.textContent = 'Veuillez entrer votre email.';
    }else if (!emailInput.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        errorMessage.textContent = 'Adresse email invalide.';
    } else {
        errorMessage.textContent = '';
        alert("Formulaire envoyé avec succés!");
   
    }
})
