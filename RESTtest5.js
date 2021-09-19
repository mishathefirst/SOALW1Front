var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    mode: 'no-cors'
};

fetch("http://localhost:8081/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));