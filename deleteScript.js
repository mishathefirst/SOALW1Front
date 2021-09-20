function deleteElement() {
    let url = "http://localhost:8081/organizations/";
    let reqstr = "Some info goes here."
    let xmlhttp = new XMLHttpRequest();

    let objToDelete = document.getElementById('orgNumber').value;
    url += objToDelete;

    xmlhttp.open("DELETE", url, false);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(reqstr);

    //TODO: implement an answering message for deleting
    //const table = document.getElementById('mainmodule');
    //let my_html = '';
    //table.innerHTML += my_html;
}

