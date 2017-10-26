package com.qunar.syk.controller;

import com.qunar.syk.support.tools.CommonUtil;
import com.qunar.syk.support.tools.ValidatecodeUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/validate")
public class CheckcodeController {
    /**
     * 获取验证码图片
     * @param request
     * @param response
     */
    @RequestMapping("/getPic")
    public void getPic(HttpServletRequest request, HttpServletResponse response) {
        //设置响应的媒体类型，这样浏览器会识别出响应的是图片
        response.setHeader("Content-Type","image/jped");
        ValidatecodeUtil vCode = new ValidatecodeUtil(60,15,4,15);
        vCode.getCode();
        CommonUtil.checkcode=vCode.getCode();
        try {
            ImageIO.write(vCode.getBuffImg(), "png", response.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return;
    }
}
