import java.util.Scanner;

class Employee {
    private String employeeName;
    private double employeeSalary;

    public void readEmployeeData(Scanner sc) {
        System.out.print("[]: Enter name: ");
        employeeName = sc.nextLine();
        
        System.out.print("[]: Enter salary: ");
        employeeSalary = sc.nextDouble();
    }

    public void displayEmployeeData() {
        System.out.println("=: Name : " + employeeName + " | Salary: " + employeeSalary);
    }
}

class EmployeeManager {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Employee emp = new Employee();

        System.out.println("--- Enter Details  ---");
        emp.readEmployeeData(sc);

        System.out.println("\n--- Employee Details ---");
        emp.displayEmployeeData();

        sc.close();
    }
}