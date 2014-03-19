$(document).ready(function () {
    'use strict'
    function initToolbarBootstrapBindings() {
        var fonts = ['宋体', '微软雅黑', 'Arial', 'Arial Black', 'Courier New', 'Times New Roman'],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
        $.each(fonts, function (idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' +
                fontName + '" style="font-family:\'' + fontName + '\'">' +
                fontName + '</a></li>'));
        });
        $('a[title]').tooltip({
            container: 'body'
        });
        $('.dropdown-menu input').click(function () {
            return false;
        }).change(function () {
                $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
            }).keydown('esc', function () {
                this.value = '';
                $(this).change();
            });

        $('[data-role=magic-overlay]').each(function () {
            var overlay = $(this), target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
        });
    };
    function showErrorAlert(reason, detail) {
        var msg = '';
        if (reason === 'unsupported-file-type') {
            msg = "Unsupported format " + detail;
        } else {
            console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" ' +
            'class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>')
            .prependTo('#alerts');
    };
    initToolbarBootstrapBindings();
    $('#editor').wysiwyg({
        fileUploadError: showErrorAlert
    });
    window.prettyPrint && prettyPrint();


    $('#fileupload').fileupload({
        dataType : 'json',
        url : '/upload/location',
        autoUpload : true,
        sequentialUploads : true,
        acceptFileTypes : /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 2000000,//2MB
        previewMaxWidth: 120,
        previewMaxHeight: 80,
        previewCrop: true,
        process : [{
            action : 'load',
            fileTypes : /^image\/(gif|jpeg|png)$/,
            maxFileSize : 2000000 // 2MB
        }, {
            action : 'resize',
            maxWidth : 1200,
            maxHeight : 800
        }, {
            action : 'save'
        }],
        dropZone : $('#myModal'),
        progressall : function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            //$('#gallery_progress .bar').css('width', progress + '%');
        },
        filesContainer : $('#files'),
        uploadTemplate : function(o) {
            var rows = $();
            $.each(o.files, function(index, file) {
                var row = $('<div class="template-upload">' +
                    '<div class="preview"></div>' +
                    '<span class="cancel"><button class="btn btn-danger" type="button">Delete</button></span>' +
                    '<span class="name"></span>' +
                    '<span class="size"></span>' +
                    '</div>');
                row.find('.name').text(file.name);
                row.find('.size').text(o.formatFileSize(file.size));
                if (file.error) {
                    row.find('.error').text(file.error || 'File upload error');
                }
                rows = rows.add(row);
            });
            return rows;
        },
        downloadTemplate : function(o) {
            var rows = $();
            $.each(o.files, function(index, file) {
                var row = $('<div class="template-download">' +
                    (file.error ? '<span class="name"></span>' +
                        '<span class="error text-error"></span>' :
                        '<div class="preview"></div>' +
                            '<span class="name"><a></a></span>' +
                            '<span class="size"></span>') +
                    '<span class="delete"><button class="btn btn-danger" type="button">Delete</button></span>'+
                    '<span class="insert"><button class="btn btn-success" type="button">Insert</button></span>'+
                    '</div>');
                row.find('.size').text(o.formatFileSize(file.size));
                if (file.error) {
                    row.find('.name').text(file.name);
                    row.find('.error').text(file.error || 'File upload error');
                } else {
                    row.find('.name a').text(file.name);
                    if (file.url) {
                        row.find('.preview').append('<a><img></a>').find('img').prop('src', file.url).css({width: '120px', height: '80px'});
                        row.find('a').prop('rel', 'gallery');
                        row.find('a').prop('target', '_blank');
                    }
                    row.find('a').prop('href', file.url);
                    row.find('.delete').attr('data-type', file.delete_type).attr('data-url', file.deleteUrl);
                    row.find('.insert').attr('data-dismiss', 'modal').attr('data-url', file.url);
                    // add file data input
                    row.append('<input type="hidden" name="galleryImage[]">').find('input[name="galleryImage[]"]').val(file.name);
                    row.find('img').data('fileinfo', file);
                }
                rows = rows.add(row);
            });
            return rows;
        }
    });

});

