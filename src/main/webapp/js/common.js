// что бы форма (если она была отправлена ранее) не отправлялась каждый раз при перезагрузки страницы
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

/*
$(document).ready(function(){
    $.ajax({
        url:'records',
        type: 'GET',
        dataType: "text",
        success: function(response) {

            updateRecordsList(response)

        }
    });

    $( "#USER_NAME" ).on('input', function() {
      if($(this).val().length == 0){
        $(this).addClass("input--error");
      }else{
        $(this).removeClass("input--error");
      }
    });

    $( "#USER_REVIEW" ).on('input', function() {
      if($(this).val().length == 0){
        $(this).addClass("textarea--error");
      }else{
        $(this).removeClass("textarea--error");
      }
    });


    $('#review-send-btn').on('click',function() {
        $(".btn-response").html("")

        // validate inputs

        var errors = false

        if($('#USER_NAME').val().length == 0){
            $('#USER_NAME').addClass("input--error");
            errors = true
        }

        if($('#USER_REVIEW').val().length == 0){
            $('#USER_REVIEW').addClass("textarea--error");
            errors = true
        }

        if(errors){
            $(".btn-response").html("Пожалуйста заполните все поля")
            return
        }

        // send data

        $.ajax({
            url:'records',
            data: {
                "USER_NAME": $("#USER_NAME").val(),
                "USER_REVIEW": $("#USER_REVIEW").val()
            },
            type: 'POST',
            dataType: "text",
            success: function(response) {
                updateRecordsList(response)

                $("#USER_NAME").val("")
                $("#USER_REVIEW").val("")

                $(".btn-response").html("Запись успешно размещена")
            }
        });
    });

    function updateRecordsList(response){
        $(".guestbook__list").html("")

        var responseJSON = JSON.parse(response)
        responseJSON.forEach(record => {
            $(".guestbook__list").append(`
                <div class="record">
                    <div class="record__name">
                        ` + record.name + `
                    </div>
                    <div class="record__review">
                        ` + record.review + `
                    </div>
                </div>
            `);
        })
    }
})
*/

