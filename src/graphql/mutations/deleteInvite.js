import gql from 'graphql-tag';

const deleteInvite = gql`
mutation deleteInvite($id: ID!) {
    deleteInvite(id: $id)
}
`;

export default deleteInvite;