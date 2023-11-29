import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        String[] inputs = br.readLine().split(" ");
        int a = Integer.parseInt(inputs[0]);
        int b = Integer.parseInt(inputs[1]);
        int c = Integer.parseInt(inputs[2]);
        int d = Integer.parseInt(inputs[3]);
        int e = Integer.parseInt(inputs[4]);

        long price = 0;
        if (a + b >= c * 2) {
            int minNum = d > e ? e : d;
            int maxNum = d < e ? e : d;
            int f = d > e ? a : b;
            if (b >= c * 2 && e > d) {
                price = c * maxNum * 2;
            } else if (a >= c * 2 && d > e) {
                price = c * maxNum * 2;

            } else {
                price += c * minNum * 2;
                price += (d + e - minNum * 2) * f;

            }
        } else {
            price += a * d;
            price += b * e;
        }

        System.out.println(price);
    }

}