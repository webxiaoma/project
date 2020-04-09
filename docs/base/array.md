---
sidebarDepth: 2
meta:
  - name: keywords
    content:  数组操作  java  array
  - name: description
    content: 本文为Java反射的介绍
---

# 数组操作 


## 数组声明

### 一维数组

`type[] aryName` 数组类型[] 数组名称

```java
//方法一
int[] ary = {1,2,3,4}; // 声明一个int类型的数组

//方法二
int[] num = new int[5]; //初始化长度为5的 int类型数组 
```


### 二维数组

`type[][] aryName` 数组类型[][] 数组名称

```java
//方法一
int[][] ary = {{12,3},{12,3}}; // 声明一个int类型的数组

//方法二
int[][] num = new int[5][2]; //初始化一维长度为5，二维长度为2的 int类型数组 

//方法三
int[][] temp = new int[][]{{5,2},{34,3}};
```


## 数组方法

