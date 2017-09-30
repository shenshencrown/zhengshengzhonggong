package com.qunar.syk.support.exceptionhandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by syk on 2017/6/4.
 * 全局异常处理器，id不存在错误跳转到error-NoId.html，该错误属于用户的错误无需记录日志
 * 其他的类似数据库错误、io错误记录完日志后统一跳转到error-common.html
 */
@Component
public class MyExceptionHander implements HandlerExceptionResolver {
    public MyExceptionHander(){
        System.out.println("myhandler初始化了！！！！！！！");
    }
    private static final Logger LOGGER = LoggerFactory.getLogger(MyExceptionHander.class);

    public ModelAndView resolveException(HttpServletRequest req, HttpServletResponse resp, Object o, Exception e) {
        ModelAndView result = new ModelAndView();
        if (e instanceof NoIdException) {
            result.setViewName("forward:/error-NoId.html");
            return result;
        }
        LOGGER.error("内部错误", e);
        result.setViewName("forward:/error-common.html");
        return result;
    }
}
