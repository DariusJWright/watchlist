import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 className='logo'>Watchlist</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>Login</a>
          </li>
          <li>
            <a href='#'>Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;