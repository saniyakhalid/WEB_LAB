const calculateAverage = (...numbers) => {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
};

// Example
console.log("Average:", calculateAverage(88,87,86,89,90));