package com.qunar.syk.service;

public interface UserService {
    public String getPasswrodByUsername(String userName);
    public String getLoginTime(String username);
    public int updatePassword(String username,String newPassWord);
    public int updateLoginTime(String username,String logintime);
}
