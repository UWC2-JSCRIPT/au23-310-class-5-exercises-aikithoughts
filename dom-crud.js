// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const main = document.querySelector("main");
const anchor = document.createElement("a")
anchor.innerText = "Buy Now!";
anchor.setAttribute("id", "cta");
main.appendChild(anchor);


// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.querySelector("img");
console.log("data-color: ", image.getAttribute("data-color"));


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const featureList = document.querySelector("ul");
const turbo = featureList.getElementsByTagName("li")[2];
turbo.className = "highlight"; // Trying a different way from setAttribute

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const paragraphs = document.querySelectorAll("p"); // I know we only have one paragraph, but thought this was a good idea.
const lastParagraph = paragraphs[paragraphs.length -1];
main.removeChild(lastParagraph);