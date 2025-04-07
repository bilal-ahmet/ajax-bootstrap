$(document).ready(function(){
    $('#ajax-form').on('submit', function(event){
        event.preventDefault(); // oluşturulan formun sayfayı yeniden başlatmasını engeller
        var inputData = $('#inputData').val(); // formdan veri alır

        $.ajax({
            url: '/ajax', // ajax isteği yapılacak url
            type: 'POST', // istek türü
            data: {data: inputData}, // gönderilecek veri
            success: function(response){ // istek başarılı olursa çalışacak fonksiyon
                $('#response').html('<p>' + response.message + '</p>'); // gelen cevabı gösterir
                console.log(response.message, response.data);
            },
            error: function(err) {
                $('#response').html('<p>Error: ' + err.statusText + '</p>');
                console.error(err);
            }
        });
    });
});