const loadingHTML = `
    <h3 class="text-danger mt-3">
        <div class="hourglass-animation">
            <i class="bi bi-hourglass-top"></i>
            <i class="bi bi-hourglass-split"></i>
            <i class="bi bi-hourglass-bottom"></i>
        </div>
        Devanāgarī Sloka is loading
    </h3>
`;

// Show loading content in the loadingContainer
function showLoading() {
    document.getElementById("loadingContainer").innerHTML = loadingHTML;
}

// Simulate loading process
function loadContent() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000); // Simulate a 3-second load
    });
}

// Toggle between loading and main content
function displayContent() {
    showLoading();

    loadContent()
        .then(() => {
            document.getElementById("loadingContainer").style.display = "none";
            document.getElementById("contentContainer").style.display = "block";
        })
        .catch((error) => {
            console.error("Error loading content:", error);
            document.getElementById("loadingContainer").innerHTML = "<p>Failed to load content.</p>";
        });
}

// Trigger content loading on page load
document.addEventListener("DOMContentLoaded", displayContent);