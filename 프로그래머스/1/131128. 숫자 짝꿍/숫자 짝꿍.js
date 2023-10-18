function solution(X, Y) {
    const commonNumbers = [...new Set(X.split(''))].filter((number) => {
        return Y.includes(number);
    }).sort((a, b) => b - a)

    if (!commonNumbers.length) return '-1';

    if (!Number(commonNumbers[0])) return '0';

    return commonNumbers.map((number) => {
        const Xcount = X.split('').reduce((count, Xnumber) => {
            if (Xnumber === number) return count += 1;

            return count;
        }, 0)

        const Ycount = Y.split('').reduce((count, Ynumber) => {
            if (Ynumber === number) return count += 1;

            return count;
        }, 0)        

        return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
    }).join('')
}