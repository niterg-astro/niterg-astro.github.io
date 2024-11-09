d3.selectAll(".diamond-chart").each(function () {
    const svg = d3.select(this)
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 400 400");

    const rectX = 50;
    const rectY = 50;
    const rectWidth = 300;
    const rectHeight = 300;

    svg.append("rect")
        .attr("x", rectX)
        .attr("y", rectY)
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .attr("stroke", "grey")
        .attr("fill", "none")
        .attr("stroke-width", 2);

    // Draw diagonal lines for diamond grid
    svg.append("line").attr("x1", 200).attr("y1", 50).attr("x2", 350).attr("y2", 200).attr("stroke", "grey").attr("stroke-width", 1);
    svg.append("line").attr("x1", 50).attr("y1", 200).attr("x2", 200).attr("y2", 350).attr("stroke", "grey").attr("stroke-width", 1);
    svg.append("line").attr("x1", 200).attr("y1", 50).attr("x2", 50).attr("y2", 200).attr("stroke", "grey").attr("stroke-width", 1);
    svg.append("line").attr("x1", 350).attr("y1", 200).attr("x2", 200).attr("y2", 350).attr("stroke", "grey").attr("stroke-width", 1);
    svg.append("line").attr("x1", 50).attr("y1", 50).attr("x2", 350).attr("y2", 350).attr("stroke", "grey").attr("stroke-width", 1);
    svg.append("line").attr("x1", 350).attr("y1", 50).attr("x2", 50).attr("y2", 350).attr("stroke", "grey").attr("stroke-width", 1);


    // Define positions and classes for the 12 houses
    const housePositions = [
        { x: 200, y: 165, class: "1-house", value: "1" },
        { x: 125, y: 110, class: "2-house", value: "2" },
        { x: 105, y: 125, class: "3-house", value: "3" },
        { x: 160, y: 200, class: "4-house", value: "4" },
        { x: 105, y: 275, class: "5-house", value: "5" },
        { x: 125, y: 300, class: "6-house", value: "6" },
        { x: 200, y: 240, class: "7-house", value: "7" },
        { x: 275, y: 300, class: "8-house", value: "8" },
        { x: 295, y: 275, class: "9-house", value: "9" },
        { x: 240, y: 200, class: "10-house", value: "10" },
        { x: 290, y: 125, class: "11-house", value: "11" },
        { x: 275, y: 110, class: "12-house", value: "12" }
    ];
    const grahaPositions = [
        { x: 200, y: 90, class: "Lagn-house fw-semibold ", color: "maroon", value: "Lagn" },
        { x: 200, y: 120, class: "1-house fw-semibold small", color: "maroon", value: "Head" },
        { x: 125, y: 70, class: "2-house fw-semibold small", color: "maroon", value: "Face" },
        { x: 80, y: 125, class: "3-house fw-semibold small", color: "maroon", value: "Arms" },
        { x: 110, y: 200, class: "4-house fw-semibold small", color: "maroon", value: "Heart" },
        { x: 80, y: 260, class: "5-house fw-semibold small", color: "maroon", value: "Stomach" },
        { x: 125, y: 330, class: "6-house fw-semibold small", color: "maroon", value: "Hip" },
        { x: 200, y: 270, class: "7-house fw-semibold small", color: "maroon", value: "Below Navel" },
        { x: 275, y: 330, class: "8-house fw-semibold small", color: "maroon", value: "Privities" },
        { x: 330, y: 245, class: "9-house fw-semibold small", color: "maroon", value: "Thighs" },
        { x: 290, y: 200, class: "10-house fw-semibold small", color: "maroon", value: "Knees" },
        { x: 320, y: 110, class: "11-house fw-semibold small", color: "maroon", value: "Ankles" },
        { x: 275, y: 70, class: "12-house fw-semibold small", color: "maroon", value: "Feet" }
    ];

    // Append text elements for each house
    housePositions.forEach((house, index) => {
        svg.append("text")
            .attr("x", house.x)
            .attr("y", house.y)
            .attr("class", `diamond-text ${house.class}`)
            .text(house.value); // Initially, display numbers 1 to 12
    });
    // Append text elements of Graha for each house
    grahaPositions.forEach((house, index) => {
        svg.append("text")
            .attr("x", house.x)
            .attr("y", house.y)
            .attr("class", `diamond-text ${house.class}`)
            .text(house.value) // Initially, display numbers 1 to 12
            .attr('fill', house.color)
    });
    // Centered square for Ganesha SVG
    const squareSize = 100; // Set size as needed, e.g., 100x100 pixels
    const centeredSquare = svg.append("rect")
        .attr("x", 225 - squareSize / 2)
        .attr("y", 225 - squareSize / 2)
        .attr("width", squareSize)
        .attr("height", squareSize)
        .attr("fill", "url(#ganeshaPattern)") // Fill the square with a pattern containing the Ganesha SVG
        .attr("stroke-width", 0); // Hide the border of the square

    // Define pattern for Ganesha SVG
    svg.append("defs")
        .append("pattern")
        .attr("id", "ganeshaPattern")
        .attr("patternUnits", "objectBoundingBox")
        .attr("width", 1)
        .attr("height", 1)
        .append("image")
        .attr("xlink:href", "../Assets/SVG/Ganesha.svg")
        .attr("width", 50)
        .attr("height", 50)
        .attr("preserveAspectRatio", "xMidYMid meet"); // Ensures the SVG is centered within the square

    // Responsive adjustments
    window.addEventListener("resize", () => {
        // If additional responsiveness is needed, recalculate sizes here.
    });
});