import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div className="list">
    {props.repos.map((repo, i) => (
      <RepoEntry key={i} repo={repo}/>
    ))}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;