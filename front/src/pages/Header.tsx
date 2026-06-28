import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ホーム
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/game"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ゲーム
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kuji"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              一番くじ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;