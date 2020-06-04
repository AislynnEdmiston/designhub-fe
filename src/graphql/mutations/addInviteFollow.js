import gql from 'graphql-tag';

const addInviteFollow = gql`
mutation addInviteStarred($data: InviteInput!) {
    addInviteStarred(data: $data){
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

export default addInviteFollow;


