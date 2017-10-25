package com.qunar.syk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {
    @RequestMapping("/left")
    public String showLeft(Model model) {
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
    public String showView(Model model) {
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
