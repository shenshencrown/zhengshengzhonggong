package com.qunar.syk.entity;

import java.util.Date;

/**
 * Created by syk on 2017/6/1.
 * 用户模型包括编号，姓名，性别，年龄，备注，是否可用，创建时间，最后编辑时间(其它靠谱扩展属性根据脑洞补充有加分)
 */
public class TestUser {
    private int id;
    private String name;
    private String sex;
    private int age;
    private String comment;
    private Date createtime;
    private Date changetime;

    public TestUser(int id, String name, String sex, int age, String comment, Date createtime,
                    Date changetime) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.comment = comment;
        this.createtime = createtime;
        this.changetime = changetime;
    }

    @Override
    public String toString() {
        return "TestUser{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", comment='" + comment + '\'' +
                ", createtime=" + createtime +
                ", changetime=" + changetime +
                '}';
    }

    public TestUser() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public void setChangetime(Date changetime) {
        this.changetime = changetime;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSex() {
        return sex;
    }

    public int getAge() {
        return age;
    }

    public String getComment() {
        return comment;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public Date getChangetime() {
        return changetime;
    }
}
