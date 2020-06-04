import gql from 'graphql-tag';

const updateCategory = gql`
mutation search($data: searchInput!) {
    search(data: $data){
    text
    user
    project
 	 }
  }
`;

export default updateCategory;
