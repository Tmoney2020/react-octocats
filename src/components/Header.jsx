import React, { Component } from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul>
          <li>
            <img
              className="icon"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="icon"
            />
          </li>
          <li className="OctodexHeading">
            <a href="https://octodex.github.com/"> Octodex</a>
          </li>
          <li className="Home">
            <a href="https://octodex.github.com/">Home</a>
          </li>
          <li className="FAQ">
            <a href="https://octodex.github.com/faq/">FAQ</a>
          </li>
          <li className="Twitter">
            <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
          </li>
          <li>
            <a data-github="Back to GitHub.com" href="https://github.com/"></a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
