import gql from 'graphql-tag';

const deleteProjectInvite = gql`
mutation Invite($id: ID!) {
    deleteProjectInvite(id: $id)
}
`;

export default deleteProjectInvite;



