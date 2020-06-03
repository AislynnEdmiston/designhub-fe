import gql from 'graphql-tag';

const addCategory = gql`
mutation addCategory($data: CategoryInput!) {
    addCategory(data: $data) {
		id     
		category
    }
  }
`;

export default addCategory;


