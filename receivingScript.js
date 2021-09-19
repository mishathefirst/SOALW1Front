//change address
//const requestURL = 'http://localhost:8081/add';
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';

const parser = new DOMParser();
let info = document.getElementById('info');
let infoText = 'New text ';

//request.onload = function() {
    infoText += 'Loop ';
    let organizations = request.response;
    let listOfOrganizations = parser.parseFromString(organizations, "application/xml");
    infoText += organizations;
    info.innerText = infoText;
//}




