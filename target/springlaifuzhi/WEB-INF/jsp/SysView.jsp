<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\24 0024
  Time: 23:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
        .back_southidc {
            /*BACKGROUND-IMAGE: url('/images/titlebg.gif');*/
            COLOR: #000000;
        }
        .table_southidc {
            BACKGROUND-COLOR: #A4B6D7;
        }
        .td_southidc {
            BACKGROUND-COLOR: #F2F8FF;
        }
        .tr_southidc {
            BACKGROUND-COLOR: #ECF5FF;
        }
        .t1 {
            font: 12px 宋体;
            color: #000000
        }
        .t2 {
            font: 12px 宋体;
            color: #ffffff
        }
        .t3 {
            font: 12px 宋体;
            color: #ffff00
        }
        .t4 {
            font: 12px 宋体;
            color: #800000
        }
        .t5 {
            font: 12px 宋体;
            color: #191970
        }
        .weiqun:hover {
            Font-unline: yes;
            font-family: "宋体";
            color: #FFFFFF;
            text-decoration: underline;
            background-color: #CCCCCC;
        }
        td {
            font-size: 12px;
        }
        a:link {
            color: #000000;
            text-decoration: none;
        }
        a:active {
            color: #000000;
            text-decoration: none;
        }
        a:visited {
            color: #000000;
            text-decoration: none;
        }
        .tit {
            font-size: 14px;
        }
    </style>
    <script type="text/javascript" src="/js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript">
        Date.prototype.Format=function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "H+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        function getTime() {
            var myDate=new Date().Format("yyyy-MM-dd HH:mm:ss");
//            var date=myDate.toLocaleDateString();
//            var hours=myDate.getHours();
//            var minutes=myDate.getMinutes();
//            var seconds=myDate.getSeconds();
            $("#showDate").html(myDate);
            console.log("123");
        };
        setInterval(getTime,1000);
    </script>
</head>
<body marginwidth="16" marginheight="16">
<table cellpadding="2" cellspacing="1" border="0" width="95%" align="center" class="table_southidc">
    <tbody>
    <tr>
        <td class="back_southidc" colspan="2" height="25" align="center"><b>管理快捷方式</b></td>
    </tr>
    <tr class="tr_southidc">
        <td width="20%" height="23">快捷功能链接</td>
        <td width="80%" height="23"><a href="http://www.zhengshengchina.com/zs-admin/Help.asp"><font color="000000">
            　</font></a><a href="/main/passUpdate"><font color="000000">管理员管理</font></a></td>
    </tr>
    </tbody>
</table>
<br>
<br>
<table cellpadding="2" cellspacing="1" border="0" width="95%" align="center" class="table_southidc">
    <tbody>
    <tr>
        <td class="back_southidc" colspan="2" height="25" align="center"><b>系统信息</b></td>
    </tr>
    <tr class="tr_southidc">
        <td width="48%" height="23">用户名：<font class="t4"> admin</font></td>
        <td width="52%">登录IP：<font class="t4"> ${ipAddress}</font></td>
    </tr>
    <tr class="tr_southidc">
        <td width="48%" height="23">身份过期：<font class="t4">1440 分钟</font></td>
        <td width="52%">现在时间：<font class="t4" id="showDate"> 2017年10月22日18:21</font></td>
    </tr>
    <tr class="tr_southidc">
        <td width="48%" height="23">IP： <font class="t4">112.28.173.56</font></td>
        <td width="52%">上线时间：<font class="t4">${logintime} </font></td>
    </tr>
    <tr class="tr_southidc">
        <td width="48%" height="23">服务器域名：<font class="t4"> www.zhengshengchina.com / www.zhengshengchina.com</font>
        </td>
        <td width="52%">脚本解释引擎：<font class="t4"> VBScript/5.8.18817</font></td>
    </tr>
    <tr class="tr_southidc">
        <td height="23">服务器软件的名称：<font class="t4"> Microsoft-IIS/7.5</font></td>
        <td>浏览器版本：<font class="t4"> Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)
            Chrome/47.0.2526.106 BIDUBrowser/8.7 Safari/537.36</font></td>
    </tr>
    <tr class="tr_southidc">
        <td height="23">FSO文本读写：
            <b>√</b>
        </td>
        <td>数据库使用：
            <b>√</b>
        </td>
    </tr>
    <tr class="tr_southidc">
        <td width="48%" height="23">Jmail组件支持：
            <b>√</b>
        </td>
        <td width="52%">CDONTS组件支持：
            <font color="red"><b>×</b></font>
        </td>
    </tr>
    </tbody>
</table>
<br>
<br>
<br>
<p>
</p>
</body>
</html>