// ==========================================
// SECTION 1: PRACTICAL CODING TASKS
// ==========================================

// --- Task 1: Dynamic Property Access ---
const user = {
    username: "srija_dev",
    email: "srija@example.com",
    city: "Hyderabad"
};

// Simulate prompt or handle via a function:
function getUserDetail(detailKey) {
    if (user[detailKey] !== undefined) {
        return user[detailKey];
    } else {
        return "Detail not available";
    }
}

// Example usage:
console.log("Task 1 (email):", getUserDetail("email"));       // srija@example.com
console.log("Task 1 (address):", getUserDetail("address"));   // Detail not available


// --- Task 2: Object Transformation ---
const marks = {
    math: 70,
    english: 65,
    science: 80
};

const updatedMarks = {
    math: marks.math + 5,
    english: marks.english + 5,
    science: marks.science + 5
};

console.log("Task 2 Output:", "The values of updatedMarks are:", updatedMarks);


// --- Task 3: Object Property Manipulation ---
const book = {
    title: "The Mystery Box",
    author: "A. Writer",
    publishedYear: 2010,
    isAvailable: true
};

// 1. Change title to "The secret key"
book.title = "The secret key";

// 2. Add a new property genre: "Thriller"
book.genre = "Thriller";

// 3. Remove isAvailable
delete book.isAvailable;

// 4. Remove author using bracket notation
delete book["author"];

console.log("Task 3 Updated Book Object:", book);


// --- Task 4: Product Object with Methods ---
const product = {
    name: "Laptop",
    price: 1000,
    discount: 10,
    calculateFinalPrice() {
        return this.price - (this.price * (this.discount / 100));
    },
    updateDiscount(newDiscount) {
        this.discount = newDiscount;
        console.log(`Final price after new discount is: ${this.calculateFinalPrice()}`);
    }
};

console.log("Task 4 Initial Final Price:", product.calculateFinalPrice()); // Returns 900
product.updateDiscount(20); // Logs: "Final price after new discount is: 800"