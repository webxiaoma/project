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

`type[] aryName` 数组类型 `[]` 数组名称

```java
//方法一
int[] ary = \{1,2,3,4\}; // 声明一个int类型的数组

//方法二
int[] num = new int[5]; //初始化长度为5的 int类型数组 



### 二维数组

`type[][] aryName` 数组类型`[][]` 数组名称

```java
//方法一
int[][] ary = \{\{12,3\},\{12,3\}\} // 声明一个int类型的数组
//方法二 
int[][] num = new int[5][2] //初始化一维长度为5，二维长度为2的 int类型数组 
//方法三 
int[][] temp = new int[][]\{\{5,2\},\{34,3\}\} 
```


## 数组工具Arrays类

`Arrays类` 位于 `java.util` 中

- `int binarySearch(type[] a, int fromIndex, int toIndex, type key)` 使用二分法查询 不存在反回负数

1. `a`为要查询的数，
2. `formIndex` 可选，开始查询的索引 
3. `toIndex` 可选，结束要查询的索引 
3. `key` 要搜索的元素 

- `type[] copyOf(type[] a, int length)` 复制一个新数组，`length为新数组长度，大于`a`时补零
- `type[] copyOfRange(type[] a, int fromIndex, int toIndex)` 只复制 `a` 数组的 `fromIndex` 索引到 `toIndex` 索引的元素。
- `boolean equals(type[] a, type[] a2)` 比较数组`a`和`a2`是否相等
- `void fill(type[] a, int fromIndex, int toIndex, type val)` 数组填充 `formIndex` 和 `toIndex`可选,val为填充值
- `void sort(type[] a, int fromIndex, int toIndex)` 数组排序 `formIndex` 和 `toIndex`可选
- `String toString(type[] a)`将一个数组转换成一个字符串


```java
import java.util.Arrays;

public class Test{
    public static void main(String[] args) {

         int[] ary = \{1,13,2,51,12,54,65,3\};

        System.out.println(Arrays.binarySearch(ary,51)); // 3
        System.out.println(Arrays.toString(Arrays.copyOf(ary,2))); // [1, 13]
        System.out.println(Arrays.toString(Arrays.copyOfRange(ary,0,3))); // [1, 13, 2]

        Arrays.fill(ary,0,3,1);
        System.out.println(Arrays.toString(ary)); //[1, 1, 1, 51, 12, 54, 65, 3]
    }
}
```



## Java8 在Arrays类下新增的方法

增加了并发支持

- `void parallelPrefix(xxx[] array, int fromIndex, int toIndex, XxxBinaryOperator op)`

1. `a`为要查询的数，
2. `formIndex` 可选，开始查询的索引 
3. `toIndex` 可选，结束要查询的索引 
3. `key` 要搜索的元素 

- `void setAll(xxx[] array, IntToXxxFunction generator)`
- `void parallelSetAll(xxx[] array, IntToXxxFunction generator)`
- `void parallelSort(xxx[] a，int fromIndex, int toIndex)`
- `Spliterator.OfXxx spliterator(xxx[] array, int startInclusive, int endExclusive)`
- `XxxStream stream(xxx[] array, int startInclusive, int endExclusive)`


