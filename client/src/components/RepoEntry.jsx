import React from 'react';

const RepoEntry = (props) => (
  <div className="entry">
    <h3>
      <a href={props.repo.repoURL}>{props.repo.repoName}</a>
    </h3>
    <p>{props.repo.username}</p>
  </div>
)

export default RepoEntry;