import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <main>
      <div className="nav-bar">
        Welcome to my React Router Page
      </div>

      <div className="center">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            background: (242,237,237,1)
          }}
        >
          <Link to="Home">Home</Link> | {" "}
          <Link to="JsonStuff">JsonStuff</Link> |{" "}
          <Link to="Resources">Resources</Link> | {" "}
        </nav>
      </div>

      <Outlet />
    </main>
  );
}

export default App;
