---
sidebarDepth: 2
meta:
  - name: keywords
    content:  面向对象 java面向对象  java 
  - name: description
    content: 本文为Java面向对象的介绍
---

# Java类和对象

以下文章均来自网络

面向对象的三要素：`封装`，`继承`，`多态`


## 对象的创建


### 显示创建

- `类名 对象名 = new 类名()`
- 调用`java.lang.Class` 或者 `java.lang.reflect.Constuctor` 类的 `newlnstance()` 实例方法
- 使用`clone`方法
- 调用 `java.io.ObjectlnputStream` 对象的 `readObject()` 方法

```java



```

### 隐式创建




## super关键字

`super` 关键字可以在子类的构造方法中显式地调用父类的构造方法或属性


## 对象转换

`Java` 中引用类型之间的类型转换（前提是两个类是父子关系）主要有两种，分别是向上转型（`upcasting`）和向下转型（`downcasting`）。


- 向上转型

格式：`fatherClass obj = new sonClass();`

-  向下转型
格式：`sonClass obj = (sonClass) fatherClass;`


```java
// 父类 Animal
public class Animal {
    public String name = "Animal：动物";
    public static String staticName = "Animal：可爱的动物";
    public void eat() {
        System.out.println("Animal：吃饭");
    }
    public static void staticEat() {
        System.out.println("Animal：动物在吃饭");
    }
}

// 字类 Cat
public class Cat extends Animal {
    public String name = "Cat：猫";
    public String str = "Cat：可爱的小猫";
    public static String staticName = "Dog：我是喵星人";
    public void eat() {
        System.out.println("Cat：吃饭");
    }
    public static void staticEat() {
        System.out.println("Cat：猫在吃饭");
    }
    public void eatMethod() {
        System.out.println("Cat：猫喜欢吃鱼");
    }
    public static void main(String[] args) {
        Animal animal = new Cat(); // 向上转型
        System.out.println(animal.name); // Animal：动物
        System.out.println(animal.staticName); // Animal：可爱的动物
        animal.eat(); // Cat：吃饭
        animal.staticEat(); //Animal：动物在吃饭


        Cat cat = (Cat) animal; // 向下转型
        System.out.println(cat.str); // Cat：可爱的小猫
        cat.eatMethod(); //Cat：猫喜欢吃鱼
    }
}
```

- 实例方法与引用变量实际引用的对象的方法进行绑定，这种绑定属于动态绑定，因为是在运行时由 Java 虚拟机动态决定的。例如，`animal.eat()` 是将 `eat()` 方法与 `Cat` 类绑定。
- 静态方法与引用变量所声明的类型的方法绑定，这种绑定属于静态绑定，因为是在编译阶段已经做了绑定。例如，`animal.staticEat()` 是将 `staticEat()` 方法与 `Animal` 类进行绑定。
- 成员变量（包括静态变量和实例变量）与引用变量所声明的类型的成员变量绑定，这种绑定属于静态绑定，因为在编译阶段已经做了绑定。例如，`animal.name` 和 `animal.staticName` 都是与 `Animal` 类进行绑定。


### 强制对象类型转换







## 抽象类







## 接口