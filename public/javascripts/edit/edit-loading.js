$(document).ready(function () {
    'use strict'
    var editor;
    KindEditor.ready(function(K){
        editor = K.create('textarea[name="content"]', {
            resizeType : 1,
            allowPreviewEmoticons : false,
            allowImageUpload : true,
            url:'/upload/location',
            items : [
                'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                'insertunorderedlist', '|', 'emoticons', 'image', 'link', '|', 'source', 'code']
        });
    });

    var tags = $('#tags-input');

    tags.change(function(){
        var tagsVal = tags.val();
        var tagsArr = tagsVal.split(";");
        if(tagsVal.lastIndexOf(';') == (tagsVal.length - 1)){
            tagsArr.pop();
        }

        var tagContent = $('.tag-content');
        var html = '';
        for(var i = 0; i < tagsArr.length; i++){
            html += '<span class="every-tag">' + tagsArr[i] + '</span>';
        }
        if(tags){
            tags.removeAttr('placeholder');
            tags.val('');
        }
        tagContent.html(html);
        var left = tagContent.width();
        tags.css('padding-left', left);

    });
    tags.keydown(function(e){
        var tagContent = $('.tag-content');
        if(e.keyCode == 8){
            tagContent.find('span:last').remove();
            var left = tagContent.width();
            tags.css('padding-left', left);
            if(tagContent.find('span').length == 0){
                tags.css('padding-left', '4px');
                tags.attr('placeholder', '请在此输入标签，多个标签以英文‘;’隔开');
            }
        }
    });

});

