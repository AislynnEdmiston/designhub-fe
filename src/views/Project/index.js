import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';
import figmaIcon from '../../ASSETS/figma-icon.png';
import invisionIcon from '../../ASSETS/invision-icon.png';
import DownloadIcon from '../../ASSETS/Icons/DownloadIcon';
import StarIcon from '../../ASSETS/Icons/StarIcon';
import caseStudyIcon from '../../ASSETS/case-study.png';

export default function Projects() {
  const { id } = useParams();
  return (
    <Layout>
      <h1>Projects!</h1>
      <h3>Project id: {id}</h3>
      <div className="project-container">
		<div className="project-header">
		  <div className="project-header-alignment">
			<div className="project-details">
			<h2>project.name</h2>
			<h3>project.dectiption</h3>
			  <div className="subtitle">
				<span>
					Created by placeholderUsername
					<span className="project-header-username">
					  <Link>
					  	project.username
					  </Link>
					</span>
				</span>	
				<span>
					Created on placeholderDate
				</span>
{
				// <span>
				//  Logic for privateProject
				// </span>
}
				<span className="collab-count">
				1
{
					//props.acceptedInvites.length
}
				<span className="collab-members">
{
					//find(user.id === invite.userId)
}					
					<p>joe</p>
					<p>bob</p>
					<p>jane</p>

				</span>
				</span>
			{/*projectCategory*/}
			<span>
				<p>ux</p>
				<p>fan art</p>
			</span>
			</div>
		  </div>
		  <div className="project-header-right">
			<div className="project-header-team">
			<img src={avatar1} alt="user avatar"/>
			<img src={avatar2} alt="user avatar"/>
			<img src={avatar3} alt="user avatar"/>
		  </div>
		  <div className="project-header-link">
		    <div className="project-header-button">
			  {/*{props.projectResearch[0]? (
			    <img src-{caseStudyIcon} alt="case study" classname="pdf-button"
			      onClick={() => }) 
			      />
			  			) : (
			  	*/}
			      <img
                      src={caseStudyIcon}
                      alt="case study"
                      className="pdf-button-disabled"
                      />
		    </div>
		     <div className="project-header-button">
                    {/*
                    {thisProject.figma ? (
                      <a href={thisProject.figma}>
                        <img
                          src={figmaIcon}
                          className={
                            thisProject.figma === null ||
                            thisProject.figma === ''
                              ? 'link-disabled'
                              : 'link-enabled'
                          }
                          alt="figma"
                        />
                      </a>
                    ) : (
                */}
                      <img
                        src={figmaIcon}
                        className="link-enabled"
                        //  thisProject.figma === null || thisProject.figma === ''
                           // ? 'link-disabled'
                           // : 'link-enabled'
                        alt="figma"
                      />
                    )}
              </div>
		  </div>
		  </div>
			</div>
		</div>
      </div>
    </Layout>
  );
}