function collapseNavbar() {
    const navbarCollapse = document.getElementById('navbarNavDarkDropdown');
    if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
        toggleRotation(this);
    }
}
function toggleRotation(button) {
    const icon = button.querySelector("i");  // Select the icon within the button

    // Toggle between 'arrow-bar-down' and 'arrow-bar-up'
    if (icon.classList.contains("bi-arrow-bar-down")) {
        icon.classList.replace("bi-arrow-bar-down", "bi-arrow-bar-up");
    } else {
        icon.classList.replace("bi-arrow-bar-up", "bi-arrow-bar-down");
    }

    // Toggle the rotated class to add rotation effect
    icon.classList.toggle("rotated");
}


const nakshatras = [
    { name: "Ashwini", start: 0, end: 13.33, zodiac: "Aries", lord: "Ketu" },
    { name: "Bharani", start: 13.34, end: 26.66, zodiac: "Aries", lord: "Venus" },
    { name: "Krittika", start: 26.67, end: 40.00, zodiac: "Aries/Taurus", lord: "Sun" },
    { name: "Rohini", start: 40.01, end: 53.33, zodiac: "Taurus", lord: "Moon" },
    { name: "Mrigashira", start: 53.34, end: 66.66, zodiac: "Taurus/Gemini", lord: "Mars" },
    { name: "Ardra", start: 66.67, end: 80.00, zodiac: "Gemini", lord: "Rahu" },
    { name: "Punarvasu", start: 80.01, end: 93.33, zodiac: "Gemini/Cancer", lord: "Jupiter" },
    { name: "Pushya", start: 93.34, end: 106.66, zodiac: "Cancer", lord: "Saturn" },
    { name: "Ashlesha", start: 106.67, end: 120.00, zodiac: "Cancer", lord: "Mercury" },
    { name: "Magha", start: 120.01, end: 133.33, zodiac: "Leo", lord: "Ketu" },
    { name: "Purva Phalguni", start: 133.34, end: 146.66, zodiac: "Leo", lord: "Venus" },
    { name: "Uttara Phalguni", start: 146.67, end: 160.00, zodiac: "Leo/Virgo", lord: "Sun" },
    { name: "Hasta", start: 160.01, end: 173.33, zodiac: "Virgo", lord: "Moon" },
    { name: "Chitra", start: 173.34, end: 186.66, zodiac: "Virgo/Libra", lord: "Mars" },
    { name: "Swati", start: 186.67, end: 200.00, zodiac: "Libra", lord: "Rahu" },
    { name: "Vishakha", start: 200.01, end: 213.33, zodiac: "Libra/Scorpio", lord: "Jupiter" },
    { name: "Anuradha", start: 213.34, end: 226.66, zodiac: "Scorpio", lord: "Saturn" },
    { name: "Jyeshtha", start: 226.67, end: 240.00, zodiac: "Scorpio", lord: "Mercury" },
    { name: "Mula", start: 240.01, end: 253.33, zodiac: "Sagittarius", lord: "Ketu" },
    { name: "Purva Ashadha", start: 253.34, end: 266.66, zodiac: "Sagittarius", lord: "Venus" },
    { name: "Uttara Ashadha", start: 266.67, end: 280.00, zodiac: "Sagittarius/Capricorn", lord: "Sun" },
    { name: "Shravana", start: 280.01, end: 293.33, zodiac: "Capricorn", lord: "Moon" },
    { name: "Dhanishta", start: 293.34, end: 306.66, zodiac: "Capricorn/Aquarius", lord: "Mars" },
    { name: "Shatabhisha", start: 306.67, end: 320.00, zodiac: "Aquarius", lord: "Rahu" },
    { name: "Purva Bhadrapada", start: 320.01, end: 333.33, zodiac: "Aquarius/Pisces", lord: "Jupiter" },
    { name: "Uttara Bhadrapada", start: 333.34, end: 346.66, zodiac: "Pisces", lord: "Saturn" },
    { name: "Revati", start: 346.67, end: 360.00, zodiac: "Pisces", lord: "Mercury" }
];

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content', 'nav-link');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
}

function showDegreeFromNakshatra() {
    const selectedNakshatra = document.getElementById('nakshatra').value;
    const nakshatra = nakshatras.find(n => n.name === selectedNakshatra);
    if (nakshatra) {
        const zodiacDegrees = calculateZodiacRange(nakshatra.start, nakshatra.end);
        document.getElementById('nakshatra-result').innerHTML = `
        <div class="col-lg-5 col-md my-2">
            <div class="card p-3">
                <b> Nakshatra: </b> ${nakshatra.name}<br><br>
                <b> Nakshatra Lord: </b> ${nakshatra.lord}<br><br>
                <b> Zodiac Sign(s): </b> ${zodiacDegrees.signs.join(' / ')}<br><br>
                <b> ${zodiacDegrees.signs.join(' / ')} Degree Range: </b> ${zodiacDegrees.degrees.start}° - ${zodiacDegrees.degrees.end}°<br><br>
                <b> In 360 Degree: </b> ${nakshatra.start.toFixed(2)}° - ${nakshatra.end.toFixed(2)}°<br>
            <div>
        </div>
        `;
    } else {
        document.getElementById('nakshatra-result').textContent = "Please select a valid Nakshatra.";
    }
}

