import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int N = Integer.parseInt(br.readLine());
        int[] T = new int[N + 1];
        int[] P = new int[N + 1];
        int[] benefit = new int[N + 2];

        for (int i = 1; i <= N; i++) {
            String[] line = br.readLine().split(" ");
            T[i] = Integer.parseInt(line[0]);
            P[i] = Integer.parseInt(line[1]);
        }

        for (int i = 1; i <= N; i++) {

            int next = i + T[i];

            if (next <= N + 1) {
                benefit[next] = Math.max(benefit[next], benefit[i] + P[i]);
            }

            benefit[i + 1] = Math.max(benefit[i + 1], benefit[i]);

        }

        System.out.println(benefit[N + 1]);

    }

}
