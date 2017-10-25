<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017\10\24 0024
  Time: 22:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>后台管理导航</title>
    <link rel="stylesheet" href="/css/CssAdmin.css">
    <script src="/js/prototype.js"></script>
    <script language="javascript" src="/js/Admin.js"></script>

    <style type="text/css">
        <!--
        .STYLE1 {color: #003EBD}
        -->
    </style>
</head>

<body background="/images/SysLeft_bg.gif" onmouseover="self.status=&#39;专业为本 服务为先!&#39;;return true" marginwidth="0" marginheight="0">
<table width="180" border="0" align="center" cellpadding="0" cellspacing="0">
    <tbody><tr>
        <td height="44" valign="top"><img src="/images/title.gif"></td>
    </tr>
    </tbody></table>
<table cellpadding="0" cellspacing="0" width="180" align="center">
    <tbody><tr>
        <td height="26" align="center" background="/images/title_bg_quit.gif" class="menu_title" id="menuTitle0" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;"><a target="_top" href="http://www.zhengshengchina.com/index.asp"><font color="215DC6"><strong>回到首页</strong></font></a> | <a target="_top" href="http://www.zhengshengchina.com/zs-admin/Loginout.asp"><font color="215DC6"><b>退出 </b></font></a></td>
    </tr>
    <tr>
        <td height="97" background="/images/title_bg_admin.gif" style="display:" id="submenu0"><div style="width:180">
            <table cellpadding="0" cellspacing="0" align="center" width="130">
                <tbody><tr>
                    <td height="25">用户名称：admin</td>
                </tr>
                <tr>
                    <td height="25">IP地址：112.28.173.56</td>
                </tr>
                </tbody></table>
        </div>
        </td>
    </tr>
    </tbody></table>
<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_09.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu9&#39;)" style="cursor:hand;"><span class="SystemLeft">系统管理</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu9"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="/main/passUpdate" target="mainFrame" onclick="changeAdminFlag(&quot;修改密码&quot;)">修改密码</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/SetSite.asp" target="mainFrame" onclick="changeAdminFlag(&quot;网站信息设置&quot;)">网站信息设置</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/Admin_SlideEdit.asp?flashtype=banner" target="mainFrame">首页幻灯片</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/Admin_SlideEdit.asp?flashtype=compic" target="mainFrame">首页四个图片</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/Admin_SlideEdit.asp?flashtype=compic2" target="mainFrame">公司荣誉</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/Admin_SlideEdit.asp?flashtype=other" target="mainFrame">其它图片管理</a></td>
                </tr>
                <tr style="display:none;">
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ServerList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;悬浮在线客服管理&quot;)">浮动在线客服</a></td>
                </tr>
                <tr>
                </tr><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/FriendLinkList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;友情链接列表&quot;)">友情链接</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/MessageList.asp" target="mainFrame">留言管理</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/SetKey.asp" target="mainFrame" onclick="changeAdminFlag(&quot;站内链接&quot;)">站内链接</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/HackSql.asp" target="mainFrame" onclick="changeAdminFlag(&quot;阻止SQL注入记录&quot;)">阻止SQL注入记录</a></td>
                </tr>
                </tbody></table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody><tr>
                        <td height="5"></td>
                    </tr>
                    </tbody></table>
            </div></td>
    </tr>
    </tbody>
</table>


<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_01.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu1&#39;)" style="cursor:hand;"><span class="SystemLeft">企业信息</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu1"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/AboutList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;企业信息列表&quot;)">企业信息列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/AboutEdit.asp?Result=Add" target="mainFrame" onclick="changeAdminFlag(&quot;添加企业信息&quot;)">添加企业信息</a></td>
                </tr>
                <tr style="display:none;">
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/Admin_SlideEdit.asp?flashtype=banner3" target="mainFrame" onclick="changeAdminFlag(&quot;企业荣誉&quot;)">企业荣誉</a></td>
                </tr>
                </tbody></table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody><tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody>
    <tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_01.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu99&#39;)" style="cursor:hand;"><span class="SystemLeft">联系方式</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu99"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ContactList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;联系方式列表&quot;)">联系方式列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ContactEdit.asp?Result=Add" target="mainFrame" onclick="changeAdminFlag(&quot;添加联系方式&quot;)">添加联系方式</a></td>
                </tr>
                </tbody>
            </table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody>
                    <tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody>
    <tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_02.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu2&#39;)" style="cursor:hand;"><span class="SystemLeft">新闻资讯</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu2"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/NewsSort.asp?Action=Add&amp;ParentID=0" target="mainFrame" onclick="changeAdminFlag(&quot;新闻类别&quot;)">新闻类别</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/NewsList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;新闻列表&quot;)">新闻列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/NewsEdit.asp?Result=Add" target="mainFrame" onclick="changeAdminFlag(&quot;添加新闻&quot;)">添加新闻</a></td>
                </tr>
                </tbody>
            </table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody>
                    <tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_03.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu3&#39;)" style="cursor:hand;"><span class="SystemLeft">产品展示</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu3"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ProductSort.asp?Action=Add&amp;ParentID=0" target="mainFrame" onclick="changeAdminFlag(&quot;产品类别&quot;)">产品类别</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ProductList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;产品列表&quot;)">产品列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/ProductEdit.asp?Result=Add" target="mainFrame" onclick="changeAdminFlag(&quot;添加产品&quot;)">添加产品</a></td>
                </tr>
                </tbody>
            </table>
        </div>
        </td>
    </tr>
    </tbody>
