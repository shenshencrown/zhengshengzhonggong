package com.qunar.syk.support.exceptionhandler;

/**
 * Created by syk on 2017/6/4.
 * 自定义异常代表数据库中没有该id
 */
public class NoIdException extends Exception {
    public NoIdException(String message) {
        super(message);
    }
}
