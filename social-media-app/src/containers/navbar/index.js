import React, { useState, useContext } from 'react';
import './style.css';
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user';

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className="navbar">
      <p>Social Media</p>
      {user ? (<img className="navbar__img" src={user.photoURL}></img>) : (<SignInBtn/>)}
    </div>
  );
}
