

function highlight(element) {
    element.classList.add('highlight');
}

function removeHighlight(element) {
    element.classList.remove('highlight');
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

var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        link.style.color = '#fff'; 
        link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseleave', function() {
        link.style.color = 'rgb(17, 16, 16)'; 
    });
});


var socialIcons = document.querySelectorAll('.social a');
socialIcons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        icon.style.transform = 'scale(1.2)'; 
        icon.style.transition = 'transform 0.3s ease'; 
    });
    icon.addEventListener('mouseleave', function() {
        icon.style.transform = 'scale(1)'; 
    });
});


var contentSection = document.querySelector('.content');
contentSection.style.opacity = '0'; 
contentSection.style.transition = 'opacity 1s ease'; 
setTimeout(function() {
    contentSection.style.opacity = '1'; 
}, 1000);


var portfolioImages = document.querySelectorAll('.col-content img');
portfolioImages.forEach(function(image) {
    image.addEventListener('mouseenter', function() {
        image.style.transform = 'scale(1.1)'; 
        image.style.transition = 'transform 0.3s ease'; 
    });
    image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)'; 
    });
});


var skillIcons = document.querySelectorAll('.skill-icon img');
skillIcons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        icon.style.transform = 'scale(1.2)'; 
        icon.style.transition = 'transform 0.3s ease'; 
    });
    icon.addEventListener('mouseleave', function() {
        icon.style.transform = 'scale(1)'; 
    });
});

var skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(function(category) {
    category.addEventListener('mouseenter', function() {
        category.style.transform = 'scale(1.05)';
        category.style.transition = 'transform 0.3s ease'; 
    });
    category.addEventListener('mouseleave', function() {
        category.style.transform = 'scale(1)'; 
    });
});

