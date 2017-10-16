package com.qunar.syk.controller;

import com.qunar.syk.entity.User;
import com.qunar.syk.service.UserService;
import com.qunar.syk.support.HttpRequest;
import com.qunar.syk.support.exceptionhandler.NoIdException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by syk on 2017/6/1.
 */
@Controller
@RequestMapping("/home")
public class UserController {

    public UserController(){
        System.out.println("usercontroller初始化了！！！！！！！！！！");
    }

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
     *
     * 返回产品知识页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/chanpinzhishi")
    public String showChanPinZhiShi(Model model) {
        return "chanpinzhishi";
    }

    @RequestMapping("/xinwenzhongxin")
    public String showXinWenZhongXin(Model model) {
        return "xinwenzhongxin";
    }
}
