<<<<<<< HEAD:src/graphql/mutations/updatePhotoComments.js
=======
import gql from 'graphql-tag';

const UPDATE_PHOTO_COMMENT_MUTATION = gql`
  mutation Comments($data: updatePhotoCommentsInput!) {
    updatePhotoComments(data: $data) {
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

export default UPDATE_PHOTO_COMMENT_MUTATION;
>>>>>>> 8097d3334a950a950264afb95fd4eab149e10b23:src/graphql/mutations/comments/updatePhotoComments.js
