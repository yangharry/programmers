import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int N = Integer.parseInt(br.readLine());
        int[] values = { 1, 5, 10, 50 };

        Set<Integer> uniqueSums = new HashSet<>();

        generateCombinations(values, N, 0, 0, uniqueSums);

        System.out.println(uniqueSums.size());

    }

    private static void generateCombinations(int[] values, int remaining, int currentIndex, int currentSum,
            Set<Integer> uniqueSums) {
        if (remaining == 0) {
            uniqueSums.add(currentSum);
            return;
        }

        for (int i = currentIndex; i < values.length; i++) {
            generateCombinations(values, remaining - 1, i, currentSum + values[i], uniqueSums);
        }
    }

}