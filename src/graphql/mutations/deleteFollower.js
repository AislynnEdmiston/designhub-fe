import gql from 'graphql-tag';

const deleteFollower = gql`
mutation deleteFollower($id: ID!) {
    deleteFollower(id: $id)
}
`;

export default deleteFollower;