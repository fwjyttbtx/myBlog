jQuery(function($){
    $("#publish").click(function(e){
        e.preventDefault();
        var data = {};
        data.title = $("#title").val();
        data.content = $("#editor").html();
        $.ajax({
            url: '/blog/publish',
            type: 'POST',
            data: data,
            success: function(data){
                window.location.href = '/blog/show/' + data.id;
            }
        })
    });

});
