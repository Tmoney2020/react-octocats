import React, { Component } from 'react'
import Octocats from './components/Octocats'
import octocat from './Octocat.json'
import Header from './components/Header'

class App extends Component {
  render() {
    const octocatsToPublish = octocat.map(cat => (
      <Octocats
        pictureWebsite={cat.pictureWebsite}
        image={cat.image}
        imageNumber={cat.imageNumber}
        name={cat.name}
        author={cat.author}
        authorPicture={cat.authorPicture}
      />
    ))
    return (
      <body>
        <Header />
        <main>{octocatsToPublish}</main>
        <footer>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </body>
    )
  }
}

export default App
