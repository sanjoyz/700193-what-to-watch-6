import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

const UserBlock = (props) => {

  const {authorizationStatus, userInfo} = props;

  return (
    <React.Fragment>
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH &&
                <div className="user-block__avatar">
                  <Link to={{pathname: AppRoute.MYLIST}}>
                    <img src={userInfo.avatar_url} alt={userInfo.name} width="63" height="63" />
                  </Link>
                </div>
        }
        {
          authorizationStatus === AuthorizationStatus.NO_AUTH &&
                <Link to={{pathname: AppRoute.LOGIN}} className={`user-block__link`}>
                  Sign in
                </Link>
        }
      </div>
    </React.Fragment>
  );
};

UserBlock.propTypes = {
  userInfo: PropTypes.object,
  authorizationStatus: PropTypes.string,
  onUserLoad: PropTypes.func,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.userInfo,
});

export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);

