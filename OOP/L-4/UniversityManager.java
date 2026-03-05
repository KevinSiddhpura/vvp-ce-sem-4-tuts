class University {
    static String universityName;
    static int totalStudents;

    {
        System.out.println("[]: University Object created....");
        totalStudents++;
    }

    static {
        universityName = "GTU";
        System.out.println("[]: Initilizing University: " + universityName);
    }

    int getStudents() {
        return totalStudents;
    }
}

class UniversityManager {
    public static void main(String[] args) {
        University u1 = new University();
        System.out.println("[]: Students: " + u1.getStudents());

        University u2 = new University();
        System.out.println("[]: Students: " + u2.getStudents());
    }
}