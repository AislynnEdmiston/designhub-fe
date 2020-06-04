import gql from 'graphql-tag';

const deleteProject = gql`
mutation Projects($id: ID!) {
    deleteProject(id: $id)
}
`;

export default deleteProject;



