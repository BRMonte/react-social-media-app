import React from 'react';
import './style.css';
import { SignInBtn } from '../../components';

export default function CreatePost(props) {
  return (
    <div className="createPost">
      <SignInBtn/>
      <p>to post and comment</p>
    </div>
  );
}
