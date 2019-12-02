package com;

import java.text.SimpleDateFormat;
import java.util.*;
import java.time.*;
import java.time.format.*;

public class DateLesson {
    public static void main(String[] args) {
//        int a = 103251;
//        System.out.println(a);
//
//        Date date = new Date();

//        System.out.println(date);
//        System.out.println(date.getYear());
//        System.out.println(date.getMonth());
//        System.out.println(date.getDate());
//        System.out.println(date.getDay());

//        System.out.println(date.toString());
//        System.out.println(date.toGMTString());
//
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        System.out.println(sdf.format(date));
        // Calendar.getInstance() 是GreogrianCalendar的一个实例



//        Calendar c = Calendar.getInstance();
//        int y = c.get(Calendar.YEAR); // 获取年份 例如：2019
//        int m = 1 + c.get(Calendar.MONTH); // 获取月份 0-11
//        int d = c.get(Calendar.DAY_OF_MONTH); // 获取日期1-31
//        int w = c.get(Calendar.DAY_OF_WEEK); // 获取星期
//        int hh = c.get(Calendar.HOUR_OF_DAY); // 获取小时
//        int mm = c.get(Calendar.MINUTE); // 获取分钟
//        int ss = c.get(Calendar.SECOND); // 获取秒数
//        int ms = c.get(Calendar.MILLISECOND); // 获取毫秒
//
//        System.out.println(w);




//        新api

//        // 当前日期
//        LocalDate ld = LocalDate.now();
//        // 当前时间
//        LocalTime lt = LocalTime.now();
//        // 当前日期和时间
//        LocalDateTime ldt = LocalDateTime.now();


        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        System.out.println(dtf.format(LocalDateTime.now()));


    }
}
