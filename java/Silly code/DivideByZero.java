class DivideByZero {
    public static void main(String[] args) {
        System.out.println(3 / 0.0); // "Infinity"
        System.out.println(3 / 0); // "java.lang.ArithmeticException: / by zero"
    }

}