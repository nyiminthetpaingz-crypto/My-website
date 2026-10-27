let score = 82;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

let dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Wednesday":
        console.log("Midweek! Hang in there.");
        break;
    case "Friday":
        console.log("TGIF! The weekend is almost here.");
        break;
    default:
        console.log("Just another regular day.");
        break;
}

for (let i = 1; i <= 3; i++) {
    console.log("For loop count: " + i);
}

let count = 1;

while (count <= 3) {
    console.log("While loop count: " + count);
    count++;
}

let num = 5;

do {
    console.log("Do-while num: " + num);
    num++;
} while (num < 5);