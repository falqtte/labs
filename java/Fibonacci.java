public class Fibonacci {
    public static void main(String[] args) {
        int j = 0;
        int i = 1;
        System.out.print(j + " " + i + " ");

        while (i < 100) {
            i += j;
            j = i - j;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
// 0 1 1 2 3 5 8 13 21 34 55 89 144