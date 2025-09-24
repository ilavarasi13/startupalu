// Ensure the script runs after everything loads
window.addEventListener("load", function () {
    setTimeout(function () {
        let spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.add('hide'); // This hides the spinner smoothly
        }
    }, 100); // Adjust the delay if needed
});

// Initiate the wowjs
new WOW().init();