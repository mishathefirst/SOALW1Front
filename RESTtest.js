$(document).ready(function() {
    $.ajax({
        //url: "http://rest-service.guides.spring.io/greeting"
        url: 'http://localhost:8081/add'
    }).then(function(data) {
        alert('Data: '+ data + ' ' + data.id + ' ' + data.content);
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
    });
});