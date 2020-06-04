import gql from 'graphql-tag';

const deleteProjectPhotos = gql`
mutation Projects($id: ID!) {
    deleteProjectPhotos(id: $id)
}
`;

export default deleteProjectPhotos;



