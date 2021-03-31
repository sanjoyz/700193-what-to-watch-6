import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {checkAuth} from '../../store/api-actions';

const UserBlock = (props) => {

  const {authorizationStatus, userInfo, isUserLoaded} = props;
  useEffect(() => {
    if (!isUserLoaded) {
      checkAuth();
    }
  }, [userInfo]);
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
  isUserLoaded: PropTypes.bool,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.userInfo,
  isUserLoaded: USER.isUserLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onUserLoad() {
    dispatch(checkAuth());
  }
});
export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);

