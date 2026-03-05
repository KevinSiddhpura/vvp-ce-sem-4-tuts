import java.util.Scanner;

class Payment {
    void processPayment(int amount) {
        System.out.println("\n=: Payment of Rs." + amount + " done using Cash");
    }
}

class CreditCardPayment extends Payment {
    @Override
    void processPayment(int amount) {
        System.out.println("\n=: Payment of Rs." + amount + " done using Credit Card");
    }
}

class UPIPayment extends Payment {
    @Override
    void processPayment(int amount) {
        System.out.println("\n=: Payment of Rs." + amount + " done using UPI");
    }
}

public class PaymentManager {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("[]: Enter amount to pay: ");
        int amount = sc.nextInt();
        
        System.out.println("\n[]: Choose Payment Method:");
        System.out.println("1]. Credit Card");
        System.out.println("2]. UPI");
        System.out.print("\n-- Enter choice (1/2): ");
        int choice = sc.nextInt();
        
        Payment payment;
        
        if (choice == 1) {
            payment = new CreditCardPayment();
            payment.processPayment(amount);
        } else if (choice == 2) {
            payment = new UPIPayment();
            payment.processPayment(amount);
        } else {
            System.out.println("[]: Invalid choice!");
        }
        
        sc.close();
    }
}