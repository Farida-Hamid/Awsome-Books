export default class Library {
  constructor() {
    this.bookList = this.get();
  }

  display = (book) => {
    const list = document.querySelector('.books');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}"</td>&nbspby &nbsp
      <td>${book.author}</td>
      <button class="cancel">Remove</button>`;
    list.appendChild(row);
  }

  displayAll = () => {
    if (this.bookList) {
      this.bookList.forEach((book) => this.display(book));
    }
  }

  get = () => {
    let list;
    const data = localStorage.getItem('memory');
    if (!data) {
      list = [];
    } else {
      list = JSON.parse(data);
    }
    return list;
  }

  add = (book) => {
    this.bookList.push(book);
    localStorage.setItem('memory', JSON.stringify(this.bookList));
  }

  delete = (writer) => {
    this.bookList.forEach((book, index) => {
      if (book.author === writer) {
        this.bookList.splice(index, 1);
      }
    });
    localStorage.setItem('memory', JSON.stringify(this.bookList));
  }
}
