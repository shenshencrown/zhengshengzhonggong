package com.qunar.syk.controller;

import com.qunar.syk.service.UserService;
import com.qunar.syk.support.tools.CommonUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Resource(name = "userService")
    private UserService userService;
    /**
     *
     * 返回登录界面
     * @param model
     * @return
     */
    @RequestMapping("/login")
    public String login(Model model) {
        return "login";
    }

    /**
     * 登录验证
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/validateLogin")
    public String loginValidate(HttpServletRequest request, HttpServletResponse response) {
        String username=request.getParameter("LoginName");
        String logintime="";
        System.out.println(username);
        String password=request.getParameter("LoginPassword");
        System.out.println(password);
        String checkcode=request.getParameter("CheckCode");
        System.out.println(checkcode);
        if (!checkcode.toLowerCase().equals(CommonUtil.checkcode.toLowerCase())) {
            System.out.println(CommonUtil.checkcode);
            return "login";
        }
        if (!password.equals(userService.getPasswrodByUsername(username))) {
            System.out.println(userService.getPasswrodByUsername(username));
            return "login";
        }
        SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        logintime=df.format(new Date());
        System.out.println("the current time is:"+logintime);
        userService.updateLoginTime(username,logintime);
        return "admin-main";
    }

    /**
     * 返回管理页界面
     * @param model
     * @return
     */
    @RequestMapping("/main")
    public String showMain(Model model) {
        return "admin-main";
    }

    /**
     * 修改密码
     * @param request
     * @return
     */
    @RequestMapping("/updatePass")
    public String showPass(HttpServletRequest request) {
        String username="admin";
        String password=request.getParameter("NewPassword");
        int result=userService.updatePassword(username,password);
        if (result > 0) {
            return "passUpdate";
        }
        return "passUpdate";
    }

}
