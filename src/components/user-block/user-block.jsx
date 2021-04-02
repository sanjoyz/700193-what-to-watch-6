import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {fetchFavoriteFilms} from '../../store/api-actions';


const UserBlock = () => {
  const {userInfo, authorizationStatus} = useSelector(({USER}) => USER);


  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH &&
                <div className="user-block__avatar">
                  <Link to={{pathname: AppRoute.MYLIST}} onClick={() => dispatch(fetchFavoriteFilms())}>
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
};

export default UserBlock;

