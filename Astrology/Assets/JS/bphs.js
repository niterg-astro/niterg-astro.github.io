let currentChapterIndex = 0; // Track the current chapter index
const chapters = [];          // For storing chapters in English
const devanagariChapters = []; // For storing chapters in Devanagari
const bookcontent = document.querySelector('.book');

bookcontent.innerHTML = `
        <div class="div m-2">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm mt-2">
                    <h2 class="devanagari-text">
                        <i class="bi mx-4"></i>
                        बृहत्पाराशरहोराशास्त्र
                    </h2>
                    <h2>
                        <i class="bi bi-book p-2"></i>
                        BrihatParāśarahorā
                        Śāstra
                    </h2>
                    <h4 class="text-end">
                        <i class="bi bi-pen p-2"></i>
                        Mahārishi Parāśara
                    </h4>
                    <br>
                    <!-- Dropdown for selecting chapter -->
                    <label for="chapterDropdown1">Select Chapter:</label>
                    <select id="chapterDropdown1" class="form-control" onchange="displayChapter()">
                        <option value="">Choose a chapter</option>
                    </select>
                </div>
                
            <br>
            <!-- Section to display content of the selected chapter -->
            <div id="chapterContent" style="margin-top: 20px;"></div>
            <div id="contentContainer">
                <!-- Navigation -->
                <div id="navigationButtons" style="margin-top: 20px; text-align: center;">
                    <div class="row">
                        <div class="col-4">
                            <button class="form-control" onclick="goToPreviousChapter()">Previous</button>
                        </div>
                        <div class="col-4">
                            <select id="chapterDropdown2" class="form-control" onchange="displayChapter()">
                                <option value="">Chapter</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <button class="form-control" onclick="goToNextChapter()">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
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

// Update processEnglishContent to detect and display parsed tables within chapter content
function processEnglishContent(content) {
    const lines = content.split("\n");
    let currentChapter = null;

    // This variable will accumulate HTML for all content including parsed tables
    let contentHTML = "";

    lines.forEach(line => {
        if (line.startsWith("Chapter")) {
            if (currentChapter) chapters.push(currentChapter);
            currentChapter = { title: line.slice(8), slokas: [] };
        } else if (line.match(/^\d+(\-\d+)?\./) || line.match(/^\d+½\./) || line.match(/^\d+\./) || line.match(/^\d+(\-\d+½)?\./)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'english' });
        } else if (line.match(/^\/~\*/)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'bphs-tstart' });
        } else if (line.match(/^\*/)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'bphs-td' });
        } else if (line.match(/^\~\//)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'bphs-tend' });
        } else if (line !== "") {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'separator' });
        } else if (line.match(/^<svg/)) {
            currentChapter?.slokas.push({ text: line.trim(), lang: 'svg' });
        }
    });

    if (currentChapter) chapters.push(currentChapter);

}

// Populate the dropdown with chapter titles
function populateDropdown() {
    const dropdown1 = document.getElementById("chapterDropdown1");
    const dropdown2 = document.getElementById("chapterDropdown2");

    // Clear any previous options in both dropdowns
    dropdown1.innerHTML = "";
    dropdown2.innerHTML = "";

    // Populate both dropdowns with chapter options
    chapters.forEach((chapter, index) => {
        const option = document.createElement("option");
        option.value = index; // Set the value to the chapter index
        option.textContent = chapter.title; // Set the display text to the chapter title

        // Append the option to both dropdowns
        dropdown1.appendChild(option.cloneNode(true)); // Use cloneNode to duplicate the option
        dropdown2.appendChild(option.cloneNode(true));
    });

    // Set default selection to the first chapter in both dropdowns
    dropdown1.selectedIndex = 0;
    dropdown2.selectedIndex = 0;

    // Ensure the current chapter is displayed correctly
    displayChapter(0);
}

// Handle chapter selection from dropdown
// Add event listener for the first dropdown
document.getElementById("chapterDropdown1").addEventListener("change", function () {
    const selectedIndex = parseInt(this.value);
    if (!isNaN(selectedIndex)) {
        displayChapter(selectedIndex); // Call displayChapter with the selected index
    }
});

// Add event listener for the second dropdown
document.getElementById("chapterDropdown2").addEventListener("change", function () {
    const selectedIndex = parseInt(this.value);
    if (!isNaN(selectedIndex)) {
        displayChapter(selectedIndex); // Call displayChapter with the selected index
    }
});

const houseMapping = {
    Lagn: '1st',
    Tanu: '1st',
    Dhan: '2nd',
    Sahaj: '3rd',
    Bandhu: '4th',
    Putra: '5th',
    Ari: '6th',
    Yuvati: '7th',
    Randhr: '8th',
    Dharma: '9th',
    Karma: '10th',
    Labh: '11th',
    Vyaya: '12th'
};

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
        let englishtranslation = englishSloka.text.
            replace(/Sūrya/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Sūrya</button></b>")
            .replace(/Chandra/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Chandra</button></b>")
            .replace(/Mangal/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Mangal</button></b>")
            .replace(/Budh/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Budh</button></b>")
            .replace(/Guru/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Guru</button></b>")
            .replace(/Śukra/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Śukr</button></b>")
            .replace(/Śani/g, "<b><button class='border-0 pe-none rounded-2 p-0'>Śani</button></b>")
            .replace(/\b(Sun|Moon|Mars|Mercury|Jupiter|Venus|Saturn|Rahu|Ketu|Example:|Formula:)/g, "<button class='border-0 pe-none rounded-2 p-0'><b>$1</button></b>")
            .replace(/(\b\w+\b)\s+(\b\w*Yog\w*\b)/g, "<button class='border-0 pe-none rounded-2 p-0'><i class='bi bi-star-half p-1'></i><b>$1 $2</b></button>")
            .replace(/Notes:/g, "<b><h5 class='bg-dark text-light rounded-2 p-2' ><i class='bi bi-paperclip p-2 text-light'></i>Notes:</h5></b>")
            .replace(/\b(Mahārishi|Parāśar|Vishnu|Śrī|Maitreya|Maharishi|Paraśar|Rāśi)\b/g, " <b>$1</b>")
            .replace(/\b(Horā|Dreshkan|Chaturthāńś|Saptāńś|Navāńś|Dashāńś|Dvadashāńś|Shodashāńś|Vimshāńś|Chaturvimshāńś|Saptavimshāńś|Trimshāńś|Khavedāńś|Akshavedāńś|Shashtiāńś)\b/g, "<b>$1</b>")
            .replace(/\b(Lagn|Tanu|Dhan|Sahaj|Bandhu|Putra|Ari|Yuvati|Randhr|Dharma|Karma|Labh|Vyaya)\b/g, (match) => {
                const houseNumber = houseMapping[match];
                return `<button class="rounded-2 border-0 pe-none"><b>${houseNumber} - ${match}</b></button>`;
            });

        if (englishSloka.lang === 'separator') {
            contentHTML += `
            <div class="bphs-sloka row my-3">
                   <div class="col-lg-2 col-md-0 devanagari-text"></div>
                   <div class="separator col-lg-8 col-md-12 english-text my-2 mb-4">${englishtranslation}
                </div>
            </div>`;
        } else if (englishSloka.lang === 'bphs-tstart') {
            contentHTML += `
            <div class="bphs-sloka row my-3">
                   <div class="col-lg-2 col-md-0 devanagari-text"></div>
                   <div class="bphs-table col-lg-8 col-md-12 my-2 english-text table-responsive ">
                   <table class='table table-bordered justify-center text-center'>
                   <tbody>  
                   <tr class="bg-dark text-light rounded-2">
                    <th>${englishtranslation
                    .replace(/^\/~\*/g, "")
                    .replace(/~~/g, "</th><th>")
                    .replace(/\*/g, "")
                }</th>
                   </tr>
                   `;
        } else if (englishSloka.lang === 'bphs-td') {
            contentHTML += `
            <tr>
                <td>${englishtranslation
                    .replace(/\*/g, "")
                    .replace(/~/g, "</td><td>")
                }</td>
            </tr>`;
        }
        else if (englishSloka.lang === 'bphs-tend') {
            contentHTML += `
            ${englishtranslation
                    .replace(/^\~\//, "</tbody></table>")
                }
                </div>
                </div>`;
        }
        else {
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
                <div class="col-lg-7 col-md english-text my-2 mb-2">${englishtranslation}</div>
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
