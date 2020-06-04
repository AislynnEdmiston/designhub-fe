<<<<<<< HEAD:src/graphql/mutations/deletePhotoComments.js
=======
import gql from 'graphql-tag';

const DELETE_PHOTO_COMMENT_MUTATION = gql`
  mutation Comments($id: ID!) {
    deletePhotoComments(id: $id)
  }
`;
export default DELETE_PHOTO_COMMENT_MUTATION;
>>>>>>> 8097d3334a950a950264afb95fd4eab149e10b23:src/graphql/mutations/comments/deletePhotoComments.js
