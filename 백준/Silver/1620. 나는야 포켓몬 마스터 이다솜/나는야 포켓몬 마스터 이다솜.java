import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        String osName = System.getProperty("os.name").toLowerCase();
        boolean isLinux = osName.contains("linux");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(isLinux ? System.in : new FileInputStream("ex0.txt")));

        int n, m;
        Map<Integer, String> indexToName = new HashMap<>();
        Map<String, Integer> nameToIndex = new HashMap<>();

        String[] line = br.readLine().split(" ");

        n = Integer.parseInt(line[0]);
        m = Integer.parseInt(line[1]);

        for (int i = 0; i < n; i++) {
            String name = br.readLine();
            indexToName.put(i + 1, name);
            nameToIndex.put(name, i + 1);
        }

        for (int i = 0; i < m; i++) {
            String monster = br.readLine();
            if (Character.isDigit(monster.charAt(0))) {
                int index = Integer.parseInt(monster);
                System.out.println(indexToName.get(index));
            } else {
                System.out.println(nameToIndex.get(monster));
            }
        }

    }

}