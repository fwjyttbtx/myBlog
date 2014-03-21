#基于NodeJs的个人博客
使用到的技术有NodeJs Jade Express MySql Bootstrap等


###笔记
1.设计主页面.<br/>
&nbsp;&nbsp;主页面按照主流的个人博客拥有的选卡设计.页面布局使用bootstrap.不采用frameset的页面内布局方式.<br/>
&nbsp;&nbsp;采用的是左侧div中列表点击右侧响应ajax请求更换页面的方式布局.<br/>
&nbsp;&nbsp;单独写一个只用来发送ajax的js文件,在这个文件中处理的是页面的点击响应时间对应的ajax路径请求<br/>
2.个人页面<br/>
&nbsp;&nbsp;写一个个人的路由如/admin/xxx这样的形式来获得特别的主页此主页可以来写博客发表<br/>
&nbsp;&nbsp;而普通的路由只有进入博客观看博文的权限<br/>
&nbsp;&nbsp;先这样设计,之后再考虑更佳的解决方法<br/>
3.写博客<br/>
&nbsp;&nbsp;写博客需要集成一个富文本的编辑器,采用bootstrap-wysiwyg.js来完成富文本的编辑器,<br/>
&nbsp;&nbsp;改造其中的图片插入,配合jquery-file-upload插件来做图片的上传,图片上传之后存于服务器中<br/>
4.上传文章<br/>
&nbsp;&nbsp;增加文章上传到mysql的支持.<br/>
5.显示文章<br/>
&nbsp;&nbsp;写完文章之后通过文章的id跳转到文章视图<br/>
6.修改编辑器<br/>
&nbsp;&nbsp;不采用bootstrap的wysiwyg作为富文本的编辑器了,改用kindeditor<br/>
7.本地上传组件失效<br/>
&nbsp;&nbsp;由于前端没有用upload组件,所以后台也无法正确解析和返回数据,思考解决办法