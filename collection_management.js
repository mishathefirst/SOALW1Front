let url = "http://localhost:8081/organizations";
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
let locationx = xmldata.getElementsByTagName('locationx');
let locationy = xmldata.getElementsByTagName('locationy');
//let idstr = id[0].textContent;
//let namestr = name[0].textContent;

//let elem = elements[0].textContent;

const table = document.getElementById('maintable');
let my_html = '';

for (let i = 0; i < elements.length; i++) {
    my_html += '<tr> ' + '<td> ' + id[i].textContent + ' </td> <td>' + name[i].textContent + ' </td> <td>' + coordinatex[i].textContent + ','
        + coordinatey[i].textContent + ' </td> <td>' + creationdate[i].textContent + ' </td> <td>' + annualturnover[i].textContent
        + ' </td> <td>' + type[i].textContent + ' </td> <td>' + town[i].textContent + ',' + street[i].textContent + ',' + locationx[i].textContent
        + ',' + locationy[i].textContent + '</td>' + '</tr>';
}
//my_html += '<tr> ' + '<td> 1 </td> <td> Gazprom </td> <td> 1, 1 </td> <td> 1991 </td> <td> 5B dollars </td>' +
    //'<td> Public </td> <td> SPb </td>' + '</tr>';


table.innerHTML += my_html;










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