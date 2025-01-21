// Get screen elements
const homeScreen = document.querySelector(".home-screen");
const loveNoteScreen = document.querySelector(".love-note-screen");
const letterScreen = document.querySelector(".letter-screen");
const bibleVersesScreen = document.querySelector(".bible-verses-screen");

// Get buttons for navigating
const goToNoteBtn = document.getElementById("go-to-note");
const goToLetterBtn = document.getElementById("go-to-letter");
const goBackHomeBtn = document.getElementById("go-back-home");
const goBackNoteBtn = document.getElementById("go-back-note");
const goToBibleVersesBtn = document.getElementById("go-to-bible-verses");
const goBackHomeLetterBtn = document.getElementById("go-back-home-letter");
const goBackNoteBibleBtn = document.getElementById("go-back-note-bible");

// Helper function to toggle screens
function toggleScreen(fromScreen, toScreen) {
    fromScreen.classList.remove("active");
    toScreen.classList.add("active");
}

// Navigation
goToNoteBtn.addEventListener("click", () => {
    toggleScreen(homeScreen, loveNoteScreen);
});

goToLetterBtn.addEventListener("click", () => {
    toggleScreen(loveNoteScreen, letterScreen);
});

goBackHomeBtn.addEventListener("click", () => {
    toggleScreen(loveNoteScreen, homeScreen);
});

goBackNoteBtn.addEventListener("click", () => {
    toggleScreen(letterScreen, loveNoteScreen);
});

goToBibleVersesBtn.addEventListener("click", () => {
    toggleScreen(loveNoteScreen, bibleVersesScreen);
});

goBackHomeLetterBtn.addEventListener("click", () => {
    toggleScreen(letterScreen, homeScreen);
});

goBackNoteBibleBtn.addEventListener("click", () => {
    toggleScreen(bibleVersesScreen, loveNoteScreen);
});

// Get the no button element
const noButton = document.getElementById("noButton");

// Add event listener for the click event
noButton.addEventListener("click", () => {
    noButton.textContent = "glitch"; // Change the text to 'glitch'
    noButton.style.animation = "glitchAnimation 0.5s infinite"; // Add a glitch effect (optional)
});


// Initially show the home screen
homeScreen.classList.add("active");