function calculateZodiacRange(startDegree, endDegree) {
    const zodiacSigns = [
        { name: "Aries", start: 0, end: 30 },
        { name: "Taurus", start: 30, end: 60 },
        { name: "Gemini", start: 60, end: 90 },
        { name: "Cancer", start: 90, end: 120 },
        { name: "Leo", start: 120, end: 150 },
        { name: "Virgo", start: 150, end: 180 },
        { name: "Libra", start: 180, end: 210 },
        { name: "Scorpio", start: 210, end: 240 },
        { name: "Sagittarius", start: 240, end: 270 },
        { name: "Capricorn", start: 270, end: 300 },
        { name: "Aquarius", start: 300, end: 330 },
        { name: "Pisces", start: 330, end: 360 }
    ];

    const startZodiac = zodiacSigns.find(z => startDegree >= z.start && startDegree < z.end);
    const endZodiac = zodiacSigns.find(z => endDegree > z.start && endDegree <= z.end);

    const startZodiacDegree = (startDegree % 30).toFixed(2);
    const endZodiacDegree = (endDegree % 30).toFixed(2);

    const result = {
        signs: [],
        degrees: {
            start: startZodiacDegree,
            end: endZodiacDegree
        }
    };

    if (startZodiac && endZodiac) {
        result.signs.push(startZodiac.name);
        if (startZodiac.name !== endZodiac.name) {
            result.signs.push(endZodiac.name);
        }
    }

    return result;
}

function showNakshatraFromZodiac() {
    const selectedZodiac = document.getElementById('zodiac-list').value;
    const resultDiv = document.getElementById('zodiac-result');
    let result = "";
    result = `<h3>Nakshatra in ${selectedZodiac}</h3>`
    nakshatras.forEach(n => {
        if (n.zodiac.includes(selectedZodiac)) {
            const zodiacStart = (n.start % 30).toFixed(2);
            const zodiacEnd = (n.end % 30).toFixed(2);
            result += `<div class="col-lg-3 col-md-6 my-2"> 
                        <div class="card p-3">
                            <b> Nakshatra: </b> ${n.name}<br><br>
                            <b> ${n.zodiac} Degree:</b> ${zodiacStart}° - ${zodiacEnd}° <br><br>
                            <b> In 360 Degree:</b>  ${n.start}° - ${n.end}°<br><br>
                            <b> Planetary Lord:</b>  ${n.lord}
                            <br>
                        </div>
                        </div>`;
        }
    });

    if (result) {
        resultDiv.innerHTML = result;
    } else {
        resultDiv.textContent = "No Nakshatras found for the selected zodiac sign.";
    }
}

let versesData = [];
let singleColumnData = [];

// Function to load CSV data
function loadCSV(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            const lines = data.split("\n").slice(1); // Skip the header line
            lines.forEach(line => {
                const [sanskrit, transliteration] = line.split(",").map(item => item.trim());
                versesData.push({ sanskrit, transliteration });
            });
        });
}

// Function to load the second CSV data (single column)
function loadSingleColumnCSV(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            const lines = data.split("\n").slice(1); // Skip the header line
            lines.forEach(line => {
                const translation = line.trim(); // Only one column
                singleColumnData.push({ translation });
            });
        });
}

