// Sample Arrays
const numbers = [3, 10, 1, 8, 5];
const fruits = ["apple", "banana", "orange", "cherry"];
const mixedData = [23, "hello", true, null];
const scores = [5, 2, 3, 6, 9, 11, 13]; 

const validScores = []; 
// Looping with for loop
function forLoopExample(arr) {
  console.log("** for loop iteration:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function checkScore() {
  // Prompt for comma-separated numbers once outside the loop
  let values = prompt("Please enter a comma-separated series of numbers:");
  // Split the string into an array of numbers
  let numbers1 = values.split(",");
  // Loop through each number in the array
  for (num of numbers1) {
    validScores.push(values); 
  }
    // Loop through each number in the array
    for (let num of numbers) {
      // Convert the string to a number and trim in one step using Number(num.trim())

      let number = Number(num);

      // Check if the conversion is valid (not NaN)
      if (!isNaN(number)) {
        // Use the converted number for calculations
        for (let score of scores) {
          if (number > score) {
            validScores.push(number);
            console.log("Valid scores: " + validScores);
          }
        }
      } else {
        console.log("Invalid input found in the list. Please enter only numbers separated by commas.");
      }
    }
  }


// Looping with for...of loop
function forOfLoopExample(arr) {
  console.log("** for...of loop iteration:");
  for (const element of arr) {
    console.log(element);
  }
}

// Looping with forEach method
function forEachExample(arr) {
  console.log("** forEach method iteration:");
  arr.forEach((element) => console.log(element));
}

// Sorting with built-in sort method (ascending order)
function sortAscending(arr) {
  console.log("** Sorted array (ascending):");
  console.log(arr.sort());
}

// Sorting with built-in sort method (descending order)
function sortDescending(arr) {
  console.log("** Sorted array (descending):");
  console.log(arr.sort((a, b) => b - a));
}

// Simple Bubble Sort (sorting algorithm)
function bubbleSort(arr) {
  console.log("** Bubble Sort (ascending):");
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

// Function Calls (Modify array names for specific output)
forLoopExample(numbers);
forOfLoopExample(fruits);
forEachExample(mixedData);
sortAscending(numbers.slice()); // Create a copy to avoid modifying original array
sortDescending(fruits.slice());
bubbleSort(numbers.slice()); // Create a copy to avoid modifying original array

checkScore();