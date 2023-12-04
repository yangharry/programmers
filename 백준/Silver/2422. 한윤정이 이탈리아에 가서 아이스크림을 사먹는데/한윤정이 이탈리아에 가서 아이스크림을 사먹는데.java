import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        boolean[][] pair = new boolean[n+1][n+1];

        for(int i=0; i<m; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            pair[x][y] = true;
            pair[y][x] = true;
        }

        int answer = 0;
        for(int i=1; i<=n; i++) {
            for(int j=i+1; j<=n; j++) {
                if(pair[i][j]) continue;
                for(int k=j+1; k<=n; k++) {
                    if(!pair[i][k] && !pair[j][k]) {
                        answer++;
                    }
                }
            }
        }

        System.out.println(answer);
    }
}
