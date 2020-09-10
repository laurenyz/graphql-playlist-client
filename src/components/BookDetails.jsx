import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOK_QUERY } from '../queries/queries'



function BookDetails({selected}) {
    const { data } = useQuery(GET_BOOK_QUERY, {variables: {id: selected }})
    const displayBookDetails = () => {
        return(<div id="book-details">
                {data?
                <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="all-the-books">
                        {data.book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>
                        })}
                    </ul>
                </div>
                :<p>Click on a book to see details</p>
                }
            </div>)
    }

    return (
        <div>
            {displayBookDetails()}
        </div>
    );
 }

export default BookDetails;
