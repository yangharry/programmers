import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        char[][] board = new char[N][M];
        List<int[]> crosses = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            board[i] = br.readLine().toCharArray();
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (board[i][j] == '*') {
                    int size = 0;
                    while (isCross(board, i, j, size + 1)) {
                        size++;
                    }
                    if (size > 0) {
                        crosses.add(new int[] { i, j, size });
                    }
                }
            }
        }

        char[][] reconstructed = new char[N][M];
        for (int i = 0; i < N; i++) {
            Arrays.fill(reconstructed[i], '.');
        }

        for (int[] cross : crosses) {
            int x = cross[0], y = cross[1], size = cross[2];

            reconstructed[x][y] = '*';
            for (int i = 1; i <= size; i++) {
                if (x + i < N)
                    reconstructed[x + i][y] = '*';
                if (y + i < M)
                    reconstructed[x][y + i] = '*';
                if (x - i >= 0)
                    reconstructed[x - i][y] = '*';
                if (y - i >= 0)
                    reconstructed[x][y - i] = '*';
            }
        }

        if (Arrays.deepEquals(board, reconstructed)) {
            System.out.println(crosses.size());
            for (int[] cross : crosses) {
                System.out.println((cross[0] + 1) + " " + (cross[1] + 1) + " " + cross[2]);
            }
        } else {
            System.out.println(-1);
        }

    }

    private static boolean isCross(char[][] board, int x, int y, int size) {
        int N = board.length;
        int M = board[0].length;

        // 격자판 안에 있으면서 * 인경우 true
        return x - size >= 0 && x + size < N && y - size >= 0 && y + size < M && board[x - size][y] == '*'
                && board[x + size][y] == '*' && board[x][y - size] == '*' && board[x][y + size] == '*';
    }

}