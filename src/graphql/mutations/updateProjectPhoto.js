import gql from 'graphql-tag';

const updateProjectPhoto = gql`
mutation updateProjectPhoto($data: updateProjectPhotoInput!) {
    updateProjectPhoto(data: $data){
    id
    url
    description
    title
    created_at
 	 }
  }
`;

export default updateProjectPhoto;



