package com.qunar.syk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by syk on 2017/6/1.
 */
@Controller
@RequestMapping("/home")
public class ViewController {

    public ViewController() {
        System.out.println("usercontroller初始化了！！！！！！！！！！");
    }

//-------------"正升首页"模块------------------------------------------------

    /**
     * 显示所有用户，在web.xml中配置了默认界面是index.jsp，jsp转发给/user/list
     * 起到默认界面就是用户列表的功能
     *
     * @param model
     * @return
     */
    @RequestMapping("/index")
    public String showUserList(Model model) {
        return "home";
    }

//-------------"新闻中心"模块------------------------------------------------

    /**
     * 返回企业新闻页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/qiyexinwen")
    public String showQiYeXinWen(Model model) {
        return "qiyexinwen";
    }

    /**
     * 返回行业新闻页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/hangyexinwen")
    public String showHangYeXinWen(Model model) {
        return "hangyexinwen";
    }

    /**
     * 返回产品知识页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/chanpinzhishi")
    public String showChanPinZhiShi(Model model) {
        return "chanpinzhishi";
    }

    /**
     * 返回新闻中心页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/xinwenzhongxin")
    public String showXinWenZhongXin(Model model) {
        return "xinwenzhongxin";
    }

//-------------"产品中心"模块------------------------------------------------

    @RequestMapping("/product")
    public String showProduct(Model model) {
        return "product";
    }

    @RequestMapping("/zhisha")
    public String showZhiSha(Model model) {
        return "zhisha";
    }

    @RequestMapping("/posui")
    public String showPoSui(Model model) {
        return "posui";
    }

    @RequestMapping("/yidongposui")
    public String showYiDongPoSui(Model model) {
        return "yidongposui";
    }

    @RequestMapping("/peitao")
    public String showPeiTao(Model model) {
        return "peitao";
    }

    @RequestMapping("shaifen")
    public String showShaiFen(Model model) {
        return "shaifen";
    }

//-------------"加入我们"模块------------------------------------------------

    @RequestMapping("joinus")
    public String showJoinUs(Model model) {
        return "joinus";
    }

//-------------"配件服务"模块------------------------------------------------

    @RequestMapping("peijianfuwu")
    public String showPeiJianFuWu(Model model) {
        return "peijianfuwu";
    }

    @RequestMapping("problem")
    public String showProblem(Model model) {
        return "problem";
    }

    @RequestMapping("chanpinpeijian")
    public String showChanPinPeiJian(Model model) {
        return "chanpinpeijian";
    }

    @RequestMapping("fuwuchengnuo")
    public String showFuWuChengNuo(Model model) {
        return "fuwuchengnuo";
    }

//-------------"关于正升"模块------------------------------------------------

    @RequestMapping("guanyuzhengsheng")
    public String showGuanyuzhengsheng(Model model) {
        return "guanyuzhengsheng";
    }

    @RequestMapping("gongsigaikuo")
    public String showGongSiGaiKuo(Model model) {
        return "gongsigaikuo";
    }

    @RequestMapping("qiyewenhua")
    public String showQiYeWenHua(Model model) {
        return "qiyewenhua";
    }

    @RequestMapping("qiyerongyu")
    public String showQiYeRongYu(Model model) {
        return "qiyerongyu";
    }

//-------------"工程案例"模块------------------------------------------------

    @RequestMapping("gongchenganli")
    public String showGongChengAnLi(Model model) {
        return "gongchenganli";
    }

    @RequestMapping("zhishashengchanxian")
    public String showZhiShaShengChanXian(Model model) {
        return "zhishashengchanxian";
    }

    @RequestMapping("posuishengchanxian")
    public String showPoSuiShengChanXian(Model model) {
        return "posuishengchanxian";
    }

//-------------"联系我们"模块------------------------------------------------

    @RequestMapping("lianxiwomen")
    public String showLianXiWoMen(Model model) {
        return "contactus";
    }

    @RequestMapping("zaixianliuyan")
    public String showZaiXianLiuYan(Model model) {
        return  "zaixianliuyan";
    }
}
