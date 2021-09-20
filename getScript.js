function getElement() {
    let url = "http://localhost:8081/organizations/";
    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    let id = document.getElementById('orgId').value;
    url += id;

    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);


    let xmldata = xmlhttp.responseXML;
    //let elements = xmldata.getElementsByTagName('element');

    let name = xmldata.getElementsByTagName('name');
    let coordinatex = xmldata.getElementsByTagName('coordinatex');
    let coordinatey = xmldata.getElementsByTagName('coordinatey');
    let creationdate = xmldata.getElementsByTagName('creationdate');
    let annualturnover = xmldata.getElementsByTagName('annualturnover');
    let type = xmldata.getElementsByTagName('type');
    let street = xmldata.getElementsByTagName('street');
    let town = xmldata.getElementsByTagName('town');
    let locationx = xmldata.getElementsByTagName('locationx');
    let locationy = xmldata.getElementsByTagName('locationy');


    const table = document.getElementById('infoField');
    let my_html = '';


        my_html += '<p>' + 'Name: ' + name[0].textContent + ', Coordinates: ' + coordinatex[0].textContent + ','
            + coordinatey[0].textContent + ', Creation date:' + creationdate[0].textContent + ', Annual Turnover: ' + annualturnover[0].textContent
            + ', Organization type: ' + type[0].textContent + ', Address: ' + town[0].textContent + ',' + street[0].textContent + ',' + locationx[0].textContent
            + ',' + locationy[0].textContent + '.' + '</p>';

    table.innerHTML = my_html;
}