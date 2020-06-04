import gql from 'graphql-tag';

const deleteUser = gql`
mutation deleteUser($id: ID!) {
  deleteUser(id: $id)
}
`;
export default deleteUser;
