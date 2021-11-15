function sortIt() {
    let sortUrl = 'http://localhost:8081/sort'
    let sortByName = document.getElementById("sortbyname");
    let sortByTurnover = document.getElementById("sortbyturnover");
    let sortByType = document.getElementById("sortbytype");

    let sortingQuery = '';
    if (sortByName.checked) {
        sortingQuery += '/name'
    }
    if (sortByTurnover.checked) {
        sortingQuery += '/annualturnover'
    }
    if (sortByType.checked) {
        sortingQuery += '/organizationtype'
    }

    sortUrl += sortingQuery

    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", sortUrl, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);


    let xmldata = xmlhttp.responseXML;
    let elements = xmldata.getElementsByTagName('element');
    let id = xmldata.getElementsByTagName('id');
    let name = xmldata.getElementsByTagName('name');
    let coordinatex = xmldata.getElementsByTagName('coordinatex');
    let coordinatey = xmldata.getElementsByTagName('coordinatey');
    let creationdate = xmldata.getElementsByTagName('creationdate');
    let annualturnover = xmldata.getElementsByTagName('annualturnover');
    let type = xmldata.getElementsByTagName('type');
    let street = xmldata.getElementsByTagName('street');
    let town = xmldata.getElementsByTagName('town');

    const table = document.getElementById('maintable');
    let my_html = '';

    my_html = '<tr>' +
        '<th> ID </th>' +
        '<th> Name </th>' +
        '<th> Coordinates </th>' +
        '<th> Creation Date </th>' +
        '<th> Annual Turnover </th>' +
        '<th> Type </th>' +
        '<th> Official Address </th>' +
        '</tr>';


    for (let i = 0; i < elements.length; i++) {
        my_html += '<tr> ' + '<td> ' + id[i].textContent + ' </td> <td>' + name[i].textContent + ' </td> <td>' + coordinatex[i].textContent + ','
            + coordinatey[i].textContent + ' </td> <td>' + creationdate[i].textContent + ' </td> <td>' + annualturnover[i].textContent
            + ' </td> <td>' + type[i].textContent + ' </td> <td>' + town[i].textContent + ',' + street[i].textContent + '</td>' + '</tr>';
        //+ ',' + locationx[i].textContent
        //+ ',' + locationy[i].textContent + '</td>' + '</tr>';
    }


    table.innerHTML = my_html;


}


function manage(param) {
    let url = "http://localhost:8081/organizations";
    if (param === 'sortname') {
        url = "http://localhost:8081/sort/name";
    } else if (param === 'sortturnover') {
        url = "http://localhost:8081/sort/annualturnover";
    } else if (param === 'sorttype') {
        url = "http://localhost:8081/sort/organizationtype";
    } else {
    url = "http://localhost:8081/organizations";
    }


    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);


    let xmldata = xmlhttp.responseXML;
    let elements = xmldata.getElementsByTagName('element');
    let id = xmldata.getElementsByTagName('id');
    let name = xmldata.getElementsByTagName('name');
    let coordinatex = xmldata.getElementsByTagName('coordinatex');
    let coordinatey = xmldata.getElementsByTagName('coordinatey');
    let creationdate = xmldata.getElementsByTagName('creationdate');
    let annualturnover = xmldata.getElementsByTagName('annualturnover');
    let type = xmldata.getElementsByTagName('type');
    let street = xmldata.getElementsByTagName('street');
    let town = xmldata.getElementsByTagName('town');
//let locationx = xmldata.getElementsByTagName('coordinatex');
//let locationy = xmldata.getElementsByTagName('coordinatey');


//let idstr = id[0].textContent;
//let namestr = name[0].textContent;

//let elem = elements[0].textContent;

    const table = document.getElementById('maintable');
    let my_html = '';

    my_html = '<tr>' +
        '<th> ID </th>' +
        '<th> Name </th>' +
        '<th> Coordinates </th>' +
        '<th> Creation Date </th>' +
        '<th> Annual Turnover </th>' +
        '<th> Type </th>' +
        '<th> Official Address </th>' +
    '</tr>';


    for (let i = 0; i < elements.length; i++) {
        my_html += '<tr> ' + '<td> ' + id[i].textContent + ' </td> <td>' + name[i].textContent + ' </td> <td>' + coordinatex[i].textContent + ','
            + coordinatey[i].textContent + ' </td> <td>' + creationdate[i].textContent + ' </td> <td>' + annualturnover[i].textContent
            + ' </td> <td>' + type[i].textContent + ' </td> <td>' + town[i].textContent + ',' + street[i].textContent + '</td>' + '</tr>';
        //+ ',' + locationx[i].textContent
        //+ ',' + locationy[i].textContent + '</td>' + '</tr>';
    }
