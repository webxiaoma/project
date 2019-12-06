---
sidebarDepth: 2
meta:
  - name: keywords
    content:  日期与时间 java日期  java时间 
  - name: description
    content: 本文为Java日期与时间的介绍
---

# 日期于时间


在`Java8`之前, 日期时间Api 使用的是`Date` 和 `Calendar`



## 新时间API

新的时间`API`,位于`Java.time`包里

- `LocalDateTime` 获取当前日期和时间
- `LocalDate` 获取当前日期
- `LocalTime` 获取当前时间
- `DateTimeFormatter`格式化日期
- `of()`方法可以设置日期时间
- `parse()`方法同`of`类似，只不过可以按标准格式传入

```java
import java.time.*;
import java.time.format.*;


public class main{
   public static void main(String[] args){

     /**
      * 通过 now() 方法获取当前日期时间
      */
      // 当前日期 2019-12-02
      LocalDate ld = LocalDate.now();
      // 当前时间 16:43:04.786
      LocalTime lt = LocalTime.now();
      // 当前日期和时间 2019-12-02T16:43:19.427
      LocalDateTime ldt = LocalDateTime.now();

      /**
       * 通过 of() parse()设置日期或时间
       */

      // 设置日期 2019-12-02
      LocalDate ld2 = LocalDate.of("2019-12-02");
      // 设置时间 16:43:04.786
      LocalTime lt2 = LocalTime.of("16:43:19");
      // 当前日期和时间 2019-12-02T16:43:19.427
      LocalDateTime ldt2 = LocalDateTime.of("2019-12-02T16:43:19");

      LocalDateTime dt = LocalDateTime.parse("2019-11-19T15:16:17");

     /**
      * 通过 LocalDateTime 格式化日期  通过java.time.format引入
      */ 
      DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
      System.out.println(dtf.format(LocalDateTime.now())); //  2019-12-02 17:07:28
   }
}
```
:::tip 提示
`ISO 8601`规定的日期和时间分隔符是T。标准格式如下：
- 日期：`yyyy-MM-dd`
- 时间：`HH:mm:ss`
- 带毫秒的时间：`HH:mm:ss.SSS`d
- 日期和时间：`yyyy-MM-dd'T'HH:mm:ss`
- 带毫秒的日期和时间：`yyyy-MM-dd'T'HH:mm:ss.SSS`
:::


### 其它日期的运算方法

- `plusDays()` 增加天数
- `plusHours()` 增加小时
...
- `minusDays()` 减小天数
- `minusMonths()`减少分钟
...

- `withYear()`调整年
- `withMonth()`调整月
- `withDayOfMonth()`调整日
- `withHour()`调整时
- `withMinute()`调整分
- `withSecond()`调整秒

- `isBefore()` 判断某个日期是否在另一个前面
- `isAfter()` 判断某个日期是否在另一个后面
- `Duration` 计算两个时刻之间的时间间隔
- `Period` 计算两个日期之间的天数

```java
import java.time.*;
import java.time.format.*;


public class main{
   public static void main(String[] args){
       
        // 时间增量
        LocalTime time = LocalTime.now();
        LocalTime newTime = time.plusHours(2); // 增加两个小时
        
        /**
         * 使用with调整日期时间
         */ 
        LocalDateTime ldt = LocalDateTime.now();
        LocalDateTime ldt2 = ldt.withDayOfMonth(10); // 日期变为10
        LocalDateTime ldt3 = ldt.withYear(2018); // 年份变为2018

       /**
        * with的其它运算方法
        */
        // 本月第一天00:00时刻:
        LocalDateTime firstDay = LocalDate.now().withDayOfMonth(1).atStartOfDay();

        // 本月最后1天:
        LocalDate lastDay = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());

        // 下月第1天:
        LocalDate nextMonthFirstDay = LocalDate.now().with(TemporalAdjusters.firstDayOfNextMonth());

        // 本月第1个工作日:
        LocalDate firstWeekday = LocalDate.now().with(TemporalAdjusters.firstInMonth(DayOfWeek.MONDAY));


        /**
         *  isAfter 和 isBefore
         */

         // 当前日期在 2019-12-04 之前返回 true, 否则 false
        LocalDate.now().isBefore(LocalDate.of(2019, 12, 04)); 
         //当前日期在"09:29:00"之后为返回 true, 否则false
        LocalTime.now().isAfter(LocalTime.parse("09:29:00"));  

        /** 
         * Duration 和 Period
         */ 
        LocalDateTime start = LocalDateTime.of(2019, 11, 19, 8, 15, 0);
        LocalDateTime end = LocalDateTime.of(2020, 1, 9, 19, 25, 30);
        Duration d = Duration.between(start, end); // 返回PT1616H15M30S

        // PT1616H15M30S 表示1616小时15分钟30秒

   }
}
```
:::tip 提示
`Duration`的类型类似于`P...T...`的形式，如`PT1616H15M30S`(1616小时15分钟30秒), `PT`之间表示日期间隔，`T`后面表示时间间隔


