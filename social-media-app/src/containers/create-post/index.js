import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from "../../contexts/user";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  return (
    <div className="createPost">
      {
        user ?
        (<div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea className="createPost__textArea" rows="3" value={caption} onChange={(e) => setCaption(e.target.value)}>

            </textarea>
          </div>
        </div>)
        :
        (<div>
          <SignInBtn/>
          <p style={{ marginLeft: "12px" }}>to Post & Comment</p>
        </div>)
      }
    </div>
  );
}
