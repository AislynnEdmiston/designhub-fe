import gql from 'graphql-tag';

const updateComments = gql`
  mutation deleteComments($data: ID!) {
    deleteComments(id: $data)
  }
`;

export default updateComments;
