package com.qunar.syk.support.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by syk on 2017/6/4.
 * 自定义拦截器，通过preHandle方法拦截每次请求，并将请求的ip记录日志
 */
public class IpInterceptor extends HandlerInterceptorAdapter {
    private static final Logger LOGGER = LoggerFactory.getLogger(IpInterceptor.class);

    public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object o) throws Exception {
        String ip = req.getRemoteAddr();
        LOGGER.info("request ip:{}", ip);
        return true;
    }
}
