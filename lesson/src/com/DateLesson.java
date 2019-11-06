package com;

import java.text.SimpleDateFormat;
import java.util.*;

public class DateLesson {
    public static void main(String[] args) {
        int a = 103251;
        System.out.println(a);

        Date date = new Date();

        System.out.println(date);
        System.out.println(date.getYear());
        System.out.println(date.getMonth());
        System.out.println(date.getDate());
        System.out.println(date.getDay());

        System.out.println(date.toString());
        System.out.println(date.toLocaleString());


        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        System.out.println(sdf.format(date));

    }
}
