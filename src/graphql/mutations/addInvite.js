import gql from 'graphql-tag';

const addInvite = gql`
mutation addInvite($data:InviteInput!){
    addInvite(data:$data){
      activeUserId
      invitedUserId
      activeUserAvatar
      activeUsername
    }
  }
`;

export default addInvite;


