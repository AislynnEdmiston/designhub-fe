import gql from 'graphql-tag';

const search = gql`
mutation search($text: String!) {
  search(text: $text){
  user{
    id
  }
  project{
    id
  }
}
}
`;

export default search;
