import React from "react";

function Header() {
  return (
    <header className="app-header">
      <nav>
        <ul className="nav-list">
          <li><a href="/game" className="nav-link">ゲーム</a></li>
          <li><a href="/1kuji" className="nav-link">1番くじ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;