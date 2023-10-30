#include <cstdio>
#include <utility>

int main(void) {
    std::pair<int, int> B[1000]; 
    int N; scanf("%d", &N);
    for (int i = 0; i < N; i++) scanf("%d", &B[i].second), B[i].first = i + 1;

    int count = 0, i = 0;
    while (--N) {
        printf("%d ", B[i].first);
        count = B[i].second;
        for (int k = i; k < N; k++) B[k] = B[k + 1];
        if (count > 0) {
            count--;
            i = (count % N + i) % N;
        }
        else if (count < 0) {
            count = -count;
            i = (N + i - (count % N)) % N;
        }
        else if (count == 0 && i == N) i = 0;
    }
    printf("%d", B[0]);
}