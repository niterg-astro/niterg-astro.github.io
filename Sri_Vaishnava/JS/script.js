document.addEventListener('DOMContentLoaded', function () {
    // List of available text files
    const textFiles = [
        './Translation/guru.txt',
        './Translation/sandhyavandan.txt',
        './Translation/Vishnusahasranama.txt',
        './Translation/sayan.txt',
        './Translation/sri_varadvallabha.txt',
        './Translation/aalwarbandar.txt',
        './Translation/Yatirājaviṃśatiḥ.txt',
        // Add more files as needed
    ];

    // Font size control variables
    let currentFontSize = 1.2; // rem units
    const minFontSize = 0.8;
    const maxFontSize = 3.0;
    const fontSizeStep = 0.1;
    const defaultFontSize = 1.2;

    // Load file list and first file
    loadFileListAndFirstFile();

    async function loadFileListAndFirstFile() {
        const fileListElement = document.getElementById('fileList');
        fileListElement.innerHTML = '';

        try {
            // Load and display the first file immediately
            if (textFiles.length > 0) {
                await loadFileContent(textFiles[0]);
            }

            // Then load the rest of the file list
            for (const file of textFiles) {
                const response = await fetch(file);
                if (!response.ok) continue;

                const text = await response.text();
                const firstLine = text.split('\n')[0].trim();
                const displayName = firstLine.replace(/^#+\s*/, ''); // Remove markdown headers

                const listItem = document.createElement('button');
                listItem.className = 'list-group-item list-group-item-action ';
                listItem.textContent = displayName;
                listItem.onclick = () => loadFileContent(file);

                fileListElement.appendChild(listItem);
            }

            if (fileListElement.children.length === 0) {
                fileListElement.innerHTML = '<div class="list-group-item">No files found</div>';
            } else {
                // Highlight the first file in the list
                fileListElement.children[0].classList.add('active');
            }
        } catch (error) {
            console.error('Error loading file list:', error);
            fileListElement.innerHTML = '<div class="list-group-item">Error loading files</div>';
            document.getElementById('content').textContent = `Error loading initial file: ${error.message}`;
        }
    }

    // Rest of your functions remain exactly the same (loadFileContent, processTextContent, etc.)
    async function loadFileContent(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const text = await response.text();
            const processedContent = processTextContent(text, filePath);
            document.getElementById('content').innerHTML = processedContent;

            // Highlight selected file
            const fileItems = document.querySelectorAll('#fileList .list-group-item');
            fileItems.forEach(item => {
                item.classList.remove('active');
                if (item.textContent === text.split('\n')[0].trim().replace(/^#+\s*/, '')) {
                    item.classList.add('active');
                }
            });

            // Set up font controls if not already done
            if (!window.fontControlsInitialized) {
                setupFontControls();
                setupMobileControls();
                window.fontControlsInitialized = true;
            }
        } catch (error) {
            console.error('Error loading file:', error);
            document.getElementById('content').textContent = `Error loading file: ${error.message}`;
        }
    }


    function processTextContent(text, filePath) {
        // Split by lines while preserving original line breaks
        const lines = text.split(/\r?\n/);
        let processedLines = [];

        for (let line of lines) {
            // Convert markdown headers to HTML
            const headerMatch = line.match(/^(#+)\s*(.*)/);

            if (headerMatch) {
                const level = Math.min(headerMatch[1].length, 6);
                const text = headerMatch[2];
                line = `<h${level + 1} class="heading">${text}</h${level + 1}>`;
            }

            // Add line breaks after '।' (if not already present)
            line = line.replace(/।([^\n])/g, '।$1');

            // Add double line breaks around '॥<number>॥'
            line = line.replace(/॥(\d+)॥/g, '\n\n॥$1॥\n\n');

            // First, replace content inside parentheses with placeholders
            const bracketMatches = [];
            line = line.replace(/\((.*?)\)/g, (match, p1) => {
                const placeholder = `__BRACKET_${bracketMatches.length}__`;
                bracketMatches.push(`<span style="font-style: italic; color: black;">(${p1})</span>`);
                return placeholder;
            });

            // If file is sandhyavandan.txt and line contains ।, ॥, or ः
            if (filePath.includes('sandhyavandan.txt') && /[।॥ॐ]/.test(line)) {
                line = `<span style="color: maroon;">${line}</span>`;
            }

            // Restore bracketed content
            line = line.replace(/__BRACKET_(\d+)__/g, (match, index) => bracketMatches[parseInt(index)]);



            processedLines.push(line);
        }

        // Join lines and replace multiple newlines with proper HTML breaks
        let result = processedLines.join('\n');

        // Convert remaining single newlines to <br>
        result = result.replace(/([^\n])\n([^\n])/g, '$1<br>$2');

        // Convert multiple newlines to paragraphs
        result = result.replace(/\n{2,}/g, '</p><p>');

        result = result.replace(/\((.*?)\)/g, '<span style="font-style: italic; color: black;">($1)</span>');

        // Wrap in paragraph tags
        result = '<p>' + result + '</p>';

        return result;
    }

    function setupFontControls() {
        const content = document.getElementById('content');
        const increaseBtn = document.getElementById('increaseFont');
        const decreaseBtn = document.getElementById('decreaseFont');
        const resetBtn = document.getElementById('resetFont');

        // Store original font sizes
        const originalSizes = {
            content: parseFloat(getComputedStyle(content).fontSize),
            headings: {}
        };

        // Get original heading sizes
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
            originalSizes.headings[heading.tagName] = parseFloat(getComputedStyle(heading).fontSize);
        });

        function updateFontSize() {
            // Update content font size
            content.style.fontSize = `${currentFontSize}rem`;

            // Update all headings proportionally
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
                const originalSize = originalSizes.headings[heading.tagName];
                const scaleFactor = currentFontSize / defaultFontSize;
                heading.style.fontSize = `${originalSize * scaleFactor}px`;
            });
        }

        increaseBtn.addEventListener('click', () => {
            if (currentFontSize < maxFontSize) {
                currentFontSize = parseFloat((currentFontSize + fontSizeStep).toFixed(2));
                updateFontSize();
            }
        });

        decreaseBtn.addEventListener('click', () => {
            if (currentFontSize > minFontSize) {
                currentFontSize = parseFloat((currentFontSize - fontSizeStep).toFixed(2));
                updateFontSize();
            }
        });

        resetBtn.addEventListener('click', () => {
            currentFontSize = defaultFontSize;
            updateFontSize();
        });
    }

    function setupMobileControls() {
        const toggleBtn = document.getElementById('toggleControls');
        const fontControls = document.getElementById('fontControls');
        let isExpanded = false;

        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            fontControls.classList.toggle('expanded', isExpanded);
            toggleBtn.innerHTML = isExpanded ?
                '<i class="bi bi-chevron-down"></i>' :
                '<i class="bi bi-view-list"></i>';
        });
    }

    let mobileMenuInitialized = false;

    function setupMobileMenu() {
        if (mobileMenuInitialized) return; // Prevent re-attaching

        const menuBtn = document.querySelector('.mobile-menu-btn');
        const fileListContainer = document.querySelector('.file-list-container');

        if (menuBtn && fileListContainer) {
            menuBtn.addEventListener('click', () => {
                fileListContainer.classList.toggle('mobile-expanded');
            });
            mobileMenuInitialized = true;
        }
    }

    function setupGoToTop() {
        const goToTopBtn = document.getElementById('goToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                goToTopBtn.style.display = 'flex';
            } else {
                goToTopBtn.style.display = 'none';
            }
        });

        goToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize mobile features
    function initializeMobileFeatures() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setupMobileMenu();
            setupGoToTop();
        }
    }

    initializeMobileFeatures();

    window.addEventListener('resize', () => {
        initializeMobileFeatures(); // This won't re-add event listeners now
    });
});