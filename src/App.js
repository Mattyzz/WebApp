import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <h1>Testing my React Router Stuff</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="Home">Home</Link> |{" "}
        <Link to="Page2">Page2</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
