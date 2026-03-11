class A {
    void show() {
        System.out.println("\n[A]: This is from AAAAA");
    }
}

class B extends A {
    void display() {
        System.out.println("\n[B]: This is from BBBBB");
    }

    public static void main(String[] args) {
        B b = new B();
        b.show();
        b.display();
    }
}