class Student {
    Student() {
        System.out.println("[]: Default Const Bro");
    }

    Student(int A, int B) {
        int C = A + B;
        System.out.println("[]: Sum of " + A + " + " + B + " = " + C);
    }

    public static void main(String[] args) {
        new Student();
        new Student(1, 2);
    }
}