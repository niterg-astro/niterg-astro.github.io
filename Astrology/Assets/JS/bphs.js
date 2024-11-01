// Arrays to store chapter and sloka pairs
const chapters = [];          // For storing chapters in English
const devanagariChapters = []; // For storing chapters in Devanagari

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
        // Match chapters (like "अध्यायः")
        if (line.startsWith("अध्यायः")) {
            if (currentChapter) {
                devanagariChapters.push(currentChapter);
            }
            currentChapter = { title: line, slokas: [] };
        }
        // Match sloka numbering in Devanagari (like "॥ १ ॥", "॥ १-२ ॥", etc.)
        else if (line.match(/॥\s*([१२३४५६७८९०]+)\s*॥/) || line.match(/॥\s*([१२३४५६७८९०]+)\s*-\s*([१२३४५६७८९०]+½?)\s*॥/)) {
            // If currentSloka is not empty, push it to the chapter with a line break
            if (currentSloka) {
                currentChapter.slokas.push(currentSloka);
                currentSloka = ""; // Reset currentSloka for the next sloka
            }
            // Start a new sloka with the current line (including numbering)
            currentSloka = line.trim();
        } else {
            // Append line to current sloka
            currentSloka += line.trim() + " ";
        }
    });

    // Push the last chapter if exists
    if (currentChapter) {
        if (currentSloka) {
            currentChapter.slokas.push(currentSloka.trim() + "<br>");
        }
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
    <h2 class="">Chapter ${selectedChapter.title}</h2>
    `;

    // Display slokas in two columns
    selectedChapter.slokas.forEach((englishSloka, idx) => {
        const correspondingDevanagariSloka = devanagariChapter?.slokas[idx] || "Sloka not found";
        contentHTML += `
            <div class="bphs-sloka row">
                <div class="col-lg-6 col-md text-decoration-line-through sloka devanagari devanagari-text p-2">
                ${correspondingDevanagariSloka.replace(/।/g, "।<br>")
                .replace(/॥\s*ॐ\s*॥/g, "<br>॥ ॐ ॥<br>")
                .replace(/पाराशरः/g, "<br>पाराशरः<br>")
                .replace(/॥(?!\s*[१२३४५६७८९०ॐ])/g, "॥<br>")
            }</div>
                <div class="col-lg-6 col-md english english-text text-justify">${englishSloka.text}</div>
            </div>
        `;
    });

    chapterContent.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", function () {
    // Disable text selection
    document.body.style.userSelect = "none";

    // Prevent right-click
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Prevent Ctrl+C and other copy events
    document.addEventListener("copy", function (e) {
        e.preventDefault();
    });
});

document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "c") || // Ctrl+C
        (e.ctrlKey && e.key === "u") || // Ctrl+U (view source)
        (e.ctrlKey && e.key === "s")) { // Ctrl+S (save page)
        e.preventDefault();
    }
});
