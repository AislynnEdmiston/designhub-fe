import gql from 'graphql-tag';

const addHeatmap = gql`
mutation addHeatmap($data: addHeatmapInput!) {
    addHeatmap(data: $data) {
    userId
    projectId
    imageId
    count
    date
    contribution
    }
  }
`;

export default addHeatmap;


