function fibonacci(num) {
    if (num <= 0) {
        return 0;
    } else if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5) {
        return num - 1;
    } else {
        return fibonacci(num - 2) + fibonacci(num - 1);
    }
}

module.exports = fibonacci;

