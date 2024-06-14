// Simple Math Functions

function findArea(width, height) {
    console.log("Area:", width * height);
  }
  
  function calculatePerimeter(side) {
    console.log("Perimeter:", side * 4);
  }
  
  // String Manipulation Functions
  
  function convertToUppercase(text) {
    console.log("Uppercase:", text.toUpperCase());
  }
  
  function countCharacters(text) {
    console.log("Character Count:", text.length);
  }
  
  // Basic Finance Functions
  
  function calculateSimpleInterest(principal, rate, time) {
    const interest = principal * rate * time;
    console.log("Simple Interest:", interest);
  }
  
  function calculateGrossProfit(revenue, cost) {
    const profit = revenue - cost;
    console.log("Gross Profit:", profit);
  }
  
  function addScore(home, away) {
    if (home > away) {
        console.log("Well done!!!"); 
    }
    else {
        console.log("Try again!")
    }
  }
  // Example Usage
  findArea(35, 64);
  calculatePerimeter(10);
  convertToUppercase("hello world");
  countCharacters("JavaScript");
  calculateSimpleInterest(1000, 0.05, 2);
  calculateGrossProfit(5000, 3000);
  addScore(35, 66);