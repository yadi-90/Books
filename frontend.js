const bookList = document.getElementById("bookList");

// Fetch books data from the backend API
fetch("/api/books")
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create elements for each book
    data.forEach(book => {
      const bookContainer = document.createElement("div");
      // ... create and append book elements as you did before
      bookList.appendChild(bookContainer);
    });
  })
  .catch(error => {
    console.error("Error fetching books:", error);
  });
