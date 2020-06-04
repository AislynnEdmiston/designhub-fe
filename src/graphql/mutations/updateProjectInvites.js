import gql from 'graphql-tag';

const updateProjectInvites = gql`
mutation updateProjectInvites($data: updateProjectInviteInput!) {
    updateProjectInvites(data: $data){
    id
    email
    projectId
    created_at
    updated_at
 	 }
  }
`;

export default updateProjectInvites;



