var settings = {
    "url": "http://localhost:8081/add",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);
    let XMLresp = response.responseXML;
    alert(XMLresp);
});