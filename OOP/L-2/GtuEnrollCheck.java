import java.util.Scanner;

class GtuEnrollCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Provide an enrollment to check: ");
        String enroll = sc.nextLine();

        if(enroll.length() == 12) {
            System.out.println("[]: Provided enrollment '" + enroll + "' is valid");
        } else {
            System.out.println("[]: Provided enrollment '" + enroll + "' is not valid");
        }

        sc.close();
    }
}
