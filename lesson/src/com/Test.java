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

        BigDecimal bd = new BigDecimal("10");


        System.out.println(bd.add(new BigDecimal("1.1")));
        System.out.println(bd.divide(new BigDecimal("3"),2, BigDecimal.ROUND_CEILING));

    }
}


