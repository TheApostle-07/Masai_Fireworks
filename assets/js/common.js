
let selectedFireworkType = "peony"; // Default type
let selectedFireworkColor = "hsl(0, 100%, 50%)"; // Default color (red)
const globalAudio = document.getElementById('globalAudio');

document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars-container");
    const starCount = 50; // Number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random horizontal position within the viewport width
        star.style.left = `${Math.random() * 100}vw`;

        // Random size between 8px and 16px
        const size = Math.random() * 8 + 8;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random animation duration between 5s and 15s
        const duration = Math.random() * 100 + 5;
        star.style.animationDuration = `${duration}s`;

        // Random delay to stagger the start times
        const delay = Math.random() * 5;
        star.style.animationDelay = `${delay}s`;

        // Append star to container
        starsContainer.appendChild(star);
    }
});

// Show specific main customization options (Fireworks, Background, Audio)
function showOptions(option) {
    hideAllOptions();
    const targetOptions = document.getElementById(`${option}-options`);
    if (targetOptions) {
        targetOptions.classList.remove('hidden');
        console.log(`Main Option Selected: ${option}`);
    }
}

// Go back to main options from any sub-options
function goBack() {
    hideAllOptions();
    document.getElementById('main-options').classList.remove('hidden');
    console.log("Returned to Main Options");
}

// Show sub-options for a selected firework category (e.g., Rockets, Shapes, Multi-Shot)
function showSubOptions(category) {
    hideAllOptions();
    const subOptions = document.getElementById(`${category}-options`);
    if (subOptions) {
        subOptions.classList.remove('hidden');
        console.log(`Category Selected: ${category}`);
    }
}

// Show customization options for a specific firework type (e.g., Peony, Multi-Shot)
function selectFireworkType(type) {
    hideAllOptions();
    const customizationSection = document.getElementById('fireworks-customization');
    if (customizationSection) {
        customizationSection.classList.remove('hidden');
        document.getElementById('selected-firework-type').textContent = `Customize ${type}`;
        showColorOptions(); // Show color options for all firework types
        console.log(`Firework Type Selected: ${type}`);
    }
}

// Show color options for customization
function showColorOptions() {
    const colorOptions = document.getElementById('color-options');
    if (colorOptions) {
        colorOptions.classList.remove('hidden'); // Ensure color options are shown for all firework types
    }
}

// Go back to the main Fireworks options
function goToFireworksOptions() {
    hideAllOptions();
    document.getElementById('fireworks-options').classList.remove('hidden');
    console.log("Returned to Fireworks Options");
}

// Background selection function
function setBackground(background) {
    const mainDisplay = document.getElementById('main-display');
    mainDisplay.className = ''; // Clear previous backgrounds
    mainDisplay.classList.add(`background-${background}`);
    console.log(`Background Selected: ${background}`);
}

// Function to hide all option divs
function hideAllOptions() {
    const contents = document.querySelectorAll('.modal-content');
    contents.forEach(content => content.classList.add('hidden'));
}

// Customization functions for Fireworks (e.g., color, size, effect)
function setFireworkColor(color) {
    console.log(`Firework Color Selected: ${color}`);
    // Add logic here to apply the color to the fireworks display
}

function setFireworkSize(size) {
    console.log(`Firework Size Selected: ${size}`);
    // Add logic here to apply the size to the fireworks display
}

// Audio playback controls
let currentAudio = null;
let currentButton = null;
let isPlaying = false; // Variable to track audio state

function toggleAudio(track, button) {
    // Only play the track if it's not already playing or is a different track
    if (!isPlaying || currentAudio.src !== track) {
        if (currentAudio) {
            currentAudio.pause(); // Pause any existing audio
            currentAudio.currentTime = 0; // Reset time
            if (currentButton) {
                currentButton.innerHTML = '<i class="fas fa-play-circle"></i>'; // Reset icon on previous button
            }
        }

        // Set up the new track
        currentAudio = new Audio(track);
        currentAudio.loop = true;
        currentAudio.play();
        button.innerHTML = '<i class="fas fa-pause-circle"></i>'; // Update icon to "pause"
        currentButton = button;
        isPlaying = true; // Mark as playing

        // Ensure the button icon resets if the audio naturally ends
        currentAudio.onended = () => {
            button.innerHTML = '<i class="fas fa-play-circle"></i>';
            isPlaying = false;
        };
    }
}

function stopAudio(button) {
    if (currentAudio) {
        currentAudio.pause(); // Stop audio
        currentAudio.currentTime = 0; // Reset to beginning
        isPlaying = false; // Mark as not playing

        // Reset the icon of the playing track button to "play" if it exists
        if (currentButton) {
            currentButton.innerHTML = '<i class="fas fa-play-circle"></i>';
            currentButton = null; // Clear the reference to the stopped button
        }
    }
}



// Specific selections for different firework categories
function selectBombType(type) {
    console.log(`Bomb Type Selected: ${type}`);
    selectFireworkType(type);
}

function selectSpinnerType(type) {
    console.log(`Spinner Type Selected: ${type}`);
    selectFireworkType(type);
}

function selectSparklerType(type) {
    console.log(`Sparkler Type Selected: ${type}`);
    selectFireworkType(type);
}

// Multi-Shot options
function selectMultiShotType(type) {
    console.log(`Multi-Shot Type Selected: ${type}`);
    showMultiShotOptions(type);
}

function showMultiShotOptions(type) {
    hideAllOptions();
    const customizationSection = document.getElementById('multi-shot-customization');
    if (customizationSection) {
        customizationSection.classList.remove('hidden');
        document.getElementById('selected-multi-shot-type').textContent = `Customize ${type}`;
    }
}

// Background transition effect
function changeBackground(element) {
    const backgroundUrl = element.getAttribute("data-background");
    const overlay = document.getElementById("background-overlay");

    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.backgroundImage = `url('${backgroundUrl}')`;
        overlay.style.opacity = "0.7";
        console.log(`Background Changed: ${backgroundUrl}`);
    }, 500);
}

// Set the firework color based on the selected option
function setFireworkColor(color) {
    selectedFireworkColor = color;
    console.log(`Firework Color Selected: ${color}`);
}

// Trigger a firework launch with selected settings
function launchCustomFirework() {
    window.dispatchEvent(new CustomEvent("launchFirework", {
        detail: { type: selectedFireworkType, color: selectedFireworkColor }
    }));
}

// Go back to the main Fireworks options
function goToFireworksOptions() {
    hideAllOptions();
    document.getElementById('fireworks-options').classList.remove('hidden');
    console.log("Returned to Fireworks Options");
}









