public class Throw_s {

    public static void isAdult(Integer age) throws Exception {
        if (age < 18) {
            throw new Exception("Exception: You are a minor.");
        }

        System.out.println("Congrats, you are an adult.");
    }

    public static void main(String[] args) {
        try {
            if (args.length != 1) {
                throw new IllegalArgumentException("ArgumentMissing: Provide your age as an argument");
            }
            
            isAdult(Integer.parseInt(args[0]));
        } catch (NumberFormatException e) {
            System.out.println("NotNumber: Provide a valid number.");
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}