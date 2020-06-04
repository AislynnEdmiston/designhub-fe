import gql from 'graphql-tag';

const addUserResearching = gql`
mutation addUserResearching($data: UserResearchInput!) {
    addUserResearching(data: $data) {
  	id
    url
    projectId
    created_at
    }
}
`;

export default addUserResearching;


