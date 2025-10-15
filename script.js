const redP = document.createElement("p");
const blueHeader = document.createElement("h3");
const blackBorderDiv = document.createElement("h3");
const divHeader = document.createElement("h1");
const divP = document.createElement("p");

redP.textContent = "Hey I'm red!";
redP.style.color = "red";

blueHeader.textContent = "I'm a blue h3";
blueHeader.style.color = "blue";

blackBorderDiv.style.border = "1px solid black";
blackBorderDiv.style.backgroundColor = "pink";

divHeader.innerText = "I'm in a div";
divP.innerText = "ME TOO";

document.body.appendChild(redP);
document.body.appendChild(blueHeader);
document.body.appendChild(blackBorderDiv);

blackBorderDiv.appendChild(divHeader);
blackBorderDiv.appendChild(divP);