:::

## 旧时间API

旧时间`API` 主要包含在`Java.util`包里，主要包括

- `Date` 日期和时间的对象,无时区信息
- `SimpleDateFormat` 格式化日期
- `Calendar` 设置获取日期和时间，并且可以进行简单运算


### `Date`

```java
import java.util.*;

public class main{
  public static void main(String[] args){
     Date date = new Date() // 获取当前时间
     
     System.out.println(date.getYear());  // 返回从1900年到当前的年数(加上1990是当前年份)
     System.out.println(date.getMont());  // 返回月份0-11，从0开始算
     System.out.println(date.getDate());  // 返回日期1-31
     System.out.println(date.toString());  // 转换为字符串，如：Mon Dec 02 11:15:32 CST 2019
     System.out.println(date.toLocalString());  // 返回本地时区格式时间：2019-12-2 11:15:32
     System.out.println(date.toGMTString());  // 返回GMT时区格式的时间：2 Dec 2019 03:17:13 GMT

  }
}
```
`Date` 无时区信息


### `SimpleDateFormat`

使用`SimpleDateFormat` 进行格式化

- `yyyy`：年
- `MM`：月
- `dd`: 日
- `HH`: 小时
- `mm`: 分钟
- `ss`: 秒

```java
import java.util.Date;
import java.text.SimpleDateFormat;

public class Main {
    public static void main(String[] args) {
        Date date = new Date();

        // 也可以 SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss"); 
        var sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
        System.out.println(sdf.format(date)); // 返回类似 2019-11-10 10:12:54
    }
}
```

###  `Calendar`

`Calendar`和`Date`类似，除了获取日期外，还可以进行简单的日期和时间运算

- 通过`Calendar`来获取日期

```java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 获取当前时间: 
        // Calendar.getInstance() 是GreogrianCalendar的一个实例
        Calendar c = Calendar.getInstance();
        int y = c.get(Calendar.YEAR); // 获取年份 例如：2019
        int m = c.get(Calendar.MONTH); // 获取月份 0-11
        int d = c.get(Calendar.DAY_OF_MONTH); // 获取日期1-31
        int w = c.get(Calendar.DAY_OF_WEEK); // 获取星期0-6
        int hh = c.get(Calendar.HOUR_OF_DAY); // 获取小时
        int mm = c.get(Calendar.MINUTE); // 获取分钟
        int ss = c.get(Calendar.SECOND); // 获取秒数
        int ms = c.get(Calendar.MILLISECOND); // 获取毫秒
    }
}
```


- 通过`Calendar`的`set`方法来设置 日期

```java
import java.util.*;

public class Main{
  public static void main(String[] arys){
      Calendar cal = Calendar.getInstance();
      cal.set(2019, 11, 2, 13, 44, 51);// 2019-11-02 13:44:51
      cal.set(Calendar.YEAR, 2014);// 设置年
      cal.set(Calendar.MONTH, 7);//设置月(月份0代表1月)
      cal.set(Calendar.DATE, 11);//设置日
      cal.set(Calendar.HOUR_OF_DAY, 15);//设置时
      cal.set(Calendar.MINUTE, 33);//设置分
      cal.set(Calendar.SECOND, 32);//设置秒

  }
}
```

- 通过`Calendar`的`add`方法来进行时间运算

```java
import java.util.*;

public class Main{
  public static void main(String[] arys){
      Calendar cal = Calendar.getInstance();
      cal.add(Calendar.YEAR, 1);// 增加一年
      cal.add(Calendar.MONTH, 1);//增加一月
      cal.add(Calendar.DATE, 1);//增加一日
      cal.add(Calendar.HOUR_OF_DAY, -1);// 减小一小时
      cal.add(Calendar.MINUTE, 1);//分
      cal.add(Calendar.SECOND, 1);//秒

  }
}
```

- `Calendar.getTime()`可以将一个`Calendar`对象转换成`Date`对象

