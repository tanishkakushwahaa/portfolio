window.onload = function () {
    setTimeout(function () {
        document.getElementById('secondPart').style.visibility = 'visible';
    }, 1000);
};
function highlight(element) {
    element.classList.add('highlight');
}

function removeHighlight(element) {
    element.classList.remove('highlight');
}
function highlight(element) {
    element.style.borderColor = "#007bff";
}

function removeHighlight(element) {
    element.style.borderColor = "";
}

function highlight(element) {
    element.style.borderColor = "#007bff";
}

function removeHighlight(element) {
    element.style.borderColor = "";
}

function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var checkboxes = document.querySelectorAll('input[name="identity"]:checked');
    var emailError = document.getElementById('emailError');
    
    emailError.textContent = "";
    if (firstName === "" || lastName === "" || email === "" || message === "" || checkboxes.length === 0) {
        alert("Please fill in all required fields.");
        return false;
    }
    if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
