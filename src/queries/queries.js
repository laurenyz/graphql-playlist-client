import { gql } from '@apollo/client';

const GET_BOOKS_QUERY=gql` 
    {
        books{
            name
            id
        }
    }
`

const GET_AUTHORS_QUERY=gql` 
    {
        authors{
            name
            id
        }
    }
`

export { GET_BOOKS_QUERY, GET_AUTHORS_QUERY }