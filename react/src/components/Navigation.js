import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import PropTypes from 'prop-types';
import * as routes from '../constants/routes';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul id="homeB">
    {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
    {/* <li><Link to={routes.HOME}>Home</Link></li> */}
    <li><SignOutButton id="outButton"/></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li id="butIn"><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;