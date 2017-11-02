<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\24 0024
  Time: 23:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="/js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript">
        function getTime() {
            var date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.date = date.getDate();
            this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
            this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            var currentTime = "现在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day;
            $("#DateTime").html(currentTime);
        };
        setInterval(getTime,1000);
    </script>
</head>
<body marginwidth="16" marginheight="3">
<table name="Trans" id="Trans" width="100%" height="24" border="0" cellpadding="0" cellspacing="0"
       style="BORDER-BOTTOM: #333333 1px solid;font-family:宋体;font-size:12px;color: #333333;">
    <tbody>
    <tr>
        <td width="240" nowrap="">&nbsp;</td>
        <td width="200" nowrap="">管理员：admin[超级管理员]</td>
        <td width="36" nowrap="">位置：</td>
        <td width="120" nowrap="">后台管理首页</td>
        <td align="right" nowrap="" id="DateTime">2017/10/22 下午6:24:26 星期日</td>
    </tr>
    </tbody>
</table>
</body>
</html>
