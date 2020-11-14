import Logo from '@tygr/logo';
import React from 'react';

export default function Header() {
  return (
    <div className="tygr-header">
      <Logo />
      <div className="social-media">
        <a
          href="https://twitter.com/tjgrinn?ref_src=twsrc%5Etfw"
          className="contact twitter"
          aria-label="Follow @tjgrinn on Twitter"
          target="_blank"
        >
          Follow @tjgrinn
        </a>
        <a
          className="contact github"
          href="https://github.com/tylergrinn"
          aria-label="Follow @tylergrinn on GitHub"
          target="_blank"
        >
          Follow @tylergrinn
        </a>
        <a className="contact email" href="mailto:tyler@tygr.info">
          <svg width="12px" height="9px" viewBox="0 0 100 75">
            <rect
              width="100"
              height="75"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <path
              fill="none"
              d="M0 0 L50 50 L100 0"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          tyler@tygr.info
        </a>
      </div>
    </div>
  );
}
