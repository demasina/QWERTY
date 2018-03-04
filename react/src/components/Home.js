import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from './withAuthorization';

const AccPage = (props, { authUser }) =>
<div>
  <h2>Welcome, {authUser.email}</h2>
  
    </div>



AccPage.contextTypes = {
authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccPage);
