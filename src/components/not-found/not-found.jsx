import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <React.Fragment>
    <h1>404 Not found</h1>
    <Link to="/">Вернуться на главную</Link>
  </React.Fragment>
);
export default NotFound;
