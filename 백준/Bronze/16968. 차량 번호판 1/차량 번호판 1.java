import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int spelling = 26;
        int number = 10;

        String input = br.readLine();
        char[] chars = input.toCharArray();

        long count = 1;
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == 'c') {
                if (i != 0 && chars[i - 1] == 'c') {
                    count *= spelling - 1;
                } else {
                    count *= spelling;
                }
            } else if (chars[i] == 'd') {
                if (i != 0 && chars[i - 1] == 'd') {
                    count *= number - 1;
                } else {
                    count *= number;
                }
            }
        }

        System.out.println(count);

    }

}