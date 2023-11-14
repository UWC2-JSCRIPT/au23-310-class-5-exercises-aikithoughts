// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const wheresThePointer = (event) => {
  if (event.target.tagName === "TD") {
    const textNode = document.createTextNode(`${event.clientX}, ${event.clientY}`);
    event.target.innerHTML = "";
    event.target.appendChild(textNode);
  }
};

const table = document.querySelector("table");
table.addEventListener("click", wheresThePointer);