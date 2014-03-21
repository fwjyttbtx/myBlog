jQuery(function($){
    //登陆时加载首页
    $(document).ready(function(){
        var verticalLine = $(".vertical-line");
        var height = $(".row-fluid").height();
        verticalLine.css("height", height);

        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    });
});

var disqus_shortname = 'entize';