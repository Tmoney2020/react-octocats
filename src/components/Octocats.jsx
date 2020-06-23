import React, { Component } from 'react'

class Octocats extends React.Component {
  render() {
    return (
      // <article className="cat">
      <div className="PictureAuthor">
        <a href={this.props.pictureWebsite}>
          <img
            className="Octodex"
            src={this.props.image}
            alt={this.props.name}
          />
        </a>
        <ul>
          <li className="Number">{this.props.number}</li>
          <li>
            <a href={this.props.pictureWebsite}>{this.props.name}</a>
          </li>
          <li>
            <a href={this.props.author}>
              <img className="Author" src={this.props.authorPicture} />
            </a>
          </li>
        </ul>
      </div>
      // </article>
    )
  }
}

export default Octocats
