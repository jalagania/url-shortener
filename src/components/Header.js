import "./Header.css";
import logo from "../images/logo.svg";

function Header() {
  function handleMenuClick() {
    document.querySelector("nav").classList.toggle("visible");
  }

  return (
    <header>
      <img className="logo" src={logo} />
      <nav>
        <ul className="navbar">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li className="login">
            <a href="#">Login</a>
          </li>
          <li className="signup">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>

      <div className="icon-menu" onClick={handleMenuClick}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>menu</title>
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
