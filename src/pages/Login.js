import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem(' isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };
  return (
    <div>
      <p> Google</p>
      <button className="login-with-google-btn" onClick={singInWithGoogle}>
        Sing In Google
      </button>
    </div>
  );
}

export default Login;
