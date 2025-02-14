function nextSection(currentSection, nextSection) {
    // Hide the current section
    document.getElementById(currentSection).style.display = "none";

    // Show the next section
    document.getElementById(nextSection).style.display = "block";
}

function startOver() {
    // Reload the page to start over
    location.reload();
}
