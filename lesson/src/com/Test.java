package com;
import java.math.BigInteger;
import java.util.Scanner;
import java.util.Date;
import java.util.Calendar;

import java.text.DecimalFormat;
import java.util.Random;
import java.math.BigDecimal;
public class Test{
    public static void main(String[] args) {

        StringBuilder strb = new StringBuilder("test");

        StringBuilder a = strb.reverse();
        System.out.println(a);  // test


        strb.insert(2,"111");

        System.out.println(strb );  // test

    }
}


