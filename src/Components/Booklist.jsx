// // потом это удалить
//
// import React from 'react';
// import {useDispatch} from "react-redux";
// import BookItem from "./BookItem/BookItem";
//
// const Booklist = ({book, deleteBook}) => {
//     const dispatch = useDispatch();
//
//     return (
//         <div>
//             {book.map((book, index) =>
//                 <BookItem number={index+1} book={book} key={book.id} deleteBook={deleteBook}/>
//             )}
//         </div>
//     );
// };
//
// export default Booklist;
//
//
// // //1. короче пока сделать без редакс потом уже перенести,
// // // а то так не понятно как что работает
// // //переносить после просмотра видео на юдеми
//
//
