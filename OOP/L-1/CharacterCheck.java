import java.util.Scanner;

class CharacterCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Enter a single letter: ");
        String input = sc.next();

        if (input.length() > 0) {
            char ch = input.charAt(0);

            if (Character.isLetter(ch)) {
                char Ch = Character.toLowerCase(ch);
                
                if (Ch == 'a' || Ch == 'e' || Ch == 'i' || Ch == 'o' || Ch == 'u') {
                    System.out.println("[]: "+ ch + " is a vowel.");
                } else {
                    System.out.println("[]: " + ch + " is a consonant.");
                }
            } else {
                System.out.println("[]: Please enter a letter.");
            }
        }

        sc.close();
    }
}
