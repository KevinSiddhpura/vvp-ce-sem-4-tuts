import java.util.Scanner;

class EmailChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Provide an email to check: ");
        String email = sc.nextLine();
        
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

        if (email.matches(emailRegex)) {
            System.out.println("[]: Valid email address.");
        } else {
            System.out.println("[]: Invalid email address.");
        }

        sc.close();
    }
}
