let currentChapterIndex = 0; // Track the current chapter index
const chapters = [];          // For storing chapters in English
const devanagariChapters = []; // For storing chapters in Devanagari

// Sequentially load both files, ensuring they are fully processed before displaying
Promise.all([
    fetch("../Assets/BPHS/Brihatparāśarahorāśāstra.docx")
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => mammoth.extractRawText({ arrayBuffer: arrayBuffer }))
        .then(result => processEnglishContent(result.value)),
    fetch("../Assets/BPHS/बृहत्पाराशरहोराशास्त्र.docx")
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => mammoth.extractRawText({ arrayBuffer: arrayBuffer }))
        .then(result => processDevanagariContent(result.value))
])
    .then(() => {
        populateDropdown();       // Populate the dropdown after both files are loaded
        displayChapter(0);        // Display Chapter 1 content
    })
    .catch(error => console.error("Error loading files:", error));

// Process Devanagari content, identifying chapters and slokas
function processDevanagariContent(content) {
    const lines = content.split("\n");
    let currentChapter = null;
    let currentSloka = "";

    lines.forEach(line => {
        if (line.startsWith("अध्यायः")) {
            if (currentChapter) devanagariChapters.push(currentChapter);
            currentChapter = { title: line.trim(), slokas: [] };
            currentSloka = ""; // Reset the sloka for a new chapter
        } else if (line.match(/॥\s*([१२३४५६७८९०]+)\s*॥/)) {
            currentSloka += line.trim();
            if (currentChapter) {
                currentChapter.slokas.push(currentSloka.trim());
            }
            currentSloka = "";
        } else {
            currentSloka += line.trim() + " ";
        }
    });

    if (currentChapter) {
        if (currentSloka) currentChapter.slokas.push(currentSloka.trim());
        devanagariChapters.push(currentChapter);
    }
}

// Process English content, identifying chapters and slokas
function processEnglishContent(content) {
    const lines = content.split("\n");
    let currentChapter = null;

    lines.forEach(line => {
        if (line.startsWith("Chapter") || line.startsWith("## ")) {
            if (currentChapter) chapters.push(currentChapter);
            currentChapter = { title: line.slice(8), slokas: [] };
        } else if (line.match(/^\d+(\-\d+)?\./) || line.match(/^\d+\./) || line.match(/^\d+(\-\d+½)?\./)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'english' });
        } else if (line.trim() !== "") {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'separator' });
        }
    });

    if (currentChapter) chapters.push(currentChapter);
}

// Populate the dropdown with chapter titles
function populateDropdown() {
    const dropdown = document.getElementById("chapterDropdown");
    dropdown.innerHTML = ""; // Clear any previous options

    chapters.forEach((chapter, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = chapter.title;
        dropdown.appendChild(option);
    });

    dropdown.selectedIndex = 0; // Set default to Chapter 1
}

// Display selected chapter content in paired sloka-by-sloka format with columns
function displayChapter(index) {
    currentChapterIndex = index;
    const chapterContent = document.getElementById("chapterContent");
    const selectedChapter = chapters[currentChapterIndex];
    const devanagariChapter = devanagariChapters[currentChapterIndex];
    let contentHTML = `
    <h2 class="devanagari-text">${devanagariChapter.title}</h2>
    <h2>Chapter ${selectedChapter.title}</h2> <br>
    `;

    selectedChapter.slokas.forEach((englishSloka, idx) => {
        if (englishSloka.lang === 'separator') {
            contentHTML += `
            <div class="bphs-sloka row my-3">
                    <div class="col-lg-4 col-md devanagari-text"></div>
                    <div class=" separator col-lg-7 col-md english-text">${englishSloka.text}</div>
                </div>`;

        } else {
            const range = englishSloka.text.match(/^(\d+)(?:-(\d+))?/);
            let correspondingSloka = "";
            if (range) {
                const start = parseInt(range[1]);
                const end = range[2] ? parseInt(range[2]) : start;
                correspondingSloka = devanagariChapter.slokas.slice(start - 1, end).join("").replace(/।/g, "।<br>")
                    .replace(/॥\s*ॐ\s*॥/g, "<br>॥ ॐ ॥<br>")
                    .replace(/विघ्नेश्वरपादपंकजम्\s*॥/g, "विघ्नेश्वरपादपंकजम् ॥<br>")
                    .replace(/पाराशरः/g, "<br>पाराशरः<br>")
                    .replace(/॥(?!\s*[१२३४५६७८९०ॐ])/g, "॥<br>");

            }
            contentHTML += `
                <div class="bphs-sloka row my-3">
                    <div class="col-lg-4 col-md sanskrit sloka devanagari-text my-2">${correspondingSloka || "Sloka not found"}</div>
                    <div class="col-lg-7 col-md english-text my-2">${englishSloka.text}</div>
                </div>
            `;
        }
    });

    chapterContent.innerHTML = contentHTML;

    // Scroll to the top of the content container
    chapterContent.scrollIntoView({ behavior: "smooth", block: "start" });

    // Show or hide navigation buttons based on chapter index
    const navigationButtons = document.getElementById("navigationButtons");
    navigationButtons.style.display = "block";
    navigationButtons.querySelector("button:nth-child(1)").disabled = currentChapterIndex <= 0;
    navigationButtons.querySelector("button:nth-child(2)").disabled = currentChapterIndex >= chapters.length - 1;
}

// Handle chapter selection from dropdown
document.getElementById("chapterDropdown").addEventListener("change", function () {
    const selectedIndex = parseInt(this.value);
    if (!isNaN(selectedIndex)) {
        displayChapter(selectedIndex);
    }
});

// Navigate to the previous chapter
function goToPreviousChapter() {
    if (currentChapterIndex > 0) {
        displayChapter(currentChapterIndex - 1);
    }
}

// Navigate to the next chapter
function goToNextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        displayChapter(currentChapterIndex + 1);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.userSelect = "none";
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("copy", function (e) { e.preventDefault(); });
});

document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "s")) {
        e.preventDefault();
    }
});
