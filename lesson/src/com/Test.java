package com;
import java.math.BigInteger;
import java.util.*;

import java.text.DecimalFormat;
import java.math.BigDecimal;
public class Test{
    public static void main(String[] args) {

         int[] ary = {1,13,2,51,12,54,65,3};

        System.out.println(Arrays.binarySearch(ary,51));
        System.out.println(Arrays.toString(Arrays.copyOf(ary,2)));
        System.out.println(Arrays.toString(Arrays.copyOfRange(ary,0,3)));

        Arrays.fill(ary,0,3,1);
        System.out.println(Arrays.toString(ary));
    }
}


