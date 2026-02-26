class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);
    }

    displayResult() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        const percentage = (total / (this.marks.length * 100)) * 100;
        const result = percentage >= 40 ? "Pass" : "Fail";

        console.log("Total:", total);
        console.log("Percentage:", percentage + "%");
        console.log("Result:", result);
    }
}
const student1 = new Student("Sara", 101, [90, 85, 92]);
student1.displayDetails();
student1.displayResult();