import gql from 'graphql-tag';

const updateProjectInvite = gql`
mutation updateProjectInvite($data: updateProjectInviteInput!) {
    updateProjectInvite(data: $data){
    id
    email
    projectId
    created_at
    updated_at
 	 }
  }
`;

export default updateProjectInvite;