</table>
<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody>
    <tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_06.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu6&#39;)" style="cursor:hand;"><span class="SystemLeft">制砂生产线案例</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu6"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody>
                <tr style="display:none;">
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersSort.asp?Action=Add&amp;ParentID=0" target="mainFrame" onclick="changeAdminFlag(&quot;其他信息类别&quot;)">信息类别</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersList.asp?SortID=1&amp;SortPath=0,1," target="mainFrame" onclick="changeAdminFlag(&quot;其他信息列表&quot;)">信息列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersEdit.asp?Result=Add&amp;SortID=1&amp;SortPath=0,1," target="mainFrame" onclick="changeAdminFlag(&quot;添加其他信息&quot;)">添加信息</a></td>
                </tr>
                </tbody>
            </table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody><tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_06.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu69&#39;)" style="cursor:hand;"><span class="SystemLeft">破碎筛分线案例</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu69"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr style="display:none;">
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersSort.asp?Action=Add&amp;ParentID=0" target="mainFrame" onclick="changeAdminFlag(&quot;其他信息类别&quot;)">信息类别</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersList.asp?SortID=1&amp;SortPath=0,2," target="mainFrame" onclick="changeAdminFlag(&quot;其他信息列表&quot;)">信息列表</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.zhengshengchina.com/zs-admin/OthersEdit.asp?Result=Add&amp;SortID=2&amp;SortPath=0,2," target="mainFrame" onclick="changeAdminFlag(&quot;添加其他信息&quot;)">添加信息</a></td>
                </tr>
                </tbody>
            </table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody><tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>


<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/Admin_left_05.gif" id="menuTitle1" onclick="new Element.toggle(&#39;submenu11&#39;)" style="cursor:hand;"><span class="glow">网站推广</span></td>
    </tr>
    <tr>
        <td style="display:none" align="right" id="submenu11"><div class="sec_menu" style="width:165">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" background="/images/SysLeft_bg_link.gif">
                <tbody><tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://www.baidu.com/search/url_submit.html" target="_blank">百度登录入口</a><a href="http://www.zhengshengchina.com/zs-admin/MessageList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;留言信息列表&quot;)"></a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.google.com/intl/zh-CN/add_url.html" target="_blank">Google登录入口</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://search.help.cn.yahoo.com/h4_4.html" target="_blank">Yahoo登录入口</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://search.msn.com/docs/submit.aspx" target="_blank">Live登录入口</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.dmoz.org/World/Chinese_Simplified/" target="_blank">Dmoz登录入口</a></td>
                </tr>
                <tr>
                    <td height="22"></td>
                    <td class="SystemLeft"><a href="http://www.alexa.com/site/help/webmasters" target="_blank">Alexa登录入口</a></td>
                </tr>
                <tr>
                    <td width="36" height="22"></td>
                    <td class="SystemLeft"><a href="http://ads.zhongsou.com/register/page.jsp" target="_blank">中搜登录入口</a><a href="http://www.zhengshengchina.com/zs-admin/OrderList.asp" target="mainFrame" onclick="changeAdminFlag(&quot;订单信息列表&quot;)"></a></td>
                </tr>
                </tbody>
            </table>
        </div>
            <div style="width:167">
                <table cellpadding="0" cellspacing="0" align="center" width="130">
                    <tbody><tr>
                        <td height="5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>


<table cellpadding="0" cellspacing="0" width="167" align="center">
    <tbody><tr>
        <td height="28" class="menu_title" onmouseover="this.className=&#39;menu_title2&#39;" onmouseout="this.className=&#39;menu_title&#39;" background="/images/admin_left_14.gif" id="menuTitle208"><span>系统信息</span>    </td>
    </tr>
    <tr>
        <td align="right"><div class="sec_menu" style="width:165">
            <table cellpadding="0" cellspacing="0" align="center" width="147">
                <tbody><tr>
                    <td width="145" height="20"><span style="line-height: 150%;">
技术支持：<a target="_blank" href="http://www.zhencaiwangluo.com/"><font color="000000"><font color="FF0000">真彩网络</font></font></a><br>
企业 QQ：800031081</span><br>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </td>
    </tr>
    </tbody>
</table>


<script>
    function Creathtml()
    {
        var bln=confirm("注意：添加、修改、删除相关数据时会自动生成、更新、删除所生成的静态文件。\n如果您没有对模板作过修改，不需要批量生成所有商品或新闻详细页面！\n如果您仅对产品、新闻、下载、人才等分类页面作过修改，只需要生成相关分类页面。\n\n请确定是否操作？");
        return bln;
    }
    function CreathtmlAll()
    {
        var bln=confirm("警告：批量生成全站静态页面将耗费较多系统资源！\n\n请确定是否操作？");
        return bln;
    }
</script>
</body>
</html>
