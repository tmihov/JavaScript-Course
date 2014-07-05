"use strict";

$(document).ready(function() {
  var allBooks = [];

  $.getJSON("http://localhost:3000/books", function(books, textStatus) {
      console.log(textStatus);
      console.log(books);
      allBooks = books;

      var booksContent = [];
      books.forEach(function(book) {
        var bookContent = [];
        bookContent += ["<div class=\"col-xs-4\">",
                "<h3>", book.title, "</h3>",
                "<img src=\"",  book.image_url, "\">",
                "<p>Averege rating:", book.average_rating, "</p>",
                "<p>ISBN:", book.isbn, "</p>",
                "<button class=\"btn btn-info\">Read description</button>",
                "<button class=\"btn btn-success\">Add to Cart</button>",
                "</div>"
        ].join("");
        booksContent.push(bookContent);
      });
      console.log(booksContent);
      var table = [];
      var c = 0;
      table += "<div class=\"row\">";
      booksContent.forEach(function(content) {
        if(c === 3) {
          table += ["</div>", "<div class=\"row\">",
                    content
          ].join("");
          c = 1;
        } else {
          table += content;
          c++;
        }
      });
      $("#books").append(table);
  });
});
