function CalculatebinaryNumber(num: number): number {
    if (num === 0) return 0;
    let binary = 0;
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

const binaryNumber = 