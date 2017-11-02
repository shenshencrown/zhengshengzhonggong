<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\25 0025
  Time: 1:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="Author" content="真彩网络技术工作室">
    <meta name="Keywords" content="">
    <meta name="Description" content="">
    <title>管理员登录</title>
    <script language="javascript" src="/js/Admin.js"></script>
    <script language="javascript">
        function refreshimg() {
            document.all.checkcode.src = "/validate/getPic";
        }

        function UpVerifyCode() {
            document.getElementById("checkcode").src = "/validate/getPic";
        }

    </script>


    <script type="text/javascript" charset="utf-8" src="/js/gwdang-notifier-bdext.js"></script>
</head>

<body style="margin-top:100px;font-size:12px;">
<div style="width:530px; height:150px; margin:0 auto; background:#23961A;">
    <span style="width:530px; height:150px; float:left; position:relative;">
        <span style="position:absolute; z-index:99;"><img src="/images/Login_Top.jpg" width="530" height="150"></span>
        <span style="position:absolute; z-index:120; font-size:24px; font-weight:bold; top:30px; right:48px; color:#fff;">2017</span>
    </span>
</div>
<div align="center">
    <table width="530" height="100" border="0" cellpadding="0" cellspacing="0"
           background="/images/Login_Bottom.jpg">
        <form action="/admin/validateLogin" method="post" name="AdminLogin"
              id="AdminLogin" onsubmit="return CheckAdminLogin()">
        <tr>
            <td width="70" height="46" rowspan="2">&nbsp;</td>
            <td width="132" rowspan="2" valign="bottom">
                <input name="LoginName" type="text" id="LoginName" maxlength="12"
                       style="width:94px; BORDER-RIGHT: #F7F7F7 0px solid; BORDER-TOP: #F7F7F7 0px solid; FONT-SIZE: 9pt; BORDER-LEFT: #F7F7F7 0px solid; BORDER-BOTTOM: #c0c0c0 1px solid; HEIGHT: 16px; BACKGROUND-COLOR: #F7F7F7"
                       onmouseover="this.style.background=&#39;#ffffff&#39;"
                       onmouseout="this.style.background=&#39;#F7F7F7&#39;" onfocus="this.select();"></td>
            <td width="131" rowspan="2" valign="bottom">
                <input name="LoginPassword" type="password" id="LoginPassword" maxlength="12"
                       style="width:94px; BORDER-RIGHT: #F7F7F7 0px solid; BORDER-TOP: #F7F7F7 0px solid; FONT-SIZE: 9pt; BORDER-LEFT: #F7F7F7 0px solid; BORDER-BOTTOM: #c0c0c0 1px solid; HEIGHT: 16px; BACKGROUND-COLOR: #F7F7F7"
                       onmouseover="this.style.background=&#39;#ffffff&#39;"
                       onmouseout="this.style.background=&#39;#F7F7F7&#39;" onfocus="this.select();"></td>
            <td width="60" rowspan="2" valign="bottom">
                <input name="CheckCode" size="6" maxlength="6"
                       style="width:50px; border-right: #f7f7f7 0px solid; border-top: #f7f7f7 0px solid; font-size: 9pt; border-left: #f7f7f7 0px solid; border-bottom: #c0c0c0 1px solid; height: 16px; background-color: #f7f7f7; ime-mode:disabled;"
                       onmouseover="this.style.background=&#39;#ffffff&#39;"
                       onmouseout="this.style.background=&#39;#f7f7f7&#39;" onfocus="this.select();"></td>
            <td width="62" height="25" valign="bottom"><a href="javascript:refreshimg()" title="看不清楚，换个图片。"><img
                    src="/validate/getPic" name="checkcode" id="checkcode" style="border: 1px solid #ffffff"
                    onclick="UpVerifyCode();"></a></td>
            <td width="75" valign="bottom"><input name="submitLogin" type="image" src="/images/Login_Submit.jpg" width="40" height="34"></td>
        </tr>

        <tr>
            <td height="1" valign="bottom"></td>
            <td width="75" valign="bottom"></td>
        </tr>
        <tr>
            <td height="54" colspan="6">&nbsp;</td>
        </tr>
        </form>
    </table>
</div>
<div class="_bd_ext_tip" style="visibility: hidden;"><span class="_bd_ext_search">百度一下</span><span class="_bd_ext_open">打开链接</span>
    <span class="_bd_ext_copy">复制</span>
</div>
</body>
</html>