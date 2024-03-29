import React, { /*useEffect, useState */ } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {

  const sessionUser = useSelector(state => state.session.user);

  return (

    <ul className='nav'>
      <div className='pawbnb'>
        <li >
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <div className='logo-name'>
              <i className="fa-solid fa-paw"></i><span> pawbnb</span>
              {/* <i className="fa-brands fa-airbnb fa-rotate-180"></i><span>luxbnb</span> */}
            </div>
          </NavLink>
        </li>
      </div>
      {isLoaded && (
        <>
          {sessionUser && (
            <div className='createspot'>
              <li className='create-spot-container-main'>
                <NavLink exact to="/spots/new" className="create-new-spot-main">Create a New Spot</NavLink>
              </li>
            </div>
          )}
          <div className='profilelogo'>
            <li>
              <ProfileButton user={sessionUser} />
            </li>
          </div>
        </>
      )}
    </ul>
  );
}

export default Navigation;
