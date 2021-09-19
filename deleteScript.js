function deleteElement() {
    let url = "http://localhost:8081/organizations/";
    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    const objToDelete = document.getElementById('')

    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);

    const table = document.getElementById('maintable');
    let my_html = '';

    


    table.innerHTML += my_html;
}