// Function to find Nakshatra, Pada, Degree Range, and Sloka
function findNakshatra() {
    const degree = parseFloat(document.getElementById('degree').value);
    const zodiacSign = document.getElementById('zodiac').value;
    const resultDiv = document.getElementById('nakshatra-result-pada');
    const translationDiv = document.getElementById('sloka-translation')

    if (isNaN(degree) || degree < 0 || degree > 30 || !zodiacSign) {
        resultDiv.textContent = "Please enter a valid degree (0-30) and select a zodiac sign.";
        return;
    }

    // Convert degree to 360 degree format
    const zodiacOffsets = {
        "Aries": 0, "Taurus": 30, "Gemini": 60, "Cancer": 90,
        "Leo": 120, "Virgo": 150, "Libra": 180, "Scorpio": 210,
        "Sagittarius": 240, "Capricorn": 270, "Aquarius": 300, "Pisces": 330
    };

    const totalDegree = zodiacOffsets[zodiacSign] + degree;

    // Find Nakshatra, Pada, and Sloka
    let foundNakshatra = null;
    let foundPada = null;
    let correspondingSloka = null;

    for (const nakshatra of nakshatras) {
        if (totalDegree >= nakshatra.start && totalDegree <= nakshatra.end) {
            foundNakshatra = nakshatra.name;
            lord = nakshatra.lord;

            // Calculate Pada
            const nakshatraRange = nakshatra.end - nakshatra.start;
            const relativeDegree = totalDegree - nakshatra.start;
            const padaSize = nakshatraRange / 4; // Each Nakshatra has 4 Padas
            foundPada = Math.ceil(relativeDegree / padaSize);

            // Calculate corresponding sloka index based on Nakshatra and Pada
            const slokaIndex = Math.round((nakshatras.indexOf(nakshatra) * 4) + (foundPada - 1)); // Convert to 0-based index

            // Ensure slokaIndex is within bounds of versesData and singleColumnData
            if (slokaIndex >= 0 && slokaIndex < versesData.length) {
                correspondingSloka = versesData[slokaIndex] || { sanskrit: "No sloka found.", transliteration: "No transliteration available." };
                translationSloka = singleColumnData[slokaIndex] || { translation: "No translation available." };
            } else {
                correspondingSloka = { sanskrit: "No sloka found.", transliteration: "No transliteration available." };
                translationSloka = { translation: "No translation available." };
            }
            break;
        }
    }


    // Display results
    resultDiv.innerHTML = `
       <b> Nakshatra: </b> ${foundNakshatra || "Not found"}, 
       <b> Pada: </b> ${foundPada || "Not found"}<br>
       <b> Degree Range: </b> ${degree}° <br> 
       <b> Zodiac Sign:</b> ${zodiacSign}<br> 
       <b> Nakshatra Lord:</b> ${lord}
    `;

    translationDiv.innerHTML =
        `<div class="row mb-4">
            <div class="col-lg-6 col-md text-center">    
                <h4>
                <i class="bi bi-tropical-storm "></i>
                    Vishnu Sahasranamam Sloka: </h4><br>
                    <div class="sanskrit">
                            ${correspondingSloka.sanskrit
            .replace(/।/g, "।<br>")
            .replace(/\॥\श्री/g, "॥<br> श्री")
            .replace(/\॥\स/g, "॥<br> स")}<br> <br>    
                    </div>
            </div>
            <div class="col-lg-6 col-md text-center">    
                <h4> <i class="bi bi-input-cursor-text "></i>
               Transliteration: </h4><br>${correspondingSloka.transliteration.replace(/(?<!\.)\.(?!\.)/g, "<br>")}
            </div>
        </div>
        
        <h5><i class="bi bi-file-earmark-break "></i>  
        Translation: </h5>
        <div style="margin-top:-35px">
        ${translationSloka.translation
            .replace(/\.{1},{1}/g, ".<br><br>")
            .replace(/\;\ \(/g, ".<br>(")
            .replace(/\(\d+(?!-)/g, "<br><br>$&")
            .replace(/\d+\./g, "<br><br>$&")
            .replace(/\"{3}/g, " ")
            .replace(/\"{2}/g, " ")
            .replace(/\��/g, " - '<i><b>")
            .replace(/ {1}�{1}/g, " <i><b>'")
            .replace(/�{1}/g, "</i></b>' ")
            .replace(/\((\d+)\)\s*([a-zA-Z]+(-[a-zA-Z]+)*)/g, "($1) <b>$2</b>")
            .replace(/(\d+\.)\s*([a-zA-Z]+(-[a-zA-Z]+)*)/g, "$1 <b>$2</b>")
            .replace(/\(([a-zA-Z)]+)\)/g, "<i>($1)</i>")}
        </div>`;

}

// Load the CSV on window load
window.onload = function () {
    loadCSV('Astrology/Assets/CSV/vishnu_sahasranamam_verses.csv'); // Ensure the path to your first CSV is correct
    loadSingleColumnCSV('Astrology/Assets/CSV/translation_.csv'); // Ensure the path to your second CSV is correct
};

function get360DegreeFromZodiac(zodiac, degree) {
    const zodiacOffsets = {
        "Aries": 0, "Taurus": 30, "Gemini": 60, "Cancer": 90,
        "Leo": 120, "Virgo": 150, "Libra": 180, "Scorpio": 210,
        "Sagittarius": 240, "Capricorn": 270, "Aquarius": 300, "Pisces": 330
    };
    return zodiacOffsets[zodiac] + degree;
}

function getPada(totalDegree, nakshatra) {
    const nakshatraRange = nakshatra.end - nakshatra.start;
    const relativeDegree = totalDegree - nakshatra.start;
    const padaSize = nakshatraRange / 4;
    return Math.ceil(relativeDegree / padaSize);
}

// Populate Nakshatra dropdown
const nakshatraDropdown = document.getElementById('nakshatra');
nakshatras.forEach(n => {
    let option = document.createElement('option');
    option.value = n.name;
    option.text = n.name;
    nakshatraDropdown.add(option);
});

let contact = document.getElementById("contact");
contact.innerHTML = `
            <div id = "social_media"> </div>
`;

let script = document.createElement("script");
script.src = "./Astrology/Assets/JS/social-media.js";
script.type = "text/javascript";
script.defer = true;
contact.appendChild(script);

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

const devtoolsCheck = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 100;
    const heightThreshold = window.outerHeight - window.innerHeight > 100;
    if (widthThreshold || heightThreshold) {
        alert("Developer tools are open! Closing for security.");
        window.close();
    }
};
setInterval(devtoolsCheck, 1000);
