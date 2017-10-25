package com.qunar.syk.dao;

import java.util.Map;

public interface UserDao {
    public String selectPassword(String username);
    public int updatePassword(Map map);
}
