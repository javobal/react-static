import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'

import './app.css'

class BackButton extends Component {
  onClick = () => {
    window.history.back()
  }

  render = () => (
    <button
      className={this.props.className}
      onClick={this.onClick}
      type='button'
    >back</button>
  )
}

const ComponentA = () => (
  <div>
    <h1>ComponentA</h1>

    <BackButton className='backButton'/>
  </div>
)

const ComponentB = () => (
  <div>
    <h1>ComponentB</h1>

    <BackButton className='backButton'/>
  </div>
)

const App = () => (
  <Root>
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>

        <Link to="/component-a">ComponentA</Link>
        <Link to="/component-b">Componentb</Link>
      </nav>
      <div className="content">
        <Routes />

        <Router>
          <ComponentA path='/component-a'/>

          <ComponentB path='/component-b' />
        </Router>
      </div>
    </div>
  </Root>
)

export default App
