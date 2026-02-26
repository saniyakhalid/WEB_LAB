const calculateResult = (marks) => {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / (marks.length * 100)) * 100;
    
    console.log("Total Marks:", total);
    console.log("Percentage:", percentage + "%");
};
calculateResult([85, 90, 84, 88, 92]);