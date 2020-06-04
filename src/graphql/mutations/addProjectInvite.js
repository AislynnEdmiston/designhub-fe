import gql from 'graphql-tag';

const addProjectInvite = gql`
mutation addProjectInvite($data: addProjectInviteInput!) {
    addProjectInvite(data: $data){
    id
    email
    projectId
    created_at
    updated_at
 	 }
  }
`;

export default addProjectInvite;
