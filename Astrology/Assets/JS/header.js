function addHeadContent() {
    const head = document.head; // Get the <head> element
    const body = document.body;
    // Meta Tags
    const metaAuthor = document.createElement("meta");
    metaAuthor.name = "author";
    metaAuthor.content = "Niterg";
    head.appendChild(metaAuthor);

    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    head.appendChild(metaViewport);

    const metaOgImage = document.createElement("meta");
    metaOgImage.setAttribute("property", "og:image");
    metaOgImage.content = "../Assets/Images/Krishna.jpeg";
    head.appendChild(metaOgImage);

    // Bootstrap CSS
    const bootstrapCss = document.createElement("link");
    bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    bootstrapCss.rel = "stylesheet";
    bootstrapCss.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
    bootstrapCss.crossOrigin = "anonymous";
    head.appendChild(bootstrapCss);

    // Bootstrap JS Bundle
    const bootstrapJs = document.createElement("script");
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    head.appendChild(bootstrapJs);

    // Favicon
    const favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.href = "../Assets/SVG/Ganesha.svg";
    head.appendChild(favicon);

    // Main CSS
    const mainCss = document.createElement("link");
    mainCss.rel = "stylesheet";
    mainCss.href = "../Assets/CSS/main.css";
    head.appendChild(mainCss);

    const indexCss = document.createElement("link");
    indexCss.rel = "stylesheet";
    indexCss.href = "./Astrology/Assets/CSS/main.css";
    head.appendChild(indexCss);

    // Fonts CSS
    const fontsCss = document.createElement("link");
    fontsCss.rel = "stylesheet";
    fontsCss.href = "../Assets/CSS/fonts.css";
    head.appendChild(fontsCss);

    const indexfontCss = document.createElement("link");
    indexfontCss.rel = "stylesheet";
    indexfontCss.href = "./Astrology/Assets/CSS/fonts.css";
    head.appendChild(indexfontCss);

    // Bootstrap Icons CSS
    const bootstrapIconsCss = document.createElement("link");
    bootstrapIconsCss.rel = "stylesheet";
    bootstrapIconsCss.href = "../Assets/Icons/bootstrap-icons.css";
    head.appendChild(bootstrapIconsCss);

    const indexiconCss = document.createElement("link");
    indexiconCss.rel = "stylesheet";
    indexiconCss.href = "./Astrology/Assets/Icons/bootstrap-icons.css";
    head.appendChild(indexiconCss);

    const loading = document.createElement("script");
    loading.src = "../Assets/JS/loading.js";
    body.appendChild(loading);

    const main = document.createElement("script");
    main.src = "../Assets/JS/main.js";
    body.appendChild(main);

    const media = document.createElement("script");
    media.src = "./Astrology/Assets/JS/social-media.js";
    body.appendChild(media);

}

// Call the function when the page loads
window.addEventListener("load", addHeadContent);
// Function to set navbar-brand based on the page

function display_navbar() {
    const chapterContent = document.getElementById("navigationbar");

    contentHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="bi bi-book-half p-2"></i>
                    BPHS
                </a>
                <button
                    class="navbar-toggler p-2 border-0 rotate-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDarkDropdown"
                    aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onclick="toggleRotation(this)"
                >
                    <span class="">
                        <i class="bi bi-arrow-bar-down fs-4 p-2 text-light"></i>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i class="bi bi-sunrise-fill p-2 "></i>
                                Astrology
                            </a>
                            <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="../Index/nksh-finder.html" onclick="collapseNavbar()">
                                        <i class="bi bi-moon-stars p-2"></i>
                                        Nakṣatra Finder
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../Index/nksh-finder.html" onclick="collapseNavbar()">
                                        <i class="bi bi-gender-male"></i>
                                        <i class="bi bi-gender-female"></i>
                                        Guna Milan
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onclick="collapseNavbar()">Coming Soon</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i class="bi bi-files p-2 "></i>
                                Books
                            </a>
                            <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item bg-warning-hover" href="../Index/bphs.html" onclick="collapseNavbar()">
                                        <i class="bi bi-book p-2"></i>
                                        Brihatparāśarahorāśāstra
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item bg-warning-hover" href="../Index/vmbj.html" onclick="collapseNavbar()">
                                        <i class="bi bi-book p-2"></i>
                                        Varāhamihīrasya Bṛhajjātaka
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onclick="collapseNavbar()">Coming Soon</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="me nav-link" href="../../index.html" onclick="collapseNavbar(); openTab('about-us-tab')">
                                <i class="bi-person-bounding-box p-2"></i>
                                About Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    chapterContent.innerHTML = contentHTML;
}
// Run the function when the page loads
window.addEventListener('load', display_navbar);
window.addEventListener('load', updateNavbarBrand);


function updateNavbarBrand() {
    const Navbartop = document.querySelector('.navbar-brand');
    const navdropItems = document.querySelectorAll('.dropdown-item');
    const aboutme = document.querySelectorAll('.me');


    // Example: Set brand based on window location or custom condition
    if (window.location.pathname.includes("test.html")) {
        Navbartop.innerHTML = "<i class='bi bi-gear-fill p-2'></i> Test";
        document.title = "Test";
    } else if (window.location.pathname.includes("index.html")) {
        navdropItems.forEach(item => {
            const text = item.textContent.trim();
            // Update href based on the dropdown item text
            if (text === "Nakṣatra Finder") {
                item.href = "./Astrology/Index/nksh-finder.html";
            } else if (text === "Brihatparāśarahorāśāstra") {
                item.href = "./Astrology/Index/bphs.html";
            } else if (text === "Varāhamihīrasya Bṛhajjātaka") {
                item.href = "./Astrology/Index/vmbj.html";
            } else {
                item.href = "#"; // Default href for unassigned items
            }
            aboutme.forEach(item => {
                const txt = item.textContent.trim();
                if (text === "About Me") {
                    item.href = "#";
                } else {
                    item.href = "#";
                }
            })
        });

        Navbartop.innerHTML = "<svg class='svg-ganesha center text-center'></svg> Niterg Astro";
        document.title = "Niterg Astro";
    }
    else if (window.location.pathname.includes("bphs.html")) {
        Navbartop.innerHTML = "<i class='bi bi-book-half p-2'></i>BPHS";
        document.title = "Brihatparāśarahorāśāstra";
    }
    else if (window.location.pathname.includes("vmbj.html")) {
        Navbartop.innerHTML = "<i class='bi bi-book-half p-2'></i>V.M. Bṛhajjātaka";
        document.title = "Varāhamihīrasya Bṛhajjātaka";

    } else if (window.location.pathname.includes("nksh-finder.html")) {
        Navbartop.innerHTML = "<i class='bi bi-moon-stars-fill p-2'></i>    Nakshatra Finder";
        document.title = "Nakshatra and Zodiac Finder";
    } else {
        Navbartop.innerHTML = " <svg class='svg-ganesha' class=' center text-center'></svg> Niterg Astro";
        document.title = "Niterg Astro";
    }
}
