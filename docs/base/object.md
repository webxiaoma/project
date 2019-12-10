---
sidebarDepth: 2
meta:
  - name: keywords
    content:  面向对象 java面向对象  java 
  - name: description
    content: 本文为Java面向对象的介绍
---

# 面向对象(一)

以下文章均来自网络

面向对象的三要素：`封装`，`继承`，`多态`


## 封装

封装是面向对象的特征之一，是对象和类概念的主要特性。
封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。


## 继承

面向对象（OOP）具有继承的特性，它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。


`java`中通过 `extends`关键字来实现继承：
```java
class 父类 {
}
 
class 子类 extends 父类 {
}
```

:::tip 提示
- 通过继承创建的新类称为“子类”或“派生类”。

- 被继承的类称为“基类”、“父类”或“超类”。

- 子类需要访问父类成员，使用`super`关键字。

- `this`关键字：指向自己的引用。

- 每一个类都有一个构造方法(即使没有写，也会默认存在)

- `final`关键字定义的类，不能被继承`final class 类名{}`
:::

```java
public class Animal { 
    private String name;   
    // 构造方法
    public Animal(String myName, String myid) { 
        //可以初始化属性值
    } 
    public void eat() {  
       System.out.println("父类：吃")   
    } 
    public void run(){

    }
} 
 
public class Dog  extends  Animal{  // 子类（派生类）继承 父类（超类）
    public void eat(){
       System.out.println("子类：吃")   
    }
    
    void test(){
       super("dog") // 可以调用父类的构造方法
       this.eat()  // 调用自己的eat
       super.eat() // 调用父类的eat
    }
}


public class Main {  // 程序入口
  public static void main(String[] args) {
    Dog dog = new Dog();
    dog.test();
  }
}
```


## 重写和重载


### 重写

重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。即外壳不变，核心重写！

```java
class Animal{
   public void eat(){
      System.out.println("动物可以吃");
   }
}
 
class Dog extends Animal{
   public void eat(){
      System.out.println("狗可以吃");
   }
   public void bark(){
      System.out.println("狗可以吠叫"); 
   }
}
 
public class Test{
   public static void main(String args[]){
      Animal a = new Animal(); // Animal 对象
      Animal g = new Dog(); // Dog 对象

      Dog d = new Dog(); // Dog 对象
 
      a.eat(); // 执行 Animal 类的方法
      g.eat(); //执行 Dog 类的方法
      d.break(); // 执行 Dog类的break方法
      g.bark(); // 报错，因为g的引用类型没有bark方法
   }
}
```

:::tip 提示
- 重写方法不能抛出新的检查异常或者比被重写方法申明更加宽泛的异常。
- 参数列表必须完全与被重写方法的相同。
- 返回类型与被重写方法的返回类型可以不相同，但是必须是父类返回值的派生类（java5 及更早版本返回类型要一样，java7 及更高版本可以不同）。
- 访问权限不能比父类中被重写的方法的访问权限更低。例如：如果父类的一个方法被声明为 public，那么在子类中重写该方法就不能声明为 protected。
- 父类的成员方法只能被它的子类重写。
- 声明为 `final` 的方法不能被重写。
- 声明为 `static` 的方法不能被重写，但是能够被再次声明。
- 子类和父类在同一个包中，那么子类可以重写父类所有方法，除了声明为 `private` 和 `final` 的方法。
- 子类和父类不在同一个包中，那么子类只能够重写父类的声明为 `public` 和 `protected` 的非 `final` 方法。
- 重写的方法能够抛出任何非强制异常，无论被重写的方法是否抛出异常。但是，重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异常，反之则可以。
- 构造方法不能被重写。
- 如果不能继承一个方法，则不能重写这个方法。
:::


### 重载




## 多态

