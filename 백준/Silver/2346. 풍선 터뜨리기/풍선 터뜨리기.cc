#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;
    
    std::vector<int> input(n);
    for (int i = 0; i < n; ++i) {
        std::cin >> input[i];
    }

    std::vector<bool> popped(n, false);
    std::vector<int> answer;
    int remaining = n;
    int index = 0;

    while (remaining > 0) {
        int steps = input[index];
        popped[index] = true;
        answer.push_back(index + 1);
        remaining--;

        if (remaining == 0) break;

        int moveCount = std::abs(steps);
        while (moveCount > 0) {
            index = (index + (steps > 0 ? 1 : -1) + n) % n;
            if (!popped[index]) {
                moveCount--;
            }
        }
    }

    for (int num : answer) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
