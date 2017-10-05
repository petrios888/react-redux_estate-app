import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Cephas'
    }
  }
  render () {
    return (
      <header>
      <div> Logo </div>
      <nav>
        <a href="#">create ads </a>
        <a href="#">about us </a>
        <a href="#">log in  </a>
        <a href="#" className= "register-btn"></a>
      </nav>
      <Header />

      </header>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
