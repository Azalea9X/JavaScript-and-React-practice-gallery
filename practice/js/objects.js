function createPerson(name, age, city) {
    /*
     This function creates a Person object with the provided name, age, and city.
  
     Args:
         name: The name of the person (string).
         age: The age of the person (integer).
         city: The city where the person lives (string).
  
     Returns:
         A Person object with the specified properties.
     */
  
    // Define the Person object
    const person = {
      name: name,
      age: age,
      city: city,
      greet: function() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.city}.`);
      },
    };
  
    return person;
  }
  
  // Example usage:
  let person1 = createPerson("Alice", 30, "New York");
  person1.greet(); // Output: Hello, my name is Alice and I am from New York.

  function updateAge(person, newAge, name, location) {
    /*
     This function updates the age property of a Person object.
  
     Args:
         person: The Person object to modify.
         newAge: The new age value (integer).
     */
  
    person.age = newAge;
    console.log(`${person.name}'s new age is ${person.age}.`);
    person.name = name; 
    person.location
  }
  
  // Example usage:
  updateAge(person1, 31); // Output: Alice's new age is 31.

  function createBook(title, author, rating) {
    /*
     This function creates a Book object using a simpler object literal syntax.
  
     Args:
         title: The title of the book (string).
         author: The author of the book (string).
  
     Returns:
         A Book object with the specified properties.
     */
  
    return {
      title: title,
      author: author,
      getInfo() {
        console.log(`Book: ${this.title} by ${this.author}`);
      },
      getRating() {
        console.log(`This book's rating: ${this.rating}`)
      },
      rating: rating
    };
  }



  // Example usage:


  let book1 = createBook("The Lord of the Rings", "J.R.R. DDDD", 3);
  let book2 = createBook("The Hobbit", "J.R.R. Tolkien", 5);
 

  book1.getInfo(); // Output: Book: The Lord of the Rings by J.R.R. Tolkien
book1.getRating();
book2.alert = () => {
    alert("Hi!!!"); 
}

//book2.alert();

  book2.getInfo(); // Output: Book: The Hobbit by J.R.R. Tolkien
book2.getRating();
  // Example usage:
  let person2 = createPerson("Alice", 30, "New York");