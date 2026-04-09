public class Cli {
    public static void printf(String s) {
        System.out.println(s);
    }

	public static void main(String[] args) {
		try {
			if (args.length != 2) {
				throw new IllegalArgumentException("Usage: java cli <n> <d>");
			}

			int n = Integer.parseInt(args[0]);
			int d = Integer.parseInt(args[1]);

			int result = n / d;

            printf("N: " + n);
            printf("D: " + d);

            printf("Result: " + result);
		
        } catch(ArithmeticException e) {
            printf("ArithmeticException: D can not be 0.");
        } catch(NumberFormatException e) {
            printf("NumberFormatException: Enter valid numbers.");
        } catch(Exception e) {
            printf("Exception: " + e.getMessage());
        } finally {
            printf("Program Finished");
		}
	}
}
