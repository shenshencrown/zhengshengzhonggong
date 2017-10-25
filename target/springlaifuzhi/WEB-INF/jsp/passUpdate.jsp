<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\25 0025
  Time: 17:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="Keywords" content="真彩网络,真彩企业网站管理系统">
    <meta name="Description" content="真彩网站管理系统,企业网站管理系统,公司网站管理系统">
    <title>修改密码</title>
    <link rel="stylesheet" href="/css/CssAdmin.css">
    <script language="javascript" src="/js/Admin.js"></script>
</head>

<body marginwidth="16" marginheight="16">

<table width="100%" border="0" cellpadding="3" cellspacing="1" bgcolor="#6298E1">
    <tr>
        <td height="24" nowrap=""><font color="#FFFFFF"><img src="/images/Explain.gif" width="18" height="18" border="0" align="absmiddle">&nbsp;<strong>系统管理：添加，修改站点的相关信息</strong></font></td>
    </tr>
    <tr>
        <td height="24" align="center" nowrap="" bgcolor="#EBF2F9"><a href="PassUpdate.html" target="mainFrame" onclick="changeAdminFlag(&quot;修改密码&quot;)">修改密码</a> <font color="#0000FF">&nbsp;|&nbsp;</font> <a href="http://www.zhengshengchina.com/zs-admin/SetSite.asp" target="mainFrame" onclick="changeAdminFlag(&quot;网站信息设置&quot;)">网站信息设置</a><font color="#0000FF">&nbsp;|</font><font color="#0000FF">&nbsp;</font><font color="#0000FF">&nbsp;</font><a href="http://www.zhengshengchina.com/zs-admin/HackSql.asp" target="mainFrame" onclick="changeAdminFlag(&quot;阻止SQL注入记录&quot;)">阻止SQL注入记录</a> </td>
    </tr>
</table>
<br>
<table width="100%" border="0" cellpadding="3" cellspacing="1" bgcolor="#6298E1">
    <form name="editForm" method="post" action="/admin/updatePass">
    <tr>
        <td height="24" nowrap="" bgcolor="#EBF2F9">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" id="editProduct" idth="100%">

            <tr>
                <td width="220" height="20" align="right">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td height="20" align="right">登&nbsp;录&nbsp;名：</td>
                <td><input name="AdminName" type="text" class="textfield" id="AdminName" style="WIDTH: 120;" value="admin" maxlength="16" readonly="">&nbsp;3-10位字符，不可修改</td>
            </tr>
            <tr>
                <td height="20" align="right">新&nbsp;密&nbsp;码：</td>
                <td><input name="NewPassword" type="password" class="textfield" id="NewPassword" maxlength="20" style="WIDTH: 120;">&nbsp;*&nbsp;注意字母大小写</td>
            </tr>
            <tr>
                <td height="20" align="right">确认密码：</td>
                <td><input name="vNewPassword" type="password" class="textfield" id="vNewPassword" maxlength="20" style="WIDTH: 120;">&nbsp;*</td>
            </tr>

            <tr>
                <td height="30" align="right">&nbsp;</td>
                <td valign="bottom"><input name="submitSaveEdit" type="submit" class="button" id="submitSaveEdit" value="保存" style="WIDTH:60;"></td>
            </tr>
            <tr>
                <td height="20" align="right">&nbsp;</td>
                <td valign="bottom">&nbsp;</td>
            </tr>
            </table>
        </td>
    </tr>
    </form>
</table>
</body>
</html>