function index_() {
    indexload();
}
function indexload() {
    document.getElementById("index-content").innerHTML = indexHTML;
}

const indexHTML =
    `<div class="tab-content p-2 mt-2 active ">
                    <ul class="no-bullet p-0 m-0">
                        <li>
                            <button onclick="window.location.href='./Astrology/Index/bphs.html';" class="rounded-2 border-0 my-2">
                                <h5 class="mt-2 mx-2">
                                    <i class="bi bi-book p-2"></i>
                                    Brihatparāśarahorā śāstra
                                </h5>
                            </button>
                            <ul class="no-bullet">
                                <li>
                                    You can Learn the detailed book of
                                    <b> Brihatparāśarahorā śāstra</b>
                                    where there is Saṃskṛta Śloka as well as English Translation
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button onclick="window.location.href='./Astrology/Index/vmbj.html';" class="rounded-2 border-0 my-2">
                                <h5 class="mt-2 mx-2">
                                    <i class="bi bi-book p-2"></i>
                                    Varāhamihīrasya Bṛhajjātaka
                                </h5>
                            </button>
                            <ul class="no-bullet">
                                <li>
                                    You can Learn the detailed book of
                                    <b> Varāhamihīrasya Bṛhajjātaka</b>
                                    where there is Saṃskṛta Śloka as well as English Translation
                                </li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <button onclick="window.location.href='./Astrology/Index/nksh-finder.html';" class="rounded-2 border-0 my-2">
                                <h5 class="mt-2 mx-2">
                                <i class="bi bi-moon-stars p-2"></i>
                                Nakshatra Finder
                            </h5>
                            </button>
                            <ul class="no-bullet">
                                <li>
                                    <span>
                                        <button onclick="window.location.href='./Astrology/Index/nksh-finder.html'" class="rounded-2 border-0 mb-2">
                                            <h6 class="mt-2 mx-2">
                                                <i class="bi bi-bezier p-2 "></i>
                                                Nakshatra
                                            </h6>
                                        </button>
                                    </span>
                                    <ul class="no-bullet">
                                        <li>Nakshatra Picker with degree</li>
                                    </ul>
                                </li>
                                <br>
                                <li>
                                    <span>
                                        <button onclick="window.location.href='./Astrology/Index/nksh-finder.html'" class=" rounded-2 border-0 mb-2">
                                            <h6 class="mt-2 mx-2">
                                                <i class="bi bi-bezier2 p-2 "></i>
                                                Zodiac Sign
                                            </h6>
                                        </button>
                                    </span>
                                    <ul class="no-bullet">
                                        <li>Identifying Nakshatra from Zodiac Sign</li>
                                    </ul>
                                </li>
                                <br>
                                <li>
                                    <span>
                                        <button onclick="window.location.href='./Astrology/Index/nksh-finder.html'" class="rounded-2 border-0 mb-2">
                                            <h6 class="mt-2 mx-2">
                                                <i class="bi bi-stars p-2 "></i>
                                                Show Nakshatra
                                            </h6>
                                        </button>
                                    </span>
                                    <ul class="no-bullet">
                                        <li>Shows the Name of Nakshatra from Zodiac Sign and Degree</li>
                                    </ul>
                                    <ul class="no-bullet">
                                        <li>
                                            Also shows corresponding
                                            <b>Vishnu Sahasranāma Śloka</b>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div id="contact"></div>
                </div>
                `;
document.addEventListener("DOMContentLoaded", index_);

function displayDateTime() {
    const now = new Date();

    // Format the date
    const dateString = now.toLocaleDateString(); // Formats date based on locale
    document.getElementById("date").textContent = dateString;

    // Format the time
    const timeString = now.toLocaleTimeString(); // Formats time based on locale
    document.getElementById("time").textContent = timeString;
}

// Initial display
displayDateTime();

// Update every second
setInterval(displayDateTime, 1000);


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

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


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
