<<<<<<< HEAD:src/graphql/mutations/addPhotoComments.js
=======
import gql from 'gaphql-tag';

const ADD_PHOTO_COMMENT_MUTATION = gql`
  mutation Comments($data: PhotoCommentsInput!) {
    addPhotoComments(data: $data) {
      id
      userId
      projectId
      username
      imageId
      top
      left
      text
      created_at
    }
  }
`;
export default ADD_PHOTO_COMMENT_MUTATION;
>>>>>>> 8097d3334a950a950264afb95fd4eab149e10b23:src/graphql/mutations/comments/addPhotoComments.js
