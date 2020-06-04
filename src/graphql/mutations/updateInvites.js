import gql from 'graphql-tag';

const updateInvites = gql`
mutation updateInvites($data: updateInviteInput!) {
    updateInvites(data: $data){
    id
    activeUserId
    invitedUserId
    starredProjectsId
    commentsId
    projectId
    projectName
    imageId
    activeUserAvatar
    activeUsername
    mainImgUrl
    commentText
    teamId
    followersId
    type
    message
    unread
    created_at
 	 }
  }
`;

export default updateInvites;


