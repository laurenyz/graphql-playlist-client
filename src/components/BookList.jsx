import React from 'react';
import { useQuery,  } from '@apollo/client';
import { GET_BOOKS_QUERY } from '../queries/queries'
//place query directly after (no space) between ``

function BookList() {
    // const { loading, error, data } = useQuery(GET_BOOKS_QUERY)
    const { loading, data } = useQuery(GET_BOOKS_QUERY)
    // console.log(loading, data)

    const displayBooks = () => {
        if(loading){
            return(<div>LoadingBooks...</div>)
        } else {
            return data.books.map(book => {
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }

    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </div>
    );
 }

export default BookList;
