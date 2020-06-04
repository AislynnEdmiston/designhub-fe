import gql from 'graphql-tag';

const deleteComments = gql`
mutation deleteComments($id: ID!) {
    deleteComments(id: $id)
}
`;

export default deleteComments;