//my_html += '<tr> ' + '<td> 1 </td> <td> Gazprom </td> <td> 1, 1 </td> <td> 1991 </td> <td> 5B dollars </td>' +
    //'<td> Public </td> <td> SPb </td>' + '</tr>';


    table.innerHTML = my_html;





//let strdata = xmlhttp.responseText;
//strdata.replace('<id>', '');
//strdata.replace('</id>', '.');
//strdata.replace('<content>', '');
//strdata.replace('</content>', '');
//let elements = strdata.split('.');



    /*for(let i = 0;i < json.length;i++){
        my_html += '<a href="' + json[i].html_url + '\">';
        my_html += '<p>'+  json[i].name + '</p>'
        my_html += '</a>'
    }
     */
}

function filterIt() {
    let filterUrl = 'http://localhost:8081/filter'
    let filterByNameG = document.getElementById("filternameG");
    let filterByNameGE = document.getElementById("filternameGE");
    let filterByNameL = document.getElementById("filternameL");
    let filterByNameLE = document.getElementById("filternameLE");
    let filterByNameE = document.getElementById("filternameE");

    let filterByCoordinatexG = document.getElementById("filtercoordinatexG");
    let filterByCoordinatexGE = document.getElementById("filtercoordinatexGE");
    let filterByCoordinatexL = document.getElementById("filtercoordinatexL");
    let filterByCoordinatexLE = document.getElementById("filtercoordinatexLE");
    let filterByCoordinatexE = document.getElementById("filtercoordinatexE");

    let filteringQuery = '';
    if (filterByNameG.value) {
        filteringQuery += '/name&g&' + filterByNameG.value
    }
    if (filterByNameGE.value) {
        filteringQuery += '/name&ge&' + filterByNameGE.value
    }
    if (filterByNameL.value) {
        filteringQuery += '/name&l&' + filterByNameL.value
    }
    if (filterByNameLE.value) {
        filteringQuery += '/name&le&' + filterByNameLE.value
    }
    if (filterByNameE.value) {
        filteringQuery += '/name&e&' + filterByNameE.value
    }

    if (filterByCoordinatexG.value) {
        filteringQuery += '/coordinatex&g&' + filterByCoordinatexG.value
    }
    if (filterByCoordinatexGE.value) {
        filteringQuery += '/coordinatex&ge&' + filterByCoordinatexGE.value
    }
    if (filterByCoordinatexL.value) {
        filteringQuery += '/coordinatex&l&' + filterByCoordinatexL.value
    }
    if (filterByCoordinatexLE.value) {
        filteringQuery += '/coordinatex&le&' + filterByCoordinatexLE.value
    }
    if (filterByCoordinatexE.value) {
        filteringQuery += '/coordinatex&e&' + filterByCoordinatexE.value
    }


    filterUrl += filteringQuery

    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", filterUrl, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);


    let xmldata = xmlhttp.responseXML;
    let elements = xmldata.getElementsByTagName('element');
    let id = xmldata.getElementsByTagName('id');
    let name = xmldata.getElementsByTagName('name');
    let coordinatex = xmldata.getElementsByTagName('coordinatex');
    let coordinatey = xmldata.getElementsByTagName('coordinatey');
    let creationdate = xmldata.getElementsByTagName('creationdate');
    let annualturnover = xmldata.getElementsByTagName('annualturnover');
    let type = xmldata.getElementsByTagName('type');
    let street = xmldata.getElementsByTagName('street');
    let town = xmldata.getElementsByTagName('town');

    const table = document.getElementById('maintable');
    let my_html = '';

    my_html = '<tr>' +
        '<th> ID </th>' +
        '<th> Name </th>' +
        '<th> Coordinates </th>' +
        '<th> Creation Date </th>' +
        '<th> Annual Turnover </th>' +
        '<th> Type </th>' +
        '<th> Official Address </th>' +
        '</tr>';


    for (let i = 0; i < elements.length; i++) {
        my_html += '<tr> ' + '<td> ' + id[i].textContent + ' </td> <td>' + name[i].textContent + ' </td> <td>' + coordinatex[i].textContent + ','
            + coordinatey[i].textContent + ' </td> <td>' + creationdate[i].textContent + ' </td> <td>' + annualturnover[i].textContent
            + ' </td> <td>' + type[i].textContent + ' </td> <td>' + town[i].textContent + ',' + street[i].textContent + '</td>' + '</tr>';
        //+ ',' + locationx[i].textContent
        //+ ',' + locationy[i].textContent + '</td>' + '</tr>';
    }


    table.innerHTML = my_html;


}

