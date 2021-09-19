$.ajax({
    url: "http://localhost:8081/add",
    type: 'GET',
    success: function(res) {
        console.log(res);
        alert(res);
    },
    error: function(res) {
       alert(res);
    }
});