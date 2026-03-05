import java.util.Scanner;

class Calc {
    double calculateVolume(double radius) {
        return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);
    }


    double calculateVolume(float side) {
        return Math.pow(side, 3);
    }

    double calculateVolume(double length, double width, double height) {
        return length * width * height;
    }
}

class VolumeCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calc calc = new Calc();

        System.out.print("[]: Enter the radius of the Sphere: ");
        double radius = sc.nextDouble();
        System.out.println("=: Sphere Volume: " + calc.calculateVolume(radius));

        System.out.print("[]: Enter the side length of the Cube: ");
        float side = sc.nextFloat();
        System.out.println("=: Cube Volume: " + calc.calculateVolume(side));

        System.out.print("[]: Enter length, width, and height of the Rectangular Cube: ");
        double l = sc.nextDouble();
        double w = sc.nextDouble();
        double h = sc.nextDouble();
        System.out.println("=: Rectangular Cube Volume: " + calc.calculateVolume(l, w, h));

        sc.close();
    }
}
