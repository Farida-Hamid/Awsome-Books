import Library from './modules/display.js';
import { DateTime } from './modules/luxon.js';

const bookList = new Library();

document.addEventListener('DOMContentLoaded', bookList.displayAll());

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = { title, author };
  bookList.display(book);
  bookList.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  const writer = e.target.previousElementSibling.textContent;
  bookList.delete(writer);
  e.target.parentElement.remove();
});

// Show date and time
const dateTime = document.querySelector('#date');

const time = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateTime.innerHTML = currentDateTime;
};

setInterval(time);