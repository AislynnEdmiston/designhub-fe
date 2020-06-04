import gql from 'graphql-tag';

const deleteCategory = gql`
mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id)
}
`;

export default deleteCategory;