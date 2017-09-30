package com.qunar.syk.support.converter;

import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by syk on 2017/6/3.
 * 根据格式进行String-Date的转化
 */
public class MyDateConverter implements Converter<String, Date> {
    public Date convert(String s) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date;
        try {
            date = format.parse(s);
        } catch (ParseException e) {
            return null;
        }
        return date;
    }
}
