import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int n;
        HashMap<String, Integer> bookSales = new HashMap<>();

        n = Integer.parseInt(br.readLine());
        String bestSaler = "";
        int maxSales = 0;

        for (int i = 0; i < n; i++) {
            String book = br.readLine();
            int sales = bookSales.getOrDefault(book, 0) + 1;
            bookSales.put(book, sales);

            if (sales > maxSales || (sales == maxSales && book.compareTo(bestSaler) < 0)) {
                bestSaler = book;
                maxSales = sales;
            }
        }

        System.out.println(bestSaler);
        br.close();
    }

}