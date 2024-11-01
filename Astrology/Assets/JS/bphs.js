// Arrays to store chapters and sloka pairs
const chapters = [];            // For storing chapters in English
const devanagariChapters = [];  // For storing chapters in Devanagari

// Fetch and parse English .docx
fetch("../Assets/BPHS/Brihatparāśarahorāśāstra.docx")
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
        mammoth.extractRawText({ arrayBuffer: arrayBuffer })
            .then(result => processEnglishContent(result.value))
            .catch(error => console.error("Error parsing English .docx:", error));
    });

// Fetch and parse Devanagari .docx
fetch("../Assets/BPHS/बृहत्पाराशरहोराशास्त्र.docx")
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
        mammoth.extractRawText({ arrayBuffer: arrayBuffer })
            .then(result => processDevanagariContent(result.value))
            .catch(error => console.error("Error parsing Devanagari .docx:", error));
    });

// Process Devanagari content, identifying chapters and slokas
function processDevanagariContent(content) {
    const lines = content.split("\n");
    let currentChapter = null;
    let currentSloka = "";

    lines.forEach(line => {
        if (line.startsWith("अध्यायः")) {
            // Save the current chapter if one exists
            if (currentChapter) devanagariChapters.push(currentChapter);
            // Initialize a new chapter with the title
            currentChapter = { title: line.trim(), slokas: [] };
            currentSloka = ""; // Reset the sloka for a new chapter
        } else if (line.match(/॥\s*([१२३४५६७८९०]+)\s*॥/)) {
            // This line marks the end of a sloka
            currentSloka += line.trim(); // Append the line with "॥ num ॥" to current sloka

            // Push the completed sloka to the chapter's slokas list
            if (currentChapter) {
                currentChapter.slokas.push(currentSloka.trim());
            }
            // Reset current sloka for the next one
            currentSloka = "";
        } else {
            // Continue building the current sloka
            currentSloka += line.trim() + " ";
        }
    });

    // After loop ends, ensure the last sloka and chapter are added
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
    populateDropdown();
}

// Populate the dropdown with chapter titles
function populateDropdown() {
    const dropdown = document.getElementById("chapterDropdown");
    chapters.forEach((chapter, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = chapter.title;
        dropdown.appendChild(option);
    });
}

// Display selected chapter content in paired sloka-by-sloka format with columns
function displayChapter() {
    const dropdown = document.getElementById("chapterDropdown");
    const chapterContent = document.getElementById("chapterContent");
    const selectedChapterIndex = dropdown.value;

    if (selectedChapterIndex === "") {
        chapterContent.innerHTML = "<p>Please select a chapter to view content.</p>";
        return;
    }

    const selectedChapter = chapters[selectedChapterIndex];
    const devanagariChapter = devanagariChapters[selectedChapterIndex];
    let contentHTML = `
    <h2 class="devanagari-text">${devanagariChapter.title}</h2>
    <h2>Chapter ${selectedChapter.title}</h2> <br>
    `;

    // Display slokas in two columns
    selectedChapter.slokas.forEach((englishSloka, idx) => {
        if (englishSloka.lang === 'separator') {
            contentHTML += `
            <div class="separator bphs-sloka row my-2">
                <div class="col-lg-4 col-md devanagari-text sanskrit text-center my-2">
                </div>
                <div class="col-lg-6 col-md english-text my-2">${englishSloka.text}
                </div>
            </div>`;
        } else {
            const range = englishSloka.text.match(/^(\d+)(?:-(\d+))?/);
            let correspondingSloka = "";

            if (range) {
                const start = parseInt(range[1]); // Extend to include one sloka before
                const end = range[2] ? parseInt(range[2]) : start;

                // Concatenate slokas in the extended range
                correspondingSloka = devanagariChapter.slokas.slice(start - 1, end).join("") + "<br>";
            }

            contentHTML += `
                <div class="bphs-sloka row my-2">
                    <div class="col-lg-4 col-md devanagari-text sanskrit text-center my-2">${(correspondingSloka.replace(/।/g, "।<br>")
                    .replace(/॥\s*ॐ\s*॥/g, "<br>॥ ॐ ॥<br>")
                    .replace(/विघ्नेश्वरपादपंकजम्\s*॥/g, "विघ्नेश्वरपादपंकजम् ॥<br>")
                    .replace(/पाराशरः/g, "<br>पाराशरः<br>")
                    .replace(/॥(?!\s*[१२३४५६७८९०ॐ])/g, "॥<br>")) || "Sloka not found"}</div>
                    <div class="col-lg-6 col-md english-text my-2">${englishSloka.text}</div>
                </div>
            `;
        }
    });

    chapterContent.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.userSelect = "none";

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    document.addEventListener("copy", function (e) {
        e.preventDefault();
    });
});

document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "s")) {
        e.preventDefault();
    }
});
