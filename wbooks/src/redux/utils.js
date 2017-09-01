export function shouldIncludeBook(book, field, filter) {
  return book[field].indexOf(filter) !== -1;
}
