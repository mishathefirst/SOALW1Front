fetch('http://localhost:8081/add', { mode: 'no-cors'})
    .then(function(response) {
        return response.text()
    }).then(function(json) {
    console.log('parsed json', json)
}).catch(function(ex) {
    console.log('parsing failed', ex)
})