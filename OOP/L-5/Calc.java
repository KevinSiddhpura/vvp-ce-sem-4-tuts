import java.util.Scanner;
import myutil.Stuff;

public class Calc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A, B;

        System.out.println("[]: Enter first number:");
        A = sc.nextInt();

        System.out.println("[]: Enter second number:");
        B = sc.nextInt();

        System.out.println("\n[]: Results:");
        System.out.println("Addition       : " + Stuff.add(A, B));
        System.out.println("Subtraction    : " + Stuff.sub(A, B));

        Stuff s = new Stuff();
        System.out.println("Multiplication : " + s.mul(A, B));
        System.out.println("Division       : " + s.div(A, B));

        sc.close();
    }
}
