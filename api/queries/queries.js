import { gql } from 'apollo-boost';

const getUsersQuery = gql`
    {
        user {
            username
            email
        }
    }
`
;

// const getAuthorsQuery = gql`
//     {
//         authors {
//             name
//             id
//         }
//     }
// `;

// const getBooksQuery = gql`
//     {
//         books {
//             name
//             id
//         }
//     }
// `;

// const addBookMutation = gql`
//     mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
//         addBook(name: $name, genre: $genre, authorId: $authorId){
//             name
//             id
//         }
//     }
// `;

// const getBookQuery = gql`
//     query GetBook($id: ID){
//         book(id: $id) {
//             id
//             name
//             genre
//             author {
//                 id
//                 name
//                 age
//                 books {
//                     name
//                     id
//                 }
//             }
//         }
//     }
// `;



const getUserQuery = gql`
    query GetUser($username: USERNAME){
        user(username: $username) {
            username
            email
        }
    }
`;


export { getUserQuery, getUsersQuery };

// , getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
