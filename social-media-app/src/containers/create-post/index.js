import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from "../../contexts/user";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");

  const handleChange = () => {

  };

  return (
    <div className="createPost">
      {
        user ?
        (<div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea
              className="createPost__textArea"
              rows="3" value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="createPost__imageUpload">
          <label htmlFor="fileInput">
            <AddAPhotoIcon style={{cursor: "pointer", fontSize: "20px"}}/>
          </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
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
