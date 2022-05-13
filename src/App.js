import './App.css';
import React, {useState} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import CatalogYear from "./Components/CatalogYear";
import CustomForm from "./Components/Form/Form";
import Select from "./Components/Filter/select";
import {selectBooks} from "./store/book/selectors";
import {addBook, removeBook} from "./store/book/actions";
import BookBlock from "./Components/BookBlock";


function App() {

    // const books = useSelector(selectBooks);
    // const dispatch = useDispatch();
    // // const [books, setBooks] = useState([
    // //     {   id:1,
    // //         name:'Идеальный программист. Как стать профессионалом разработки ПО',
    // //         author:'Роберт Мартин',
    // //         year: 2011,
    // //         rating: 5,
    // //         isbn:'978-5-459-01044-2'
    // //     },
    // //     {   id:2,
    // //         name:'Интрижки мишки',
    // //         author:'Елена Галенко',
    // //         year: 2021,
    // //         rating: '',
    // //         isbn:''
    // //     },
    // //     {   id:3,
    // //         name:'7 навыков высокоэффективных людей',
    // //         author:'Стивен Кови',
    // //         year: 1989,
    // //         rating: 5,
    // //         isbn:' 978-5-9614-2021-0'
    // //     },
    // //     {   id:4,
    // //         name:'Чистый код: создание, анализ и рефакторинг',
    // //         author:'Роберт Мартин',
    // //         year: '',
    // //         rating: 5,
    // //         isbn:'978-5-496-00487-9'
    // //     },
    // //     {   id:5,
    // //         name:'Джордж и Большой взрыв',
    // //         author:'Стивен Хокинг, Люси Хокинг',
    // //         year: 2011,
    // //         rating: 5,
    // //         isbn:'978-5-4370-0089-2'
    // //     },
    // // ]);
    //
    // const [selectedSort, setSelectedSort] = useState('');
    //
    //
    // const createNewBook = (newBook) => {
    //     // setBooks([...books, newBook])
    //     dispatch(addBook(newBook));
    // }
    //
    // const deleteBook = (book) => {
    //     // setBooks(books.filter(b => b.id !== book.id))
    //     dispatch(removeBook(book));
    // }


    // const sortPosts = (sort) => {
    //     setSelectedSort(sort)
    //     setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
    // }


  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App" >
            <BookBlock/>
          </div>
        </PersistGate>
      </Provider>

  );
}

export default App;

// 1.Перенести все на Редакс,
// 2. Подключить Firebase(Firestore - разобраться в чем отличие)
// 3. Сделать рекомендуемую книгу
// 4. Поправить дизайн на нормальное что то

// рекомендованную книгу как выводить не могу найти инфо.. может быть сделать отдельный компонент,
// и проходясь по массиву с книгами найти подхощую и вывести в компоненте...