package com;

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

        Dog d = new Dog(); // Dog对象

        a.eat(); // 执行 Animal 类的方法
        g.eat(); //执行 Dog 类的方法
        d.bark(); // 报错，因为g的引用类型没有bark方法
    }
}
