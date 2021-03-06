import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../store/api-actions';
import {NavLink, Redirect, useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';


const SignIn = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValidation, setformValidation] = useState({emailValid: true, err: ``});

  const validateEmail = (email) => {
    const isValidEmail = !!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const message = isValidEmail ? `` : `Please enter a valid email address`;
    setformValidation({emailValid: isValidEmail, err: message});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formValidation.emailValid) {
      evt.stopPropagation();
    } else {
      dispatch(signIn({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      history.push(`/`);
    }
  };

  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <NavLink to={{pathname: AppRoute.MAIN}} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </NavLink>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            {!formValidation.emailValid &&
            <div className="sign-in__message">
              <p>{formValidation.err}</p>
            </div>
            }
            <div className="sign-in__fields">
              <div className={`sign-in__field ${formValidation.emailValid ? `` : `sign-in__field--error`} `}>
                <input className="sign-in__input" type="email" placeholder="Email address" ref={loginRef} name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" ref={passwordRef} name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" onClick={()=>validateEmail(loginRef.current.value)}>Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default SignIn;


