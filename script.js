const components = {
    "line_1": ["Things happen", "What should I say", "The sky is blue, but sometimes gray", "Let's try it out"],
    "line_2": ["So you keep going", "Don't wait for the right time", "Cookies are good"],
    "line_3": ["And life goes on", "And so it ends", "It will be okay in the end", "It will worth the wait"]
};

function randomMessageGenerator(component) {
    const line1 = component.line_1[Math.floor(Math.random() * component.line_1.length)];
    const line2 = component.line_2[Math.floor(Math.random() * component.line_2.length)];
    const line3 = component.line_3[Math.floor(Math.random() * component.line_3.length)];

    return `${line1}\n${line2}\n${line3}`; 
}

console.log(randomMessageGenerator(components));