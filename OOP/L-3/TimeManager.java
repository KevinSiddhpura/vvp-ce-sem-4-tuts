import java.util.Scanner;

class Time {
    int hours;
    int minutes;

    void setTime(int h, int m) {
        this.hours = h;
        this.minutes = m;
    }

    void displayTime() {
        System.out.println(hours + ":" + minutes);
    }

    void addTime(Time t1, Time t2) {
        int totalMinutes = t1.minutes + t2.minutes;
        int extraHours = totalMinutes / 60;
        
        this.minutes = totalMinutes % 60;
        this.hours = t1.hours + t2.hours + extraHours;
    }
}

public class TimeManager {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("[]: Enter first time (hours & minutes):");
        int h1 = sc.nextInt();
        int m1 = sc.nextInt();
        
        System.out.println("[]: Enter second time (hours & minutes):");
        int h2 = sc.nextInt();
        int m2 = sc.nextInt();

        Time t1 = new Time();
        t1.setTime(h1, m1);

        Time t2 = new Time();
        t2.setTime(h2, m2);

        Time result = new Time();
        result.addTime(t1, t2);

        System.out.println("=: Time 1: ");
        t1.displayTime();

        System.out.print("=: Time 2: ");
        t2.displayTime();

        System.out.println("\n=: Total Added Time: ");
        result.displayTime();
        
        sc.close();
    }
}
