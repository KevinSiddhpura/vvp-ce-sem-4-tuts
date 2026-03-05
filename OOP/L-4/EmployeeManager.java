class Employee {
    String name;
    String dept;

    Employee(String name, String dept) {
        this.name = name;
        this.dept = dept;
    }

    void displayDetails() {
        System.out.println("[]: Employee Details");
        System.out.println("=: Name: " + name);
        System.out.println("=: Department: " + dept);   
    }
}

class Manager extends Employee {
    String project;
    int teamSize;

    Manager(String name, String dept, String project, int teamSize) {
        super(name, dept);
        this.project = project;
        this.teamSize = teamSize;
    }

    @Override
    void displayDetails() {
        System.out.println("[]: Manager Details");
        System.out.println("=: Name: " + name);
        System.out.println("=: Department: " + dept);   
        System.out.println("=: Project: " + project);   
        System.out.println("=: Team Size: " + teamSize);   
    }
}

class EmployeeManager {
    public static void main(String[] args) {
        Employee employee = new Employee("Yash", "C.E.");
        employee.displayDetails();

        System.out.println("\n");

        Manager manager = new Manager("Kevin", "C.E.", "Project X", 5);
        manager.displayDetails();   
    }
}