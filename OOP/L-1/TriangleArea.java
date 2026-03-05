import java.util.Scanner;

class TriangleArea {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("[]: Enter the lengths of the three sides: ");
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();

        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            double s = (a + b + c) / 2.0;
            double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

            System.out.println("[]: The area of the triangle is: " + area);
        } else {
            System.out.println("[]: The given side lengths cannot form a valid triangle.");
        }

        sc.close();
    }
}
