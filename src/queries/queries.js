import { gql } from '@apollo/client';

//place query directly after (no space) between ``
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

const ADD_BOOK_MUTATION=gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

const GET_BOOK_QUERY=gql`
    query($id: ID!){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`

export { GET_BOOKS_QUERY, GET_AUTHORS_QUERY, ADD_BOOK_MUTATION, GET_BOOK_QUERY }