package com.qunar.syk.controller;

import com.qunar.syk.service.UserService;
import com.qunar.syk.support.tools.IPAdressUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("/main")
public class AdminMainController {

    @Resource(name = "userService")
    private UserService userService;

    @RequestMapping("/left")
    public String showLeft(HttpServletRequest request,Model model) {
        String ipAddress= IPAdressUtil.getIpAddr(request);
        System.out.println(ipAddress);
        model.addAttribute("ipAddress",ipAddress);
        return "SysLeft";
    }

    @RequestMapping("/top")
    public String showTop(Model model) {
        return "SysTop";
    }

    @RequestMapping("/head")
    public String showHead(Model model) {
        return "SysHead";
    }

    @RequestMapping("/view")
    public String showView(HttpServletRequest request,Model model) {
        String logintime=userService.getLoginTime("admin");
        model.addAttribute("logintime",logintime);
        System.out.println(logintime);
        String ipAddress= IPAdressUtil.getIpAddr(request);
        System.out.println(ipAddress);
        model.addAttribute("ipAddress",ipAddress);
        return "SysView";
    }

    @RequestMapping("/bestnews")
    public String showBestnews(Model model) {
        return "bestnews";
    }

    @RequestMapping("/passUpdate")
    public String showPassUpdate(Model model) {
        return "passUpdate";
    }
}
