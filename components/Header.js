import Link from 'next/link';
import NavMenu from './NavMenu';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed-banner is--visible w-full bg-white shadow">
      <div className="inner_nav_wrap u-container-large flex items-center justify-between">
        <Link href="/" passHref>
          <a aria-label="home" className="innner_nav-logo_link w-inline-block w--current">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/642adcaf364024552e71df01/642adcaf364024281f71df43_Logo-Full.svg"
              alt="Aikido"
            />
          </a>
        </Link>
        <NavMenu />
        <div className="inner_nav_buttons flex items-center space-x-4">
          <Link href="https://app.aikido.dev/login" passHref>
            <a id="login" className="inner_nav_login text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Link>
          <Link href="https://app.aikido.dev/login" passHref>
            <a className="u-button-primary is--small w-inline-block px-4 py-2 bg-blue-600 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
              <span className="u-button-text z-index-1">Start for Free</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
