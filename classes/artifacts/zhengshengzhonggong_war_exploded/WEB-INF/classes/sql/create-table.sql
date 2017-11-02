create table spring_user(
id int unsigned not null auto_increment comment '用户id',
name varchar(24) not null default '' comment '用户姓名',
age int unsigned not null comment '用户年龄',
sex varchar(1) not null default '' comment '用户性别',
comment varchar(100) not null default '' comment '用户简介',
createtime date not null comment '用户创建时间',
changetime date not null comment '用户修改时间',
primary key(id)
)comment='用户表';
/**
create table user(
  id int unsigned not null auto_increment comment '用户id',
  username varchar(24) not null comment '用户名',
  password varchar(24) not null comment '密码',
  logintime char(19) comment '上次登录时间',
  primary key(id)
)comment='用户登录表';
*/