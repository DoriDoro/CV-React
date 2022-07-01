import React from 'react';

export default function ProjectsSingleProject({ link, title, nameOfProject, contentTitle, requirements, contentProject }) {
    return (
        <div className="ProjectsSingleProject">
        <a
          href={link}
          alt={nameOfProject}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> {title} - {nameOfProject} </h3>
          <p>
            {contentTitle}
          </p>
          <p> 
            {requirements}
          </p>

          <h5> desciption of the project: </h5>
          <p>
            {contentProject}
          </p>
        </a>
        </div>
    )
}
