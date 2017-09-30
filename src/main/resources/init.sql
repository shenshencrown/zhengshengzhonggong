-- 1、用户表
DROP TABLE spring_user;
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

--   初始化脚本

insert into spring_user(name,age,sex,comment,createtime,changetime) values
  ('sss',18,'m','sd','2000-12-31','2000-12-31');
insert into spring_user(name,age,sex,comment,createtime,changetime) values
  ('ll',18,'f','e','2000-12-31','2000-12-31');
insert into spring_user(name,age,sex,comment,createtime,changetime) values
  ('lj',18,'m','e','2000-12-31','2000-12-31');
insert into spring_user(name,age,sex,comment,createtime,changetime) values
  ('lhm',18,'f','e','2000-12-31','2000-12-31');
insert into spring_user(name,age,sex,comment,createtime,changetime) values
  ('ljp',18,'f','l','2000-12-31','2000-12-31');