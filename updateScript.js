function updateElement() {
    let url = "http://localhost:8081/organizations/";
    let xmlhttp = new XMLHttpRequest();
    let params = 'name=';

    let id = document.getElementById('orgId').value;
    let name = document.getElementById('orgName').value;
    let coordinatex = document.getElementById('coordX').value;
    let coordinatey = document.getElementById('coordY').value;
    let creationDate = document.getElementById('creationDate').value;
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
    let officialAddress = document.getElementById('offAddress').value;

    url += id;

    params += name + '&coordinatex=' + coordinatex + '&coordinatey=' + coordinatey + '&creationDate=' + creationDate +
        '&type=' + type + '&officialAddress=' + officialAddress;


    xmlhttp.open('POST', url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //, document.getElementById('orgName').value)
    xmlhttp.send(params);

    //TODO: implement an answering message for updating
    //const table = document.getElementById('mainmodule');
    //let my_html = '';
    //table.innerHTML += my_html;
}