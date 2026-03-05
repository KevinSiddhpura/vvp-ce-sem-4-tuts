import java.util.Scanner;
import java.util.Arrays;

class AnagramCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("[]: Provide a string to check: ");
        String str1 = sc.nextLine();

        System.out.print("[]: Provide another string to check: ");
        String str2 = sc.nextLine();

        String Str1 = str1.replaceAll("\\s", "").toLowerCase();
        String Str2 = str2.replaceAll("\\s", "").toLowerCase();

        boolean isAnagram = false;

        if (Str1.length() == Str2.length()) {
            char[] charArray1 = Str1.toCharArray();
            char[] charArray2 = Str2.toCharArray();

            Arrays.sort(charArray1);
            Arrays.sort(charArray2);

            isAnagram = Arrays.equals(charArray1, charArray2);
        }

        System.out.println("[]: Provided strings " + (isAnagram ? "are" : "are not") + " anagrams of each other.");

        sc.close();
    }
}
