import java.io.*;
import java.util.*;

class Meeting implements Comparable<Meeting> {
    int start;
    int end;

    Meeting(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public int compareTo(Meeting o) {
        if (this.end == o.end) {
            return this.start - o.start;
        }
        return this.end - o.end;
    }
}

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine());
        Meeting[] meetings = new Meeting[n];
        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            meetings[i] = new Meeting(start, end);
        }

        Arrays.sort(meetings);
        int answer = 0;
        int lastEnd = 0;
        for (Meeting meeting : meetings) {
            if (meeting.start >= lastEnd) {
                lastEnd = meeting.end;
                answer++;
            }
        }
        System.out.println(answer);
    }

}
