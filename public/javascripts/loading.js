jQuery(function($){
    //登陆时加载首页
    $(document).ready(function(){
        var verticalLine = $(".vertical-line");
        var height = $(".row-fluid").height();
        verticalLine.css("height", height);
    });
});

