import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { PDFReader } from 'reactjs-pdf-reader';
import './SASS/Project.scss';

//components:
import Loading from '../../common/Loading';
import Error401Projects from './Error401Projects';
import Error404Projects from './Error404Projects';
//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';
import figmaIcon from '../../ASSETS/figma-icon.png';
import invisionIcon from '../../ASSETS/invision-icon.png';
import DownloadIcon from '../../common/Icons/DownloadIcon';
import StarIcon from '../../common/Icons/StarIcon';
import ImageViewer from '../ImageViewer/ImageViewer.js';
import {
  GET_USER_PROJECTS_QUERY,
  GET_ALL_PROJECT_PHOTOS_QUERY,
  GET_PROJECT_COMMENTS_QUERY,
  GET_STAR_COUNT_QUERY,
  GET_INVITE_BY_ID_QUERY,
  GET_USER_PROJECT_INVITE_QUERY,
  GET_ALL_USER_PROJECT_INVITES_QUERY,
  GET_RESEARCH_BY_PROJECT_ID_QUERY,
  GET_USER_BY_ID_QUERY,
} from '../../graphql';// import {
//   ProjectUser,
//   getProjectPhotos,
//   getProjectComments,
//   starProject,
//   getStarStatus,
//   //unstarProject,?
//   getInvitesByProjectId,
//   getUsersFromInvites,
//   getProjectResearch,
//   getCategoriesByProjectId,
// } from '../../store/actions';

