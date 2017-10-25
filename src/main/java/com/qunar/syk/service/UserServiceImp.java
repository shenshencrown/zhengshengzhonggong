package com.qunar.syk.service;

import com.qunar.syk.dao.UserDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

@Service("userService")
public class UserServiceImp implements UserService {
    @Resource
    private UserDao userDao;
    public String getPasswrodByUsername(String userName) {
        return userDao.selectPassword(userName);
    }

    public int updatePassword(String username, String newPassWord) {
        Map map=new HashMap();
        map.put("username",username);
        map.put("password",newPassWord);
        return userDao.updatePassword(map);
    }
}
