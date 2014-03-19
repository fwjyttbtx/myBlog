jQuery(function($){
    var writeLog = $('.write-log');

    $("#publish").click(function(e){
        e.preventDefault();
        var data = {};
        data.title = $("#title").val();
        data.content = $("#editor").html();
        $.ajax({
            url: '/blog/publish',
            type: 'POST',
            data: data,
            success: function(mes){
                alert("data store " + mes);
            }
        })
    });

});