//change to function
const Project = (props) => {
  // useState
  //this.projectId = this.props.match.params.id;
  const [id, setId] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [editAccess, setEditAccess] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pdfPage, setPdfPage] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [activeUser, setActiveUser] = useState({
    id: activeUser.id,
    email: activeUser.email || '',
  });
  const [thisProject, setThisProject] = useState({
    description: thisProject.description || '',
    name: thisProject.name || '',
    userId: thisProject.userId,
    created_at: thisProject.created_at || '',
    figma: thisProject.figma || '',
    invision: thisProject.invision || '',
    username: thisProject.username || '',
    id: thisProject.id,
    privateProjects: thisProject.privateProjects || '',
  });

  // useState object or break it up
  // this.state = {
  //   editAccess: false,
  //   numPages: null,
  //   pdfPage: 1,
  //   showPDF: false,
  //   pdfLoading: false,
  // };
  const singleProject = useQuery(GET_USER_BY_ID_QUERY, {
    variables: {
      id,
    },
  });
  const getProjectPhotos = useQuery(GET_ALL_PROJECT_PHOTOS_QUERY, {
    variables: {
      projectId,
    },
  });
  const getProjectComments = useQuery(GET_PROJECT_COMMENTS_QUERY, {
    variables: {
      projectId,
    },
  });
  const getStarStatus = useQuery(GET_STAR_COUNT_QUERY, {
    variables: {
      id,
    },
  });
  const getUsersFromInvites = useQuery(GET_USER_PROJECT_INVITE_QUERY, {
    variables: {
      id,
    },
  });
  const getInvitesByProjectId = useQuery(GET_INVITE_BY_ID_QUERY, {
    variables: {
      id,
    },
  });
  const getProjectResearch = useQuery(GET_RESEARCH_BY_PROJECT_ID_QUERY, {
    variables: {
      projectId,
    },
  });
  const getCategoriesByProjectId = useQuery(GET_CATEGORY_BY_ID_QUERY, {
    variables: {
      id,
    },
  });
  //change to use effect
  useEffect(() => {
    props.getInvitesByProjectId(projectId).then (() =>{
      handleEditAccess();
      props.getUsersFromInvites(props.projectInvites);
    });
    props.getProjectResearch(projectId);
    props.getStarStatus(
      props.activeUser.id,
      props.match.params.id
      )
  });

  // componentDidMount() {
  //   this.props.getInvitesByProjectId(this.projectId).then(() => {
  //     this.handleEditAccess();
  //     this.props.getUsersFromInvites(this.props.projectInvites);
  //   });
  //   this.props.getProjectResearch(this.projectId);
  //   this.props.getStarStatus(
  //     this.props.activeUser.id,
  //     this.props.match.params.id
  //   );
  //   this.props
  //     .singleProject(this.projectId) //gets a single project from the database
  //     .then(() => {
  //       //if there is an error skip the rest of this if/else block
  //       if (this.props.singleProjectError !== null) {
  //         console.log('single project error', this.props.singleProjectError);
  //         return;
  //       } else {
  //         //if there are no errors, get the project, photos, and comments
  //         this.props
  //           .singleProject(this.projectId)
  //           .then(() => {
  //             this.props.getProjectPhotos(this.projectId);
  //           })
  //           .then(() => {
  //             this.props.getProjectComments(this.props.match.params.id);
  //           })
  //           .then(() => {
  //             this.props.getCategoriesByProjectId(this.projectId);
  //           });
  //       }
  //     });
  // }
  //add function
  function onDocumentComplete(totalPage) {
    //this.setState({ numPages: totalPage, pdfLoading: false });
    setNumPages(totalPage);
    setPdfLoading(false);
  }

  function handleChangePage(direction) {
    // if (direction && this.state.pdfPage !== this.state.numPages) {
    if (direction && pdfPage !== numPages) {
      // this.setState({ pdfPage: this.state.pdfPage + 1 });
      setPdfPage({ pdfPage: pdfPage + 1 });
      // } else if (!direction && this.state.pdfPage !== 1) {
    } else if (!direction && pdfPage !== 1) {
      // this.setState({ pdfPage: this.state.pdfPage - 1 });
      setPdfPage({ pdfPage: pdfPage - 1 });
    }
  }

  // function starProject() {
  //   const starObj = {
  //     userId: props.activeUser.id,
  //     projectId: this.projectId,
  //   };
  //   this.props.starProject(starObj).then(() => {
  //     this.props.getStarStatus(
  //       this.props.activeUser.id,
  //       this.props.match.params.id
  //     );
  //   });
  // }
  function starProject() {
    const starObj = {
      userId: props.activeUser.id,
      projectId: projectId,
    };
    };
  }
  // function unstarProject() {
  //   const starObj = {
  //     id: this.props.activeUser.id,
  //   };
  //   this.props.unstarProject(starObj, this.props.match.params.id).then(() => {
  //     this.props.getStarStatus(
  //       this.props.activeUser.id,
  //       this.props.match.params.id
  //     );
  //   });
  // }

  function unstarProject() {
    const starObj = {
      id: props.activeUser.id,
    };
    };
  
  

  // function handleEditAccess() {
  //   const userInvite = this.props.acceptedInvites.find(
  //     (invite) => invite.email === this.props.activeUser.email
  //   );
  //   console.log(userInvite);
  //   if (!userInvite || userInvite.write === false) {
  //     this.setState({ editAccess: false });
  //   } else {
  //     this.setState({ editAccess: true });
  //   }
  // }
  //

  // ____________this function needs useState written for it___________
  function handleEditAccess() {
    const userInvite = props.acceptedInvites.find(
      (invite) => invite.email === props.activeUser.email
    );
    console.log(userInvite);
    if (!userInvite || userInvite.write === false) {
      setEditAccess({ editAccess: false });
    } else {
      setEditAccess({ editAccess: true });
    }
  }
  //_________________________________________________________
  //
  if (props.singleProjectError === 404) {
    return <Error404Projects />; //if the project was not found
  } else if (props.singleProjectError === 401) {
    return <Error401Projects />; //if the user is unauthorized to view the project
  } else if (thisProject && activeUser && props.projectPhotos) {
    return (
      <div className="projects-container">
        <div className="project-header">
          <div className="project-header-alignment">
            <div className="project-details">
              <h2>{thisProject.name}</h2>
              <h3>{thisProject.description}</h3>
              <div className="subtitle">
                <span>
                  Created by{' '}
                  <span className="project-header-username">
                    <Link
                      to={`/profile/${thisProject.userId}/${thisProject.username}`}
                    >
                      {thisProject.username}
                    </Link>
                  </span>
                </span>
                <span>
                  Created on{' '}
                  {moment(thisProject.created_at).format('MMM DD, YYYY')}
                </span>
                <span>
                  {thisProject.privateProjects === true ? 'Private' : 'Public'}
                </span>
                <span className="collab-count">
                  {props.acceptedInvites.length}{' '}
                  {props.acceptedInvites.length === 1
                    ? 'Collaborator'
                    : 'Collaborators'}
                  {props.acceptedInvites.length === 0 ? null : (
                    <span className="collab-members">
                      {props.acceptedInvites.map((invite) => {
                        const user = props.usersFromInvites.find(
                          (user) => user.id === invite.userId
                        );
                        return (
                          <p key={invite.id}>
                            {!user
                              ? null
                              : user.firstName
                              ? user.firstName + ' ' + user.lastName
                              : user.email}{' '}
                          </p>
                        );
                      })}
                    </span>
                  )}
                </span>
                {/*project category*/}
                <span>
                  {!props.projectCategories[0]
                    ? null
                    : props.projectCategories[0].category}
                </span>
              </div>
            </div>
            <div className="project-header-right">
              <div className="project-header-team">
                <img src={avatar1} alt="user avatar" />
                <img src={avatar2} alt="user avatar" />
                <img src={avatar3} alt="user avatar" />
              </div>
              <div className="project-header-links">
                <div className="project-header-button">
                  {this.props.projectResearch[0] ? (
                    <img
                      src={caseStudyIcon}
                      alt="case study"
                      className="pdf-button"
                      onClick={
                        (() => setShowPDF({ showPDF: !showPDF }),
                        setPdfLoading({ pdfLoading: false }))
                        // this.setState({
                        //   showPDF: !this.state.showPDF,
                        //   pdfLoading: true,
                        // })
                      }
                    />
                  ) : (
                    <img
                      src={caseStudyIcon}
                      alt="case study"
                      className="pdf-button-disabled"
                    />
                  )}
                </div>
                <div className="project-header-button">
                  {thisProject.figma ? (
                    <a href={thisProject.figma}>
                      <img
                        src={figmaIcon}
                        className={
                          thisProject.figma === null || thisProject.figma === ''
                            ? 'link-disabled'
                            : 'link-enabled'
                        }
                        alt="figma"
                      />
                    </a>
                  ) : (
                    <img
                      src={figmaIcon}
                      className={
                        thisProject.figma === null || thisProject.figma === ''
                          ? 'link-disabled'
                          : 'link-enabled'
                      }
                      alt="figma"
                    />
                  )}
                </div>
                <div className="project-header-button">
                  {thisProject.invision ? (
                    <a href={thisProject.invision}>
                      <img
                        src={invisionIcon}
                        className={
                          thisProject.invision === '' ||
                          thisProject.invision === null
                            ? 'link-disabled'
                            : 'link-enabled'
                        }
                        alt="invision"
                      />
                    </a>
                  ) : (
                    <img
                      src={invisionIcon}
                      className={
                        thisProject.invision === '' ||
                        thisProject.invision === null
                          ? 'link-disabled'
                          : 'link-enabled'
                      }
                      alt="invision"
                    />
                  )}
                </div>
                <div className="download project-header-button">
                  <DownloadIcon />
                </div>
                <div
                  onClick={
                    props.isStarred ? unstarProject : starProject
                    // this.props.isStarred ? this.unstarProject : this.starProject
                  }
                  className="star project-header-button"
                >
                  <StarIcon isStarred={props.isStarred} />
                </div>
                {(props.activeUser.id === props.project.userId ||
                  editAccess) && (
                  <div
                    className="edit project-header-button"
                    onClick={() => {
                      props.history.push(`/project/${projectId}/edit`);
                    }}
                  >
                    Edit
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {showPDF && props.projectResearch.length > 0 ? (
          <div className="pdf-view">
            <div className="pdf-nav-buttons">
              <button onClick={() => setPdfPage({ pdfPage: 1 })}>First</button>
              <button onClick={() => handleChangePage(false)}>Previous</button>
              <p>
                Page {pdfPage} of {numPages}
              </p>
              <button onClick={() => handleChangePage(true)}>Next</button>
              <button onClick={() => setPdfPage({ pdfPage: numPages })}>
                Last
              </button>
            </div>
            <PDFReader
              url={props.projectResearch[0].url}
              onDocumentComplete={onDocumentComplete}
              page={pdfPage}
            />
            {pdfLoading ? <Loading /> : null}
            <div className="pdf-nav-buttons">
              <button onClick={() => setPdfPage({ pdfPage: 1 })}>First</button>
              <button onClick={() => handleChangePage(false)}>Previous</button>
              <p>
                Page {pdfPage} of {numPages}
              </p>
              <button onClick={() => handleChangePage(true)}>Next</button>
              <button onClick={() => setPdfPage({ pdfPage: numPages })}>
                Last
              </button>
            </div>
          </div>
        ) : (
          <div className="project-body">
            {/* THIS IS THE IMAGE CAROUSEL, it manages the StickyComments and ProjectComments */}
            <ImageViewer
              activeUser={activeUser}
              comments={props.projectComments}
              thisProject={thisProject}
              thumbnails={props.projectPhotos}
            />
          </div>
        )}
      </div>
    );
  } else {
    return <Loading />; //if it wasn't a 401 or 404 error, display the spinner
  }
};

// const mapStateToProps = state => {
//   return {
//     project: state.projects.singleProject,
//     singleProjectError: state.projects.error, //assign 401 or 404 to singleProjectsError
//     projectPhotos: state.photos.projectPhotos,
//     projectComments: state.comments.projectComments,
//     isStarred: state.stars.isStarred,
//     acceptedInvites: state.projects.acceptedInvites,
//     usersFromInvites: state.invites.usersFromInvites,
//     projectInvites: state.projects.projectInvites,
//     projectResearch: state.research.projectResearch,
//     projectCategories: state.categories.projectCategories
//   };
// };

export default Project;
