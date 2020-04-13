---
sidebarDepth: 2
meta:
  - name: keywords
    content:  package  java包
  - name: description
    content: 本文为ava包的介绍
---

# Java包

## 定义包

`Java` 中使用 `package` 语句定义包，如：`package 包名`，`package` 语句应该放在源文件的第一行，在每个源文件中只能有一个包定义语句，

**Java 包的命名规则如下：**

- 包名全部由小写字母（多个单词也全部小写）。
- 如果包名包含多个层次，每个层次用“.”分割。
- 包名一般由倒置的域名开头，比如 `com.baidu`，不要有 `www`。
- 自定义包不能 `java` 开头。


**注意**：如果在源文件中没有定义包，那么类、接口、枚举和注释类型文件将会被放进一个无名的包中，也称为默认包。在实际企业开发中，通常不会把类定义在默认包下。

在同一个包中的类，可以访问非`public`、`protected`、`private`修饰的字段和方法



## 使用包

使用包我们需要使用`import`导入包

- `import 包名.类名` 导入某个包下的指定的类
- `import 包名.*` 导入某个包下的所有的类

**需要注意**的是，两个包存在相同名称的类时`java.sql.Date` 和 `java.util.Date`，同时使用`import` 导入会报错，这是我们可以使用类的的全名，例如：

```js
java.sql.Date d = new java.sql.Date();
```


## 系统常用包


| 包 | 说明 | 
|  ----  | ----  |
|`java.lang`| Java 的核心类库，包含运行 Java 程序必不可少的系统类，如基本数据类型、基本数学函数、字符串处理、异常处理和线程类等，系统默认加载这个包|
|`java.util`|包含如处理时间的 Date 类，处理动态数组的 Vector 类，以及 Stack 和 HashTable 类|
|`ava.io`|Java 语言的标准输入/输出类库，如基本输入/输出流、文件输入/输出、过滤输入/输出流等|
|`java.sql`|实现 JDBC 的类库|
|`java.net`|实现网络功能的类库有 Socket 类、ServerSocket 类|
|`java.awt.image`|处理和操纵来自网上的图片的 Java 工具类库|
|`java.util.zip`|实现文件压缩功能|
|`java. security`|提供安全性方面的有关支持|



## java查询包

`Java`编译器最终编译出的`.class`文件只使用完整类名，因此，在代码中，当编译器遇到一个`class`名称时：

- 如果是完整类名，就直接根据完整类名查找这个`class`；


**如果是简单类名，按下面的顺序依次查找：**

- 查找当前`package`是否存在这个`class`；

- 查找`import`的包是否包含这个`class`；

- 查找`java.lang`包是否包含这个`class`。

- 如果按照上面的规则还无法确定类名，则编译报错。






