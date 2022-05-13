export  const ADD_BOOK = 'BOOKS::ADD_BOOK';
export  const DELETE_BOOK = 'BOOKS::DELETE_BOOK';
export  const SORT_BOOK = 'BOOKS::SORT_BOOK';

export const addBook = (id, name, author, year, rating, isbn) => ({
    type: ADD_BOOK,
    payload:
        id,
        name,
        author,
        year,
        rating,
        isbn,
})
export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload:
        id
})
export const sortBook = (id,  name, author) => ({
    type: SORT_BOOK,
    payload:
        id,
        name,
        author,
})