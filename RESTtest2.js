$.ajax({

    url : 'http://localhost:8081/add',
    type : 'GET',
    data : {
        //'numberOfWords' : 10
    },
    dataType:'json',
    success : function(data) {
        alert('Data: '+data);
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});