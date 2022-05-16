import React from 'react';
import RecomBookItem from "./RecomBookItem";
import MyButton from "../MyButton/MyButton";
import s from './RecomBook.module.css'


const RecomBook = ({recomBooks, recommendationBook2, isBookLoading}) => {
    return (
        <div className={s.recomBookBlock}>
            <h1>Рекомендуем книгу для прочтения:</h1>
            {/*{isBookLoading === true*/}
                 <div>
                    {recomBooks.map((book, index) => (
                        <div key={book.id}>
                            <RecomBookItem book={book}   />
                        </div>
                    ))}
                </div>
                 {/*: <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>Рекомендуемых книг пока нет или нажмите кнопку ниже</div>*/}
             {/*}*/}
            <MyButton onClick={recommendationBook2} >Посмотреть рекомендуемую книгу </MyButton>
        </div>
    );
};



export default RecomBook;