import java.io.*;
import java.util.*;

class Main {

    private static int N;
    private static boolean[][] coins;
    private static int minFlips;

    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        N = Integer.parseInt(br.readLine());

        coins = new boolean[N][N];
        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < N; j++) {
                coins[i][j] = line.charAt(j) == 'T';
            }
        }

        minFlips = Integer.MAX_VALUE;
        dfs(0);
        System.out.println(minFlips);
    }

    private static void dfs(int column) {
        if (column == N) {
            calculateMinFlips();
            return;
        }

        dfs(column + 1);

        for (int i = 0; i < N; i++) {
            coins[i][column] = !coins[i][column];
        }
        dfs(column + 1);
        for (int i = 0; i < N; i++) {
            coins[i][column] = !coins[i][column];
        }
    }

    private static void calculateMinFlips() {
        int totalFlips = 0;
        for (int i = 0; i < N; i++) {
            int count = 0;
            for (int j = 0; j < N; j++) {
                if (coins[i][j])
                    count++;
            }
            totalFlips += Math.min(count, N - count);
        }
        minFlips = Math.min(minFlips, totalFlips);
    }
}
