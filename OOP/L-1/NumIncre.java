import java.util.Scanner;

class NumIncre {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Provide a five digit number: ");
        int num = sc.nextInt();

        if(num >= 10000 && num <= 99999) {
            int n = 0;
            int mul = 1;

            while (num > 0) {
                int d = (num % 10) + 1;
                if (d == 10) d = 0;
                
                n = n + (d * mul);
                mul *= 10;
                num /= 10;
            }

            System.out.println("[]: Incremented Number: " + n);
        } else {
            System.out.println("[]: You must provide a five digit number only.");
        }

        sc.close();
    }
}
