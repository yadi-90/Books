
import BOOKS from "./books";

const bookList = document.getElementById("bookList");


BOOKS.forEach(book => {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");


    const bookDetails = document.createElement("div");
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Published:</strong> ${book.publish_date}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
    `;

    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookDetails);

    bookList.appendChild(bookContainer);
});



