# JS DOM Challenges

These challenges help you practice the concepts in the Javascript DOM lesson.

## About Me

Start with index.html in about_me, and make the following changes.

Add a script tag to the bottom of the HTML body. In the javascript:
- Change the body tag's style so it has a font-family of "Arial, sans-serif".

- Replace each of the spans (nickname, favourites, hometown) with your own information.

- Iterate through each li and change the class to "list-item".

- Create a new img element and set its src attribute to a picture of you. Append that element to the page.

In the HTML head:
- Add a style tag that sets a rule for .list-item to make the colour red.

## The Book List

Start with index.html in book_list. Create a webpage with an h1 of "My Book List".

Add a script tag to the bottom of the page, where all your JS will go.

Use this array of books:
```javascript
    var books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
```

Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

## Bonus challenges
- Use a ul and li to display the books.
- Add an img to each book that links to a URL of the book cover.
- Add a checkbox to mark a book has been read. Add event handling for the checkbox that changes the style of the book title when it has been read.

A solution for these challenges can be found in the **challenge-complete** branch.