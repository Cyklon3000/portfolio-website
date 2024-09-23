// Function to handle the hover state
function createAnimatedText(text)
{
    const textSvg = document.getElementById('animated-text');
    textSvg.innerHTML = ''; // Clear any existing content

    // Split the text into individual characters
    text.split('').forEach((char, index) =>
    {
        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

        if (char === ' ')
        {
            tspan.innerHTML = '&nbsp;';
        } else
        {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const textElem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            const textPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');

            path.setAttribute('id', `path-${index}`);
            path.setAttribute('d', 'M0 0 L10 0 L10 10 L0 10 Z');
            path.setAttribute('fill', '#FFF');

            textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#path-${index}`);
            textPath.setAttribute('startOffset', '0');
            textPath.textContent = char;

            textElem.appendChild(textPath);
            tspan.appendChild(path);
            tspan.appendChild(textElem);
        }

        textSvg.appendChild(tspan);
    });
}

// Event listeners for hover effect
const textContainer = document.getElementById('text-container');

textContainer.addEventListener('mouseenter', () =>
{
    textContainer.classList.add('hovered');
});

textContainer.addEventListener('mouseleave', () =>
{
    textContainer.classList.remove('hovered');
});

// Initialize the text
createAnimatedText('Hello World');
