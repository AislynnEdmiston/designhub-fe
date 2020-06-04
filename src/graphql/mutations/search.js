import gql from 'graphql-tag';

const search = gql`
mutation search($data: searchInput!) {
  search(data: $data){
  text
  user
  project
  }
}
`;

export default search;
