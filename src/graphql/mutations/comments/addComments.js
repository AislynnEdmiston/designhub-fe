import gql from 'graphql-tag';

const ADD_COMMENT_MUTATION = gql`
  mutation Comments($data: CommentsInput!) {
    addComments(data: $data) {
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

export default ADD_COMMENT_MUTATION;
