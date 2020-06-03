import gql from 'graphql-tag';

const deleteStarred = gql`
mutation deleteStarred($data: CategoryInput!) {
    deleteStarred(data: $data) {
		id     
		category
    }
  }
`;

export default deleteStarred;


