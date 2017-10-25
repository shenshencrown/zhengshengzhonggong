package com.qunar.syk.service;

public interface UserService {
    public String getPasswrodByUsername(String userName);
    public int updatePassword(String username,String newPassWord);
}
