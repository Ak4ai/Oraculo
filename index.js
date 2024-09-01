
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the password value
    var password = document.getElementById('password').value;

    // Check if the password is correct
    if (password === 'Métis') {
      // Redirect to a new page if the password is correct
      window.location.href = '/success'; // Replace '/success' with the URL of the page you want to redirect to
    } else {
      // Display an error message or handle incorrect password
      alert('Incorrect password');
    }
  });