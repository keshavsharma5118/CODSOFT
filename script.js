

//  nav bar section starts from here .................

console.log("hello!!")
console.log("this is Keshab Sharma")
document.getElementById('icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});
//nav bar ends here ....



// dynamic title change effect starts here for home section..............

    const dynamicText = document.querySelector('.dynamic-text');
    const phrases = ["B.Tech CSE Student", "Hackathon Enthusiast", "Backend Developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 40;
    let pauseBetweenPhrases = 500;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const displayedText = isDeleting ? currentPhrase.substring(0, charIndex--) : currentPhrase.substring(0, charIndex++);

        dynamicText.textContent = displayedText;

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, pauseBetweenPhrases);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    document.addEventListener('DOMContentLoaded', type);

// dynamic title change effect ends here for home section..............


    //form submission handling by showing alert(maintanance issue)......
   
    document.getElementById('submitButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert('The website is currently in maintenance mode. Your data cannot be sent at this time.');
    });

    // alert handling script ends here.........