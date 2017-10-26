package com.qunar.syk.dao;

import java.util.Map;

public interface UserDao {
    public String selectPassword(String username);
    public String selectLoginTime(String username);
    public int updatePassword(Map map);
    public int updateLoginTime(Map map);
}
