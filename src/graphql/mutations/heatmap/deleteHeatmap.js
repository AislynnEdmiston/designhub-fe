<<<<<<< HEAD:src/graphql/mutations/deleteHeatmap.js
=======
import gql from 'graphql-tag';

const DELETE_HEATMAP_MUTATION = gql`
  mutation deleteHeatmap($id: ID!) {
    deleteHeatmap(id: $id)
  }
`;
export default DELETE_HEATMAP_MUTATION;
>>>>>>> 8097d3334a950a950264afb95fd4eab149e10b23:src/graphql/mutations/heatmap/deleteHeatmap.js
