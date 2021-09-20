function addElement() {
    let url = "http://localhost:8081/organizations";
    let xmlhttp = new XMLHttpRequest();
    let params = 'name=';

    let name = document.getElementById('orgName').value;
    let coordinatex = document.getElementById('coordX').value;
    let coordinatey = document.getElementById('coordY').value;
    let creationDate = document.getElementById('creationDate').value;
    let annualTurnover = document.getElementById('annualTurnover').value;
    let type;
    if (document.getElementById("publicType").checked) {
        type = document.getElementById('publicType').value;
    }
    if (document.getElementById("trustType").checked) {
        type = document.getElementById('trustType').value;
    }
    if (document.getElementById("privLimitedType").checked) {
        type = document.getElementById('privLimitedType').value;
    }
    let officialAddressStreet = document.getElementById('offAddressStreet').value;
    let officialAddressTown = document.getElementById('offAddressTown').value;

    params += name + '&coordinatex=' + coordinatex + '&coordinatey=' + coordinatey + '&creationDate=' + creationDate +
        '&annualTurnover=' + annualTurnover + '&type=' + type + '&street=' + officialAddressStreet + '&town=' + officialAddressTown;


    xmlhttp.open('POST', url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //, document.getElementById('orgName').value)
    xmlhttp.send(params);

    //TODO: implement an answering message for adding
    //const table = document.getElementById('mainmodule');
    //let my_html = '';
    //table.innerHTML += my_html;
}
