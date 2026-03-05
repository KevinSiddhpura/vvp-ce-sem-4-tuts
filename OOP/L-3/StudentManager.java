import java.util.Scanner;

class Student {
    String name;
    String department;
    double s1;
    double s2;
    double s3;
    double perc;

    void readStudent(Scanner sc) {
        System.out.print("[]: Enter name: ");
        name = sc.nextLine();
        
        System.out.print("[]: Enter department: ");
        department = sc.nextLine();
        
        System.out.println("[]: Enter marks for 3 subjects: ");
        s1 = sc.nextDouble();
        s2 = sc.nextDouble();
        s3 = sc.nextDouble();

        perc = (s1 + s2 + s3) / 3.0;
    }

    void showStudent() {
        System.out.println("=: Name: " + name + " | Dept: " + department + " | Perc: " + perc + "%");
    }
}

class StudentManager {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student[] s = new Student[5];

        System.out.println("--- Enter Details for 5 Students ---");
        for (int i = 0; i < 5; i++) {
            System.out.println("\nStudent " + (i + 1) + ":");
            s[i] = new Student();
            s[i].readStudent(sc);
        }

        for (int i = 0; i < s.length - 1; i++) {
            for (int j = 0; j < s.length - i - 1; j++) {
                if (s[j].perc < s[j + 1].perc) {
                    Student temp = s[j];
                    s[j] = s[j + 1];
                    s[j + 1] = temp;
                }
            }
        }

        System.out.println("\n--- Student Details ---");
        for (int i = 0; i < 5; i++) {
            s[i].showStudent();
        }

        sc.close();
    }
}