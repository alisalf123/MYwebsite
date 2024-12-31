// Example JavaScript: Confirming the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    alert('Thank you for contacting me, ' + email);
});
