import {ADD_BOOK, DELETE_BOOK, SORT_BOOK} from "./actions";

const initialState = [
    {   id:1,
        name:'Идеальный программист. Как стать профессионалом разработки ПО',
        author:'Роберт Мартин',
        year: 2011,
        rating: 5,
        isbn:'978-5-459-01044-2'
    },
    {   id:2,
        name:'Интрижки мишки',
        author:'Елена Галенко',
        year: 2021,
        rating: '',
        isbn:''
    },
    {   id:3,
        name:'7 навыков высокоэффективных людей',
        author:'Стивен Кови',
        year: 1989,
        rating: 5,
        isbn:' 978-5-9614-2021-0'
    },
    {   id:4,
        name:'Чистый код: создание, анализ и рефакторинг',
        author:'Роберт Мартин',
        year: '',
        rating: 5,
        isbn:'978-5-496-00487-9'
    },
    {   id:5,
        name:'Джордж и Большой взрыв',
        author:'Стивен Хокинг, Люси Хокинг',
        year: 2011,
        rating: 5,
        isbn:'978-5-4370-0089-2'
    },
]

export const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_BOOK:
            return [
                ...state,
                {   id:action.payload.id,
                    name: action.payload.name,
                    author: action.payload.author,
                    year: action.payload.year,
                    rating: action.payload.rating,
                    isbn: action.payload.isbn,
                }
            ]

        case  DELETE_BOOK:
            return state.filter(({id}) =>id !== action.payload)
        // setBooks(books.filter(b => b.id !== book.id))
        case  SORT_BOOK:
            return [...state].sort((a,b) => a[action.payload].localeCompare(b[action.payload]))
        // setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
        default:
            return state
    }
}