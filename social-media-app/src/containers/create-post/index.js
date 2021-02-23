import React, { useContext } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from "../../contexts/user";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  return (
    <div className="createPost">
      {
        user ?
        (<p>Create Post</p>)
        :
        (<div>
          <SignInBtn/>
          <p style={{ marginLeft: "12px" }}>to Post & Comment</p>
        </div>)
      }
    </div>
  );
}
