import java.util.Scanner;

abstract class Shape {
    abstract double area();
}

class Triangle extends Shape {
    double base, height;

    Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    double area() {
        return 0.5 * base * height;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class Shapes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("[]: Enter base and height for Triangle:");
        int base = sc.nextInt();
        int height = sc.nextInt();

        System.out.println("[]: Enter length and width for Rectangle:");
        int length = sc.nextInt();
        int width = sc.nextInt();

        System.out.println("[]: Enter radius for Circle:");
        int radius = sc.nextInt();

        Shape triangle = new Triangle(base, height);
        Shape rectangle = new Rectangle(length, width);
        Shape circle = new Circle(radius);

        System.out.println("\n=: Triangle  area: " + triangle.area());
        System.out.println("=: Rectangle area: " + rectangle.area());
        System.out.println("=: Circle    area: " + circle.area());

        sc.close();
    }
}