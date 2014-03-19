/**
 * Created by Administrator on 14-3-17.
 */
var upload = require('jquery-file-upload-middleware');

//提供对外的接口
module.exports = function (app) {
    //上传代码
    app.use('/upload/location', upload.fileHandler({
        uploadDir: __dirname + '/../public/uploads/location',
        uploadUrl: '/../uploads/location'
        //imageVersions: resizeConf.location
    }));
    // 监听文件上传成功的代码
    upload.on('end', function (fileInfo) {
        // insert file info
        console.log("files upload complete");
        console.log(fileInfo);
    });
    //删除文件的监听
    upload.on('delete', function (fileName) {
        // remove file info
        console.log("files remove complete");
        console.log(fileName);
    });
    //出错监听
    upload.on('error', function (e) {
        console.log(e.message);
    });
}
