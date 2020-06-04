import gql from 'graphql-tag';

            const addInviteComments = gql`
mutation addInviteComments($data: InviteInput!) {
    addInviteComments(data: $data){
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

export default addInviteComments;


