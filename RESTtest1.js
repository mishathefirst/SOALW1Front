let url = "http://localhost:8081/add/some";
let reqstr = "Some info goes here."
let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", url, false);
xmlhttp.setRequestHeader("Content-Type", "text/plain");
xmlhttp.send(reqstr);


let strdata = xmlhttp.responseText;
    //.getElementsByTagName("data").item(0).innerText;
    //.getElementById("content");
//let strdata = xmlhttp.responseXML.getElementById("content");
alert(strdata);
document.getElementById("content-field").innerHTML = xmlhttp.responseText;
if (xmlhttp.status === 200)
    alert("The request succeeded!\n\nThe response representation was:\n\n" + xmlhttp.responseXML)
else
    alert("The request did not succeed!\n\nThe response status was: " + xmlhttp.status + " " + xmlhttp.statusText + ".");