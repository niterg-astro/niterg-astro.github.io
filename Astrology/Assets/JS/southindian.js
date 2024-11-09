d3.selectAll(".si-chart").each(function () {
    const svg = d3.select(this)
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 400 400");

    svg.append("rect").attr("x", 50).attr("y", 50).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (125 + 1 / 3)).attr("y", 50).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (200 + 1 / 3)).attr("y", 50).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (275 + 1 / 3)).attr("y", 50).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", 50).attr("y", (125 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", 50).attr("y", (200 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", 50).attr("y", (275 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (125 + 1 / 3)).attr("y", (275 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (200 + 1 / 3)).attr("y", (275 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (275 + 1 / 3)).attr("y", (275 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (275 + 1 / 3)).attr("y", (200 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);
    svg.append("rect").attr("x", (275 + 1 / 3)).attr("y", (125 + 1 / 3)).attr("width", 75).attr("height", 75).attr("stroke", "grey").attr("fill", "none").attr("stroke-width", 2);

    // Draw diagonal lines for diamond grid
    svg.append("text")
        .attr("x", 150)
        .attr("y", 230)
        .attr("class", `devanagari-text si-om`)
        .attr("fill", "red")
        .text('ç') // Initially, display numbers 1 to 12

    // Define positions and classes for the 12 houses
    const grahaPositions = [
        { x: 165, y: 90, class: "Aries wrap", color: "maroon", value: "Head" },
        { x: 240, y: 90, class: "Taurus wrap", color: "maroon", value: "Face" },
        { x: 315, y: 90, class: "Gemini wrap", color: "maroon", value: "Arms" },
        { x: 315, y: 165, class: "Cancer wrap", color: "maroon", value: "Heart" },
        { x: 315, y: 240, class: "Leo wrap", color: "maroon", value: "Stomach" },
        { x: 315, y: 315, class: "Virgo wrap", color: "maroon", value: "Hip" },
        { x: 240, y: 315, class: "Libra ", color: "maroon", value: "Below" },
        { x: 240, y: 330, class: "Libra ", color: "maroon", value: "Navel" },
        { x: 165, y: 315, class: "Scorpio wrap", color: "maroon", value: "Privities" },
        { x: 90, y: 315, class: "Saggitarius wrap", color: "maroon", value: "Thighs" },
        { x: 90, y: 240, class: "Capricorn wrap", color: "maroon", value: "Knees" },
        { x: 90, y: 165, class: "Aquarius wrap", color: "maroon", value: "Ankles" },
        { x: 90, y: 90, class: "Pisces wrap", color: "maroon", value: "Feet" }
    ];
    // Append text elements of Graha for each house
    grahaPositions.forEach((house, index) => {
        svg.append("text")
            .attr("x", house.x)
            .attr("y", house.y)
            .attr("class", `diamond-text ${house.class}`)
            .text(house.value) // Initially, display numbers 1 to 12
            .attr('fill', house.color)
    });
    window.addEventListener("resize", () => {
        // If additional responsiveness is needed, recalculate sizes here.
    });
});