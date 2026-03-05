import java.util.Scanner;

interface Interest {
    double interest(double p, double r, int n);
}

class SimpleInterest implements Interest {
    @Override
    public double interest(double p, double r, int n) {
        return (p * r * n) / 100;
    }
}

class CompoundInterest implements Interest {
    @Override
    public double interest(double p, double r, int n) {
        return p * Math.pow(1 + r / 100, n) - p;
    }
}

public class InterestCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("[]: Enter principal amount:");
        double principal = sc.nextDouble();

        System.out.println("[]: Enter rate of interest:");
        double rate = sc.nextDouble();

        System.out.println("[]: Enter time period:");
        int time = sc.nextInt();

        Interest si = new SimpleInterest();
        Interest ci = new CompoundInterest();

        System.out.println("\nPrincipal : " + principal);
        System.out.println("Rate      : " + rate + "%");
        System.out.println("Time      : " + time + " years");
        System.out.println("-----------------------------------");
        System.out.println("Simple   Interest : " + si.interest(principal, rate, time));
        System.out.println("Compound Interest : " + ci.interest(principal, rate, time));
        sc.close();
    }
}
