import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import static java.lang.System.exit;

public class Main {
    public static void main(String[] args) throws IOException {
        final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] lines = br.readLine().split("\\s+");
        int index = Integer.parseInt(lines[0]);
        int length = Integer.parseInt(lines[1]);
        int[][] squares = new int[index][length];
        for (int i = 0; i < index; i++) {
            int[] x = Arrays.stream(br.readLine().split(""))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            squares[i] = x;
        }

        int currentLength = Math.min(index, length);
        while(currentLength > 1) {
            for (int i = 0; i <= index - currentLength; i++) {
                for (int j = 0; j <= length - currentLength; j++) {
                    int value = squares[i][j];
                    if (value == squares[i][j + currentLength - 1]
                            && value == squares[i + currentLength - 1][j]
                            && value == squares[i + currentLength - 1][j + currentLength - 1]) {
                        System.out.println(currentLength * currentLength);
                        return;
                    }
                }
            }
            currentLength--;
        }
        System.out.println(currentLength * currentLength);
    }
}