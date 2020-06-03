import gql from 'graphql-tag';

const addUserResearch = gql`
mutation addUserResearch($data: UserResearchInput!) {
    addUserResearch(data: $data) {
  	id
    url
    projectId
    created_at
    }
}
`;

export default addUserResearch;


