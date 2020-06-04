import gql from 'graphql';

const DELETE_PROJECT_PHOTO_MUTATION = gql`
  mutation deleteProjectPhotos($id: ID!) {
    deleteProjectPhotos(id: $id)
  }
`;
export default DELETE_PROJECT_PHOTO_MUTATION;
