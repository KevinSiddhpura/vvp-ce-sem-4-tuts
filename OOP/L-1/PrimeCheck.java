import java.util.Scanner;

class PrimeCheck {
    static boolean isPrime(int n) {
        int flag = 0;
        
        for(int i = 2; i < n; i++) {
            if(n % i == 0) {
                flag++;
                break;
            }
        }

        return flag == 0;
    }

    public static void main(String[] args) {
        int n;

        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Prime Checker: Provide a number: ");
        n = sc.nextInt();

        if(n <= 1) {
            System.out.println("[]: 0 & 1, are not prime numbers.");
        } else {
            boolean state = isPrime(n);

            System.out.println("[]: Provided input: " + n + " is " + (state ? "a" : "not a") + " prime number.");
        }

        sc.close();
    }
}