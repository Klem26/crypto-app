import { useState } from 'react';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import About from './pages/About';
import CreateNote from './pages/CreateNote';
import Login from './pages/Login';

import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  let navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/profile" className="link">
          Profile
        </Link>

        {!isAuth ? (
          <Link to="/login" className="link">
            Login
          </Link>
        ) : (
          <>
            <Link to="/createNote" className="link">
              Create
            </Link>
            <button onClick={signOut}> Sing Out</button>
          </>
        )}
        <div id="indicator"></div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>

        <Route
          path="/createNote"
          element={<CreateNote isAuth={isAuth} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
