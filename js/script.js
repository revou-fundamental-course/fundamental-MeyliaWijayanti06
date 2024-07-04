document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.body.addEventListener('click', function() {
        document.body.style.backgroundImage = 'url("./image/galaxy.jpg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.color = '#fff';
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userName').textContent = userName;
        document.getElementById('welcomeText').textContent = `Selamat datang kembali, ${userName}! PT. DOA BERSAMA adalah perusahaan yang bergerak di bidang penyedia solusi jaringan komputer.`;
        document.getElementById('userInput').style.display = 'none';
    }
});

function saveUserName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        localStorage.setItem('userName', nameInput);
        document.getElementById('userName').textContent = nameInput;
        document.getElementById('welcomeText').textContent = `Selamat datang, ${nameInput}! PT. DOA BERSAMA adalah perusahaan yang bergerak di bidang penyedia solusi jaringan komputer.`;
        document.getElementById('userInput').style.display = 'none';
    }
}