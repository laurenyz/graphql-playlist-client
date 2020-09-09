import React from 'react';
import { useQuery,  } from '@apollo/client';
import { GET_BOOK_QUERY } from '../queries/queries'
//place query directly after (no space) between ``

function BookDetails() {
    const { loading, data } = useQuery(GET_BOOK_QUERY)

    return (
        <div>
            <div id="book-details">
                <p>Output book details here</p>
            </div>
        </div>
    );
 }

export default BookDetails;
