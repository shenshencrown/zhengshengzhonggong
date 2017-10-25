<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\24 0024
  Time: 17:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="Keywords" content="真彩网络,真彩企业网站管理系统">
    <meta name="Description" content="真彩网站管理系统,企业网站管理系统,公司网站管理系统">
    <title>真彩网络企业网站管理系统后台</title>
    <link rel="stylesheet" href="/css/CssAdmin.css">
    <link href="/css/Admin_left.css" rel="stylesheet" type="text/css">
    <script language="JavaScript">
        function switchSysBar()
        {
            if (switchPoint.innerText==3)
            {
                switchPoint.innerText=4
                document.all("frameTitle").style.display="none"
            }
            else
            {
                switchPoint.innerText=3
                document.all("frameTitle").style.display=""
            }
        }
    </script>
    <script type="text/javascript" charset="utf-8" src="/js/gwdang-notifier-bdext.js"></script></head>

<body scroll="no" topmargin="0" bottom="0" leftmargin="0" rightmargin="0">
<table height="100%" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tbody><tr>
        <td colspan="3">
            <iframe style="Z-INDEX:1; VISIBILITY:inherit; WIDTH:100%; HEIGHT:64px" name="topFrame" id="topFrame" marginwidth="0" marginheight="0" src="/main/top" frameborder="0" noresize="" scrolling="no">	</iframe>	</td>
    </tr>
    <tr>
        <td width="170" height="100%" rowspan="2" align="middle" bgcolor="#367BDA" id="frameTitle">
            <iframe style="Z-INDEX:2; VISIBILITY:inherit; WIDTH:200px; HEIGHT:100%" name="leftFrame" id="leftFrame" marginwidth="0" marginheight="0" src="/main/left" frameborder="0" noresize="" scrolling="yes">
            </iframe>
        </td>
        <td width="10" height="100%" rowspan="2" align="center" bgcolor="#367BDA" onclick="switchSysBar()">
            <font style="FONT-SIZE: 10px; CURSOR: hand; COLOR: #ffffff; FONT-FAMILY: Webdings">
                <span id="switchPoint">3</span>
            </font>
        </td>
        <td height="30">
            <iframe style="Z-INDEX:3; VISIBILITY:inherit; WIDTH:100%; HEIGHT:30" name="headFrame" id="mainFrame" marginwidth="16" marginheight="3" src="/main/head" frameborder="0" scrolling="no">
            </iframe>
        </td>
    </tr>
    <tr>
        <td height="100%">
            <iframe style="Z-INDEX:4; VISIBILITY:inherit; WIDTH:100%; HEIGHT:100%" name="mainFrame" id="mainFrame" marginwidth="16" marginheight="16" src="/main/view" frameborder="0" noresize="" scrolling="yes">
            </iframe>
        </td>
    </tr>
    </tbody></table>

<div class="_bd_ext_tip" style="visibility: hidden;"><span class="_bd_ext_search">百度一下</span><span class="_bd_ext_open">打开链接</span><span class="_bd_ext_copy">复制</span></div></body>
</html>