package com.qunar.syk.support.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * Created by syk on 2017/6/4.
 * 通过环绕通知获得dao层每个方法的执行时间
 */
@Order(1)
@Component
@Aspect
public class AopDaoRunTime {
    public AopDaoRunTime(){
        System.out.println("aop实例化了！！！！！！！！！");
    }
    private static final Logger LOGGER = LoggerFactory.getLogger(AopDaoRunTime.class);

    @Around("execution(* com.qunar.syk.dao.impl.*.*(..))")
    public Object printDaoTime(ProceedingJoinPoint point) {
        String methodName = point.getSignature().getName();
        Object result = null;
        try {
            long startTime = System.currentTimeMillis();
            result = point.proceed();
            long endTime = System.currentTimeMillis();
            LOGGER.info("{}方法执行时间为{}ms", methodName, endTime - startTime);
        } catch (Throwable e) {
            LOGGER.error("获得dao执行方法时间出错", e);
            return null;
        }
        return result;
    }
}
