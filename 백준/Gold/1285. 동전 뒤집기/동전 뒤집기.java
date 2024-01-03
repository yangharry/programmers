import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int N = Integer.parseInt(br.readLine());
        boolean[][] coins = new boolean[N][N];

        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < N; j++) {
                coins[i][j] = line.charAt(j) == 'T';
            }
        }

        int minFlips = Integer.MAX_VALUE;

        for (int bit = 0; bit < (1 << N); bit++) {
            int filps = 0;
            for (int i = 0; i < N; i++) {
                int count = 0;
                for (int j = 0; j < N; j++) {
                    boolean current = coins[i][j];

                    if ((bit & (1 << j)) != 0) {
                        current = !current;
                    }

                    if (current)
                        count++;
                }
                filps += Math.min(count, N - count);
            }

            minFlips = Math.min(minFlips, filps);
        }

        System.out.println(minFlips);
        br.close();
    }
}
