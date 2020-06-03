import gql from 'graphql-tag';

const addFollower = gql`
mutation addFollower($data: addFollowerInput!) {
    addFollower(data: $data) {
		id     
		followingId
    followedId
    created_at
    }
  }
`;

export default addFollower;


